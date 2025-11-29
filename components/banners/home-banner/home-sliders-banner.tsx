"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// TypeScript may not have type declarations for these side-effect CSS imports.
// Silence the compiler error for now; consider adding a global.d.ts with:
//   declare module 'swiper/css';
//   declare module 'swiper/css/navigation';
// to properly type these imports.
// @ts-expect-error: no type declarations for side-effect import of 'swiper/css'
import "swiper/css";
// @ts-expect-error: no type declarations for side-effect import of 'swiper/css/navigation'
import "swiper/css/navigation"; // Optional for custom styling

const movies = [
  { id: 1, title: "The Lion King" },
  { id: 2, title: "Aladdin" },
  { id: 3, title: "Maleficent" },
  { id: 4, title: "Teen Beach 2" },
  {
    id: 5,
    title: "Alice Through the Looking Glass",
    image: "movie5.jpg",
  },
  { id: 6, title: "Teen Beach Movie" },
  { id: 7, title: "The Little Mermaid" },
  { id: 8, title: "The Little Mermaid" },
  { id: 9, title: "The Little Mermaid" },
  { id: 10, title: "The Little Mermaid" },
  { id: 11, title: "The Little Mermaid" },
  { id: 13, title: "The Little Mermaid" },
];

export default function HomeSliderBanner() {
  return (
    <section className="container my-8 m-auto px-4">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={6.3}
        style={{ padding: "0 40px" }}
        slidesPerGroup={3}
        breakpoints={{
          320: { slidesPerView: 3.2, spaceBetween: 5, slidesPerGroup: 3 },
          640: { slidesPerView: 4.2, spaceBetween: 8, slidesPerGroup: 3 },
          1024: { slidesPerView: 6.3, spaceBetween: 10, slidesPerGroup: 3 },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="relative w-full aspect-2/3">
                <Image
                  src={
                    movie.image
                      ? `/images/${movie.image}`
                      : "/images/placeholder.jpg"
                  }
                  alt={movie.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
