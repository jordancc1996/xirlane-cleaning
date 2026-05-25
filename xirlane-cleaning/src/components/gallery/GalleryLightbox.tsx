"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type TouchEvent as ReactTouchEvent,
} from "react";
import { createPortal } from "react-dom";
import {
  HiChevronLeft,
  HiChevronRight,
  HiMinus,
  HiPlus,
  HiXMark,
} from "react-icons/hi2";
import { getPrefersReducedMotion } from "@/lib/motion";
import { IMAGE_QUALITY } from "@/lib/images";
import {
  GALLERY_ASPECT_DIMENSIONS,
  getGalleryImageSrc,
  type GalleryImage,
} from "@/lib/gallery-images";

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.25;

type GalleryLightboxProps = {
  images: GalleryImage[];
  activeIndex: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export default function GalleryLightbox({
  images,
  activeIndex,
  onClose,
  onIndexChange,
}: GalleryLightboxProps) {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(() => getPrefersReducedMotion());
  const [mounted, setMounted] = useState(false);

  const dragStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 });
  const swipeStart = useRef<{ x: number; y: number } | null>(null);
  const pinchStart = useRef<{ distance: number; zoom: number } | null>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const image = images[activeIndex];
  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < images.length - 1;

  const resetView = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const goPrev = useCallback(() => {
    if (activeIndex > 0) {
      onIndexChange(activeIndex - 1);
      resetView();
    }
  }, [activeIndex, onIndexChange, resetView]);

  const goNext = useCallback(() => {
    if (activeIndex < images.length - 1) {
      onIndexChange(activeIndex + 1);
      resetView();
    }
  }, [activeIndex, images.length, onIndexChange, resetView]);

  const zoomIn = useCallback(() => {
    setZoom((z) => Math.min(MAX_ZOOM, Number((z + ZOOM_STEP).toFixed(2))));
  }, []);

  const zoomOut = useCallback(() => {
    setZoom((z) => {
      const next = Math.max(MIN_ZOOM, Number((z - ZOOM_STEP).toFixed(2)));
      if (next <= 1) {
        setPan({ x: 0, y: 0 });
      }
      return next;
    });
  }, []);

  useEffect(() => {
    setMounted(true);
    if (getPrefersReducedMotion()) {
      setIsVisible(true);
    } else {
      requestAnimationFrame(() => setIsVisible(true));
    }
    closeButtonRef.current?.focus();

    return () => {
      setMounted(false);
    };
  }, []);

  useEffect(() => {
    resetView();
  }, [activeIndex, resetView]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
      if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        zoomIn();
      }
      if (event.key === "-") {
        event.preventDefault();
        zoomOut();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev, onClose, zoomIn, zoomOut]);

  useEffect(() => {
    const node = viewportRef.current;
    if (!node) return;

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (event.deltaY < 0) zoomIn();
      else zoomOut();
    };

    node.addEventListener("wheel", onWheel, { passive: false });
    return () => node.removeEventListener("wheel", onWheel);
  }, [zoomIn, zoomOut]);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (zoom <= 1) return;
    event.preventDefault();
    setIsDragging(true);
    dragStart.current = {
      x: event.clientX,
      y: event.clientY,
      panX: pan.x,
      panY: pan.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging || zoom <= 1) return;
    setPan({
      x: dragStart.current.panX + (event.clientX - dragStart.current.x),
      y: dragStart.current.panY + (event.clientY - dragStart.current.y),
    });
  };

  const handlePointerUp = () => setIsDragging(false);

  const handleTouchStart = (event: ReactTouchEvent<HTMLDivElement>) => {
    if (event.touches.length === 2) {
      const dx = event.touches[0].clientX - event.touches[1].clientX;
      const dy = event.touches[0].clientY - event.touches[1].clientY;
      pinchStart.current = { distance: Math.hypot(dx, dy), zoom };
      swipeStart.current = null;
      return;
    }

    if (event.touches.length === 1) {
      const touch = event.touches[0];
      if (zoom > 1) {
        dragStart.current = {
          x: touch.clientX,
          y: touch.clientY,
          panX: pan.x,
          panY: pan.y,
        };
        setIsDragging(true);
      } else {
        swipeStart.current = { x: touch.clientX, y: touch.clientY };
      }
    }
  };

  const handleTouchMove = (event: ReactTouchEvent<HTMLDivElement>) => {
    if (event.touches.length === 2 && pinchStart.current) {
      const dx = event.touches[0].clientX - event.touches[1].clientX;
      const dy = event.touches[0].clientY - event.touches[1].clientY;
      const distance = Math.hypot(dx, dy);
      const scale =
        pinchStart.current.zoom * (distance / pinchStart.current.distance);
      setZoom(Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, scale)));
      return;
    }

    if (zoom > 1 && event.touches.length === 1 && isDragging) {
      const touch = event.touches[0];
      setPan({
        x: dragStart.current.panX + (touch.clientX - dragStart.current.x),
        y: dragStart.current.panY + (touch.clientY - dragStart.current.y),
      });
    }
  };

  const handleTouchEnd = (event: ReactTouchEvent<HTMLDivElement>) => {
    pinchStart.current = null;
    setIsDragging(false);

    if (zoom > 1 || !swipeStart.current) return;

    const touch = event.changedTouches[0];
    const dx = touch.clientX - swipeStart.current.x;
    const dy = touch.clientY - swipeStart.current.y;

    if (Math.abs(dx) > 56 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      if (dx < 0) goNext();
      else goPrev();
    }

    swipeStart.current = null;
  };

  const handleDoubleClick = () => {
    if (zoom > 1) resetView();
    else setZoom(2);
  };

  const handleBackdropClick = () => {
    if (getPrefersReducedMotion()) {
      onClose();
      return;
    }

    setIsVisible(false);
    window.setTimeout(onClose, 200);
  };

  if (!mounted || !image) return null;

  const dimensions = GALLERY_ASPECT_DIMENSIONS[image.aspect];
  const src = getGalleryImageSrc(image);
  const zoomPercent = Math.round(zoom * 100);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery: ${image.title}`}
      className={`gallery-lightbox fixed inset-0 z-[200] flex flex-col transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/92 backdrop-blur-sm"
        aria-label="Close lightbox"
        onClick={handleBackdropClick}
      />

      <div className="relative z-10 flex shrink-0 items-center justify-between gap-3 px-4 pb-2 pt-4 safe-top md:px-8 md:pt-6">
        <p className="text-[11px] uppercase tracking-widest text-white/70">
          {activeIndex + 1} / {images.length}
        </p>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={zoomOut}
            disabled={zoom <= MIN_ZOOM}
            className="flex h-11 w-11 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/10 disabled:opacity-30"
            aria-label="Zoom out"
          >
            <HiMinus className="h-5 w-5" />
          </button>
          <span className="min-w-[3rem] text-center text-[11px] uppercase tracking-widest text-white/70">
            {zoomPercent}%
          </span>
          <button
            type="button"
            onClick={zoomIn}
            disabled={zoom >= MAX_ZOOM}
            className="flex h-11 w-11 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/10 disabled:opacity-30"
            aria-label="Zoom in"
          >
            <HiPlus className="h-5 w-5" />
          </button>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={handleBackdropClick}
            className="ml-1 flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
            aria-label="Close"
          >
            <HiXMark className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="relative z-10 flex min-h-0 flex-1 items-center justify-center px-2 md:px-4">
        {hasPrev ? (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goPrev();
            }}
            className="absolute left-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-accent md:left-6 md:h-14 md:w-14"
            aria-label="Previous image"
          >
            <HiChevronLeft className="h-7 w-7" />
          </button>
        ) : null}

        <div
          ref={viewportRef}
          className="gallery-lightbox-viewport relative flex max-h-[72vh] w-full max-w-[min(100%,1100px)] items-center justify-center px-12 md:max-h-[78vh] md:px-20"
          onClick={(event) => event.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <figure
            key={image.id}
            className={`gallery-lightbox-image relative m-0 cursor-grab select-none ${
              isDragging ? "cursor-grabbing" : ""
            } ${zoom > 1 ? "cursor-grab" : ""}`}
            style={{
              transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoom})`,
              transition: isDragging ? "none" : "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onDoubleClick={handleDoubleClick}
          >
            <Image
              src={src}
              alt={image.alt}
              width={dimensions.width * 2}
              height={dimensions.height * 2}
              className="max-h-[72vh] w-auto max-w-full object-contain md:max-h-[78vh]"
              quality={IMAGE_QUALITY.lightbox}
              priority
              draggable={false}
            />
          </figure>
        </div>

        {hasNext ? (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goNext();
            }}
            className="absolute right-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-accent md:right-6 md:h-14 md:w-14"
            aria-label="Next image"
          >
            <HiChevronRight className="h-7 w-7" />
          </button>
        ) : null}
      </div>

      <div
        className="relative z-10 shrink-0 border-t border-white/10 px-6 py-5 text-center safe-bottom md:px-8 md:py-6"
        onClick={(event) => event.stopPropagation()}
      >
        <p className="text-[10px] uppercase tracking-widest text-accent">{image.categoryLabel}</p>
        <p className="mt-1 font-heading text-[22px] text-white md:text-[26px]">{image.title}</p>
        {image.caption ? (
          <p className="mx-auto mt-2 max-w-lg text-[14px] leading-relaxed text-white/75">
            {image.caption}
          </p>
        ) : null}
        <p className="mt-3 text-[11px] text-white/45 md:hidden">
          Swipe to navigate · Pinch to zoom · Double-tap to zoom
        </p>
      </div>
    </div>,
    document.body,
  );
}
