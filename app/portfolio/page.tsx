import type { Metadata } from "next";
import VideoBannerClient from "@/components/video-banner-client";
import HomeSliderBanner from "@/components/banners/home-banner/home-sliders-banner";
import AnimatedCards from "@/components/paralax-box/animated-cards";

export const metadata: Metadata = {
  title: "Code With Avi | Welcome",
  description: "Fullstack portfolio — React, Next.js, Node, MongoDB",
  openGraph: {
    title: "Code With Avi | Welcome",
    description: "Fullstack portfolio — React, Next.js, Node, MongoDB",
  },
};

export default function Home() {
  return (
    <div className="">
      <VideoBannerClient />
      <AnimatedCards />
      <section className="my-20">
        <p>
          Hi, I’m Avijit Ghosh — Full-Stack Developer and the creator of
          QuantumAlgo.
        </p>

        <p>
          This website is my personal portfolio, built and maintained entirely
          by me. Here I showcase my work, skills, and the technologies I
          specialize in, including React.js, Next.js, Vue.js, Angular,
          TypeScript, Node.js, and MongoDB.
        </p>

        <p>
          Everything you see here — from the design to the code and the projects
          — reflects my experience, my craftsmanship, and my approach to
          building scalable, performance-driven applications.
        </p>

        <p>
          If you&#39;re exploring my portfolio, know that this platform
          represents my journey, my work, and my ownership. Feel free to look
          around, check my projects, and get in touch anytime.
        </p>
      </section>
      <div className="h-[1000px]">
        <HomeSliderBanner />
      </div>
    </div>
  );
}
