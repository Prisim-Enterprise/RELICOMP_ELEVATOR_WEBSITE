import Image, { type StaticImageData } from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  label?: string;
  aspect?: "video" | "square" | "photo" | "wide";
  className?: string;
  /** Pass a photo when available; use `null` until the asset ships. */
  src: StaticImageData | string | null;
  alt: string;
  priority?: boolean;
  sizes?: string;
};

const aspectClass = {
  video: "aspect-video",
  square: "aspect-square",
  photo: "aspect-[4/3]",
  wide: "aspect-[21/9]",
};

export function ImagePlaceholder({
  label = "Image placeholder",
  aspect = "photo",
  className,
  src,
  alt,
  priority,
  sizes = "(max-width: 1024px) 100vw, 40vw",
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-border bg-muted",
          aspectClass[aspect],
          className
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes}
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-border bg-gradient-to-br from-muted via-muted/80 to-background text-center",
        aspectClass[aspect],
        className
      )}
      role="img"
      aria-label={alt}
    >
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)),transparent_50%),radial-gradient(circle_at_70%_80%,hsl(var(--secondary)),transparent_45%)]" />
      <ImageIcon className="relative h-10 w-10 text-muted-foreground/70" />
      <p className="relative mt-3 max-w-[14rem] px-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
