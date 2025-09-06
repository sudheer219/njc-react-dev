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
      title: "Welcome to Our Church",
      subtitle:
        "Then you will shine among them like stars in the sky as you hold firmly to the word of life. - Philippians 2:15-16",
      image: "/images/hero-bg.jpg",
      cta: { text: "Watch Live", link: "/about" },
    },
    {
      id: 2,
      title: "Sunday Services",
      subtitle: "Every Sunday at 10 AM & 6 PM",
      image: "/images/hero-bg-2.jpg",
      cta: { text: "Plan Your Visit", link: "/contact" },
    },
    {
      id: 3,
      title: "Bible Study Groups",
      subtitle: "Deepen your understanding of God’s Word",
      image: "/images/hero-bg-3.jpg",
      cta: { text: "Find a Group", link: "/bible-study" },
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
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-center bg-cover flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black/50 text-center p-6 rounded-lg max-w-xl">
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
        ))}
      </Swiper>

      <style>
    {`
      @media (min-width: 1024px) {
       .hero-inline {
          height: calc(100vh - 244px);
        }
      }
    `}
  </style>

    </div>
  );
}
