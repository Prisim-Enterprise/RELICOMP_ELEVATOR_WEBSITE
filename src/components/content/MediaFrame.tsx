import Image, { type StaticImageData } from "next/image";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { cn } from "@/lib/utils";

type MediaFrameProps = {
  src?: StaticImageData | string | null;
  alt: string;
  /** Shown when src is missing */
  placeholderLabel?: string;
  aspect?: "video" | "square" | "photo" | "wide";
  priority?: boolean;
  className?: string;
  sizes?: string;
  caption?: string;
};

const aspectClass = {
  video: "aspect-video",
  square: "aspect-square",
  photo: "aspect-[4/3]",
  wide: "aspect-[21/9]",
};

export function MediaFrame({
  src,
  alt,
  placeholderLabel = "Project photo",
  aspect = "photo",
  priority,
  className,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  caption,
}: MediaFrameProps) {
  if (!src) {
    return (
      <figure className={cn("group", className)}>
        <ImagePlaceholder
          src={null}
          alt={alt}
          label={placeholderLabel}
          aspect={aspect}
        />
        {caption ? (
          <figcaption className="mt-2 text-center text-xs text-muted-foreground">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure className={cn("group", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-border bg-muted shadow-sm transition-shadow duration-300 group-hover:shadow-lg",
          aspectClass[aspect]
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes={sizes}
          priority={priority}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      {caption ? (
        <figcaption className="mt-2 text-center text-xs text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
