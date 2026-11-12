import { Hero } from "@/components/home/Hero";
import { Experience } from "@/components/home/Experience";
import { Coaching } from "@/components/home/Coaching";
import { NextUp } from "@/components/home/NextUp";
import { Social } from "@/components/home/Social";
import { WideImage } from "@/components/home/WideImage";
import { images } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Experience />
      <WideImage {...images.homeWide} />
      <Coaching />
      <NextUp />
      <Social />
    </>
  );
}
