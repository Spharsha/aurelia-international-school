"use client";

import { useEffect, useRef, useState } from "react";

type SoftImageProps = {
  src: string;
  alt: string;
  emoji?: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
};

export default function SoftImage({
  src,
  alt,
  emoji = "🎒",
  width,
  height,
  priority = false,
  className = "",
  imgClassName = "",
}: SoftImageProps) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-sky to-sun-soft ${className}`}
    >
      {failed ? (
        <div
          aria-hidden="true"
          className="flex h-full w-full items-center justify-center text-7xl"
        >
          {emoji}
        </div>
      ) : (
        <img
          ref={ref}
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 motion-reduce:transition-none ${imgClassName}`}
        />
      )}
    </div>
  );
}
