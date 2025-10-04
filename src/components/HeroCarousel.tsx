// src/components/HeroCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

export default function HeroCarousel() {
  // Replace images with YouTube video IDs for each slide
  const slides = [
    {
      id: 1,
      title: "Welcome to New Jerusalem Church",
      subtitle:
        "Then you will shine among them like stars in the sky as you hold firmly to the word of life. - Philippians 2:15-16",
      videoId: "Ugkxst4jACXliKjvroeUN2ZTg34hNgqoDspv",
      cta: { text: "Watch Live", link: "https://www.youtube.com/@pastorvinaykumarnjc" },
    },
  ];

  return (
    <div className="hero-inline relative w-full h-[80vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 15000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-full"
      >
        {slides.map((slide) => {
          // Use left alignment for slides 2 and 3, center for others
          const isLeft = slide.id === 2 || slide.id === 3;
          const textAlignClass = isLeft ? "text-left" : "text-center";
          // For slides 2 and 3: justify-start (left), items-center (vertical middle)
          const justifyClass = isLeft ? "justify-start items-center" : "justify-center items-center";
          // Add left padding for slides 2 and 3
          const leftPadClass = isLeft ? "ml-8 md:ml-32" : "ml-2";
          return (
            <SwiperSlide key={slide.id}>
              <div
                className={`w-full h-full flex ${justifyClass} relative bg-black`}
              >
                {/* YouTube video background */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full object-cover z-0"
                  src={`https://www.youtube.com/embed/${slide.videoId}?autoplay=1&mute=1&loop=1&playlist=${slide.videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ pointerEvents: 'none' }}
                ></iframe>
                <div className={`relative z-10 bg-black/50 ${textAlignClass} ${leftPadClass} p-6 rounded-lg max-w-xl w-full md:w-auto`}>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-200 mb-6">
                    {slide.subtitle}
                  </p>
                  <Link
                    to={slide.cta.link}
                    className="group inline-flex items-center gap-2 rounded-full bg-rose-600 px-5 py-3 text-white shadow-md transition-colors duration-200 hover:bg-fuchsia-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500"
                  >
                    <span className="text-sm md:text-base font-semibold">
                      {slide.cta.text}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <style>
        {`
          @media (min-width: 1024px) {
            .hero-inline {
              height: calc(100vh - 190px)
            }
          }
        `}
      </style>

    </div>
  );
}
