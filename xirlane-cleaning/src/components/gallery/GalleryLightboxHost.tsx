"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import { getGalleryDisplayOrder } from "@/lib/gallery-images";

const GalleryLightbox = dynamic(() => import("@/components/gallery/GalleryLightbox"), {
  ssr: false,
});

const GALLERY_ROOT_ID = "gallery-interactive-root";

/**
 * Event-delegated lightbox host — keeps gallery HTML server-rendered for SEO.
 * Loads the lightbox bundle only after the first image click.
 */
export default function GalleryLightboxHost() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const displayOrder = getGalleryDisplayOrder();
  const isOpenRef = useRef(false);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    isOpenRef.current = lightboxIndex !== null;
  }, [lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [lightboxIndex]);

  useEffect(() => {
    const root = document.getElementById(GALLERY_ROOT_ID);
    if (!root) return;

    const onClick = (event: MouseEvent) => {
      if (isOpenRef.current) return;

      const target = event.target as HTMLElement;
      if (target.closest(".gallery-lightbox")) return;

      const trigger = target.closest<HTMLElement>("[data-gallery-index]");
      if (!trigger || !root.contains(trigger)) return;

      const index = Number(trigger.dataset.galleryIndex);
      if (Number.isNaN(index) || index < 0 || index >= displayOrder.length) return;

      event.preventDefault();
      setLightboxIndex(index);
    };

    root.addEventListener("click", onClick);
    return () => root.removeEventListener("click", onClick);
  }, [displayOrder.length]);

  if (lightboxIndex === null || !displayOrder[lightboxIndex]) {
    return null;
  }

  return (
    <GalleryLightbox
      images={displayOrder}
      activeIndex={lightboxIndex}
      onClose={closeLightbox}
      onIndexChange={setLightboxIndex}
    />
  );
}
