import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Data
const missions = [
  { title: "Sunday School", img: "images/mission-img-1.png", color: "blue" },
  { title: "Youth Ministry", img: "images/mission-img-2.png", color: "pink" },
  { title: "Women's Ministry", img: "images/mission-img-3.png", color: "yellow" },
  { title: "Cottage Ministry", img: "images/mission-img-4.png", color: "green" },
  { title: "Outreach Ministry", img: "images/mission-img-5.png", color: "purple" },
  { title: "Crusade Ministry", img: "images/mission-img-6.png", color: "red" },
];

// Tailwind-safe color classes
const colorMap: { [key: string]: { gradient: string; header: string; hover: string } } = {
  blue: {
    gradient: "from-blue-900 to-blue-700",
    header: "bg-blue-900",
    hover: "hover:bg-blue-800",
  },
  pink: {
    gradient: "from-pink-900 to-pink-700",
    header: "bg-pink-900",
    hover: "hover:bg-pink-800",
  },
  yellow: {
    gradient: "from-yellow-900 to-yellow-700",
    header: "bg-yellow-900",
    hover: "hover:bg-yellow-800",
  },
  green: {
    gradient: "from-green-900 to-green-700",
    header: "bg-green-900",
    hover: "hover:bg-green-800",
  },
  purple: {
    gradient: "from-purple-900 to-purple-700",
    header: "bg-purple-900",
    hover: "hover:bg-purple-800",
  },
  red: {
    gradient: "from-red-900 to-red-700",
    header: "bg-red-900",
    hover: "hover:bg-red-800",
  },
};

export default function MissionSection() {
  return (
    <section className="relative py-12 bg-gradient-to-b from-[#e0dffc] via-[#ffe5ef]  to-[#ffcde0] ">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Mission of Gospel throughout the Year
        </h2>
        <p className="text-center mb-10 text-gray-700 md:text-gray-600 max-w-2xl mx-auto">
          At our church, we are dedicated to serving our community, growing in faith, and sharing the Word of God. Join us in making a difference!
        </p>

        {/* Slider with fixed-width slides */}
        <Swiper spaceBetween={16} slidesPerView="auto" className="pb-6">
          {missions.map((m, idx) => {
            const colors = colorMap[m.color] || colorMap.blue;
            return (
              <SwiperSlide key={idx} style={{ width: "173px" }}>
                <div className={`rounded-lg overflow-hidden shadow-lg bg-gradient-to-br ${colors.gradient}`}>
                  {/* Header */}
                  <div className={`py-3 ${colors.header} text-white text-center`}>
                    <h3 className="text-xs font-semibold">{m.title}</h3>
                  </div>

                  {/* Image + dark fade + CTA */}
                  <div className="relative">
                    <img
                      src={m.img}
                      alt={m.title}
                      width={173}
                      height={163}
                      className="w-full h-48 object-cover"
                    />

                    {/* Dark gradient that ends at the bottom of the card */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-gray-950 via-gray-800 to-transparent" />

                    {/* CTA over the dark fade */}
                    <a
                      href="#contact"
                      className={`absolute bottom-2 left-1/2 -translate-x-1/2 inline-flex items-center gap-2
                                 px-4 py-1.5 rounded text-xs font-semibold text-dark
                                 border border-white/30 bg-white backdrop-blur
                                 hover:text-white ${colors.hover} transition-colors`}
                    >
                      Join
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Scripture callout on the dark background */}
        <div className="mt-12 flex justify-center ">
          <div className="text-dark rounded-2xl px-12 py-8 text-center border-t-4 border-pink-500/20">
            <p className="text-sm md:text-md font-semibold leading-relaxed italic ">
              “And he gave the apostles, the prophets, the evangelists, the shepherds and teachers, to equip the saints for the work of ministry,
              for building up the body of Christ, until we all attain to the unity of the faith and of the knowledge of the Son of God”
            </p>
            <footer className="text-pink-700 font-bold text-base ">
              Ephesians 4:11–13
            </footer>

            <a
  href="#contact"
  className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full
             text-sm font-semibold text-white
             border border-white/30 bg-pink-600 backdrop-blur
             shadow-lg transition-all duration-300
             hover:bg-pink-800 hover:border-pink-500 hover:shadow-pink-500/30"
>
  Join Our Mission
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
</a>

          </div>
        </div>
      </div>

      {/* Soft dark band at the very bottom to ensure a clean finish */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-pink-300" />
    </section>
  );
}