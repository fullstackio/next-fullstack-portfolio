import type { Metadata } from "next";
import VideoBannerLanding from "@/components/video-banner-landing";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Send } from "lucide-react";

export const metadata: Metadata = {
  title: "QuantumAlgo | Fullstack Portfolio of Avijit Ghosh",
  description: "Fullstack portfolio — React, Next.js, Node, MongoDB",
  openGraph: {
    title: "QuantumAlgo | Fullstack Portfolio of Avijit Ghosh",
    description: "Fullstack portfolio — React, Next.js, Node, MongoDB",
  },
};

export default function Home() {
  return (
    <div className="">
      <VideoBannerLanding />

      <section className="relative w-full  py-10 md:py-22 lg:py-30 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          {/* Light mode gradients */}
          <div
            className="absolute right-60 top-40 bottom-0 h-60 w-100 rounded-full
                     bg-gradient-to-tr from-indigo-500/40 via-blue-400/30 to-orange-500/40
                     blur-3xl animate-glow-slow dark:hidden"
          />
          <div
            className="absolute left-50 bottom-[-100px] mx-auto h-80 w-150
                     rounded-full bg-gradient-to-t from-pink-500/25 via-purple-500/15 to-transparent
                     blur-3xl animate-glow-slow dark:hidden"
          />
          {/* Dark mode gradients */}
          <div
            className="absolute right-60 top-40 bottom-0 h-60 w-100 rounded-full
                     bg-gradient-to-tr from-purple-900/40 via-indigo-900/30 to-blue-900/40
                     blur-3xl animate-glow-slow hidden dark:block"
          />
          <div
            className="absolute left-50 bottom-[-100px] mx-auto h-80 w-150
                     rounded-full bg-gradient-to-t from-fuchsia-900/25 via-purple-900/15 to-transparent
                     blur-3xl animate-glow-slow hidden dark:block"
          />
        </div>
        <div className="text-center max-w-4xl m-auto px-4 mb-13">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-5 ">
            Stay{" "}
            <span
              className="bg-gradient-to-r from-pink-500 to-blue-700 bg-clip-text text-transparent"
              style={{ lineHeight: "1.5" }}
            >
              Updated with
            </span>{" "}
            <br></br>My Latest Projects & Dev Insights
          </h2>
          <p className="dark:text-gray-400 text-gray-700 text-[16px] md:text-[20px]">
            Subscribe to get updates on new projects, tutorials, and development
            tips I share periodically.
          </p>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="max-w-[1660px] m-auto px-4">
            <Card className="md:mx-auto max-w-[880px] w-full px-1 py-5  bg-black/7 backdrop-blur-lg border border-white/8">
              <CardContent>
              <p className="dark:text-gray-400 text-gray-700 text-[16px] sm:text-[18px]">
                Join a growing community of developers, clients, and tech
                enthusiasts who follow my work.
              </p>
              <form className="mt-4 flex flex-col sm:flex-row w-full gap-2">
                <input
                type="email"
                placeholder="Enter your email to subscribe…"
                className="dark:border-gray-700 border-gray-400 border w-full rounded-4xl h-12 sm:h-15 px-4 sm:px-6 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
                />

                <button
                type="submit"
                className="
                  px-4 py-3
                  min-w-[140px] sm:min-w-[200px]
                  text-white text-base sm:text-lg font-light
                  rounded-full
                  bg-gradient-to-r from-[#b1e0ff] via-[#9A6CFF] to-[#4A00E0]
                  shadow-lg
                  flex items-center justify-center
                  hover:opacity-90
                  transition-all duration-300 cursor-pointer
                "
                >
                Subscribe Now <Send className="ml-2" />
                </button>
              </form>
              </CardContent>
              <CardFooter>
              <span className="text-sm sm:text-md text-gray-400">
                Your email is safe with me. I don’t share or misuse subscriber
                information.
              </span>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
