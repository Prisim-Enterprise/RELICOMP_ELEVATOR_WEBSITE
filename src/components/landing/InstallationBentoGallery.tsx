"use client";

import { useCallback, useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { Expand, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { landingImages } from "@/content/landing/images";
import { trackEvent } from "@/lib/analytics";

type InstallationItem = {
  image: StaticImageData;
  alt: string;
  location: string;
};

/** All source photos are portrait (~4:5). Keep grid tiles matching that ratio. */
const INSTALLATIONS: InstallationItem[] = [
  {
    image: landingImages.homeElevator1,
    alt: "Relicomp glass villa home elevator beside a wooden staircase",
    location: "Indiranagar",
  },
  {
    image: landingImages.homeElevator8,
    alt: "Relicomp elevator cabin with premium gold interior finish",
    location: "Whitefield",
  },
  {
    image: landingImages.homeElevator3,
    alt: "Compact glass home lift retrofitted in a Bangalore home",
    location: "Jayanagar",
  },
  {
    image: landingImages.homeElevator12,
    alt: "Panoramic glass elevator with ornate cabin lighting",
    location: "HSR Layout",
  },
  {
    image: landingImages.homeElevator6,
    alt: "Panoramic glass capsule elevator with skyline views",
    location: "Hebbal",
  },
  {
    image: landingImages.homeElevator2,
    alt: "Relicomp home elevator installed next to a living room",
    location: "JP Nagar",
  },
  {
    image: landingImages.homeElevator10,
    alt: "Compact home lift beside a marble staircase",
    location: "Yelahanka",
  },
  {
    image: landingImages.homeElevator13,
    alt: "Completed Relicomp home elevator handover in Bengaluru",
    location: "Sarjapur Road",
  },
  {
    image: landingImages.homeElevator5,
    alt: "Homeowner inside a wood-finish luxury Relicomp elevator cabin",
    location: "Banashankari",
  },
  {
    image: landingImages.homeElevator7,
    alt: "Glass home lift shaft integrated into modern villa architecture",
    location: "RR Nagar",
  },
  {
    image: landingImages.homeElevator4,
    alt: "Elderly couple stepping out of their new Relicomp home elevator",
    location: "Electronic City",
  },
  {
    image: landingImages.homeElevator9,
    alt: "Residential elevator installation in a Bangalore duplex home",
    location: "Kanakapura Road",
  },
];

type InstallationBentoGalleryProps = {
  page?: string;
};

export function InstallationBentoGallery({
  page = "home-elevators-bangalore",
}: InstallationBentoGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  const openLightbox = useCallback(
    (index: number) => {
      setActiveIndex(index);
      setLightboxOpen(true);
      trackEvent("gallery_open", { index, page });
    },
    [page]
  );

  useEffect(() => {
    if (!carouselApi || !lightboxOpen) return;
    carouselApi.scrollTo(activeIndex, false);
  }, [carouselApi, lightboxOpen, activeIndex]);

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setActiveIndex(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  return (
    <>
      <ul className="lp-install-gallery" aria-label="Installation photo gallery">
        {INSTALLATIONS.map((item, index) => (
          <li key={item.alt} className="lp-install-item">
            <button
              type="button"
              onClick={() => openLightbox(index)}
              className="lp-install-tile"
              aria-label={`View installation in ${item.location}, photo ${index + 1} of ${INSTALLATIONS.length}`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                loading={index < 6 ? "eager" : "lazy"}
                className="lp-install-img"
              />

              <span className="lp-install-shade" aria-hidden />

              <span className="lp-install-expand" aria-hidden>
                <span className="lp-install-expand-btn">
                  <Expand className="h-5 w-5" strokeWidth={1.5} />
                </span>
              </span>

              <span className="lp-install-meta">
                <span className="lp-install-location">
                  <MapPin
                    className="h-3.5 w-3.5 shrink-0"
                    strokeWidth={2}
                    aria-hidden
                  />
                  {item.location}
                </span>
                <span className="lp-install-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent
          className={cn(
            "flex max-h-[100dvh] w-[min(100vw,920px)] max-w-none flex-col gap-0 overflow-hidden",
            "border-0 bg-[#0a0a0c] p-0 shadow-2xl sm:max-h-[96vh] sm:w-[min(94vw,920px)]",
            "left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]",
            "[&>button:last-child]:right-3 [&>button:last-child]:top-3 [&>button:last-child]:z-20",
            "[&>button:last-child]:rounded-full [&>button:last-child]:border",
            "[&>button:last-child]:border-white/15 [&>button:last-child]:bg-white/10",
            "[&>button:last-child]:text-white [&>button:last-child]:opacity-100",
            "[&>button:last-child]:hover:bg-white/20"
          )}
        >
          <DialogTitle className="sr-only">
            Installation gallery: {INSTALLATIONS[activeIndex]?.location}
          </DialogTitle>

          <div className="relative flex min-h-0 flex-1 flex-col px-2 pb-4 pt-12 sm:px-5 sm:pb-6 sm:pt-14">
            <Carousel
              setApi={setCarouselApi}
              opts={{ loop: true, align: "center" }}
              className="w-full min-w-0"
            >
              <CarouselContent className="-ml-0">
                {INSTALLATIONS.map((item) => (
                  <CarouselItem key={item.alt} className="pl-0 basis-full">
                    <figure className="lp-install-lightbox-figure">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={item.image.width}
                        height={item.image.height}
                        sizes="(max-width: 640px) 100vw, 90vw"
                        priority
                        className="lp-install-lightbox-img"
                      />
                    </figure>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious
                variant="outline"
                className="left-1 z-10 h-9 w-9 border-white/20 bg-black/55 text-white hover:bg-black/75 hover:text-white sm:left-2 sm:h-10 sm:w-10"
              />
              <CarouselNext
                variant="outline"
                className="right-1 z-10 h-9 w-9 border-white/20 bg-black/55 text-white hover:bg-black/75 hover:text-white sm:right-2 sm:h-10 sm:w-10"
              />
            </Carousel>

            <figcaption className="mt-3 flex flex-col items-center gap-1 px-2 text-center sm:mt-4 sm:flex-row sm:justify-between sm:px-4 sm:text-left">
              <span className="text-sm font-medium text-white/90">
                {INSTALLATIONS[activeIndex]?.location}
                <span className="mx-2 hidden text-white/30 sm:inline">·</span>
                <span className="mt-0.5 block max-w-[36ch] text-xs font-normal text-white/55 sm:mt-0 sm:inline sm:max-w-none">
                  {INSTALLATIONS[activeIndex]?.alt}
                </span>
              </span>
              <span className="shrink-0 tabular-nums text-xs font-semibold tracking-widest text-white/45">
                {activeIndex + 1} / {INSTALLATIONS.length}
              </span>
            </figcaption>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
