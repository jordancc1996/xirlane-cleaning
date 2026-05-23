import Image, { type ImageProps } from "next/image";
import { optimizeUnsplashUrl } from "@/lib/images";

type OptimizedImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  priority?: boolean;
  className?: string;
  /** JPEG/WebP quality (default 75). Use 68 for gallery thumbnails. */
  quality?: number;
  loading?: ImageProps["loading"];
  fetchPriority?: ImageProps["fetchPriority"];
};

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  sizes,
  priority = false,
  className = "h-full w-full object-cover",
  quality = 75,
  loading,
  fetchPriority,
}: OptimizedImageProps) {
  const optimizedSrc = src.includes("images.unsplash.com")
    ? optimizeUnsplashUrl(src, width)
    : src;

  return (
    <Image
      src={optimizedSrc}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      loading={loading ?? (priority ? undefined : "lazy")}
      fetchPriority={fetchPriority ?? (priority ? "high" : "low")}
      quality={quality}
      className={className}
    />
  );
}

type FillImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  quality?: number;
  loading?: ImageProps["loading"];
  fetchPriority?: ImageProps["fetchPriority"];
};

/** For absolutely positioned cover images inside a sized parent. */
export function OptimizedFillImage({
  src,
  alt,
  sizes,
  priority = false,
  className = "object-cover",
  quality = 75,
  loading,
  fetchPriority,
}: FillImageProps) {
  const optimizedSrc = src.includes("images.unsplash.com")
    ? optimizeUnsplashUrl(src, 1600)
    : src;

  return (
    <Image
      src={optimizedSrc}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      loading={loading ?? (priority ? undefined : "lazy")}
      fetchPriority={fetchPriority ?? (priority ? "high" : "low")}
      quality={quality}
      className={className}
    />
  );
}
