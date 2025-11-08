import type { Metadata } from "next";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Code With Avi | Welcome to my portfolio",
  description: "Showcasing my projects and skills",
};

export default function Home() {
  return (
    <div className="">
      <section className="video-banner">
        <div className="relative w-full h-screen overflow-hidden">
          {/* Video - place a file at public/videos/banner.mp4 or update the src */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/dark-wheel.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="/videos/banner-poster.jpg"
          />

          {/* Dim overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

          {/* Banner content */}
          <div className="relative z-10 flex h-full  items-center justify-center px-6  text-white">
            <h1 className="text-[225px] font-semibold mr-10">HI!</h1>
            <div>
              <h2 className="text-6xl font-semibold mb-5">I AM AVIJIT GHOSH</h2>
              <p className="mt-4 max-w-2xl text-2xl ">
                I build fullstack applications with Next.js, TypeScript and Node
                — take a look at my projects and get in touch.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}
