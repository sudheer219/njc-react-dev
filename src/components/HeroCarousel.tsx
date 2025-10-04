// src/components/HeroCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

export default function HeroCarousel() {
  const slides = [
    {
      id: 1,
      title: "Welcome to New Jerusalem Church",
      subtitle:
        "Then you will shine among them like stars in the sky as you hold firmly to the word of life. - Philippians 2:15-16",
      image: "/images/hero-bg-2.jpg",
      cta: { text: "Watch Live", link: "https://www.youtube.com/@pastorvinaykumarnjc" },
    },
    {
      id: 2,
      title: "Psalms, Hymns, and Spiritual Songs",
      subtitle: "Praise Him with Songs and Hymns -  Psalm 150",
      image: "/images/hero-bg-.jpg",
      cta: { text: "Join Our Worship", link: "https://www.youtube.com/@pastorvinaykumarnjc" },
    },
    {
      id: 3,
      title: "Spreading the gospel of Jesus Christ ",
      subtitle: "'Go into all the world and preach the gospel to all creation' - Mark 16:15.",
      image: "/images/hero-bg.jpg",
      cta: { text: "Watch Now", link: "https://www.youtube.com/@pastorvinaykumarnjc" },
    },
  ];

  return (
    <div className="hero-inline relative w-full h-[80vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 15000, disableOnInteraction: true }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-full"
      >
        {slides.map((slide) => {
          // 1st slide: right side, right-aligned text; 2 & 3: left side, center-aligned text
          let justifyClass = "justify-start items-center";
          let alignClass = "text-center";
          let sidePadClass = "ml-8 md:ml-32";
          
          return (
            <SwiperSlide key={slide.id}>
              <div
                className={`w-full h-full bg-cover flex ${justifyClass}`}
                style={{ backgroundImage: `url(${slide.image})`, backgroundPosition: '30% 0' }}
              >
                <div className={`bg-black/50 ${alignClass} ${sidePadClass} p-6 rounded-lg max-w-xl w-full md:w-auto`}>
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
