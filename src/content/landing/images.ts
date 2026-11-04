import type { StaticImageData } from "next/image";
import homeElevator1 from "@/assets/home-elevator-bangalore/homeElevator-1.webp";
import homeElevator2 from "@/assets/home-elevator-bangalore/homeElevator-2.webp";
import homeElevator3 from "@/assets/home-elevator-bangalore/homeElevator-3.webp";
import homeElevator4 from "@/assets/home-elevator-bangalore/homeElevator-4.webp";
import homeElevator5 from "@/assets/home-elevator-bangalore/homeElevator-5.webp";
import homeElevator6 from "@/assets/home-elevator-bangalore/homeElevator-6.webp";
import homeElevator7 from "@/assets/home-elevator-bangalore/homeElevator-7.webp";
import homeElevator8 from "@/assets/home-elevator-bangalore/homeElevator-8.webp";
import homeElevator9 from "@/assets/home-elevator-bangalore/homeElevator-9.webp";
import homeElevator10 from "@/assets/home-elevator-bangalore/homeElevator-10.webp";
import homeElevator12 from "@/assets/home-elevator-bangalore/homeElevator-12.webp";
import homeElevator13 from "@/assets/home-elevator-bangalore/homeElevator-13.webp";
import marbleLobby from "@/assets/hero.webp";
import capsuleElevator from "@/assets/capsuleElevator.webp";
import compactSmallHomeLifts from "@/assets/home-elevator-bangalore/Compact-Small-Home-Lifts.webp";
import hydraulicHomeLifts from "@/assets/home-elevator-bangalore/Hydraulic-Home-Lifts.webp";
import luxuryCabinHomeElevators from "@/assets/home-elevator-bangalore/Luxury-Cabin-Home-Elevators.webp";
import mrlHomeElevators from "@/assets/home-elevator-bangalore/Mrl-Home-Elevators.webp";

export const landingImages = {
  homeElevator1,
  homeElevator2,
  homeElevator3,
  homeElevator4,
  homeElevator5,
  homeElevator6,
  homeElevator7,
  homeElevator8,
  homeElevator9,
  homeElevator10,
  homeElevator12,
  homeElevator13,
  marbleLobby,
  capsuleElevator,
  compactSmallHomeLifts,
  hydraulicHomeLifts,
  luxuryCabinHomeElevators,
  mrlHomeElevators
} as const satisfies Record<string, StaticImageData>;
