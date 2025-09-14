import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "This is the best place to worship! The sermons are inspiring and the atmosphere is always welcoming.",
      author: "John Doe",
    },
    {
      text: "I love the community here. Everyone is so supportive and it truly feels like a family every Sunday.",
      author: "Jane Smith",
    },
    {
      text: "A wonderful experience every time. The worship services and teachings have helped me grow spiritually.",
      author: "Bob Johnson",
    },
    {
      text: "The sense of community here is amazing. I always feel welcomed and encouraged.",
      author: "Priya Sharma",
    },
    {
      text: "Pastor Vinay's messages are always uplifting and relevant to my life.",
      author: "Samuel Lee",
    },
  ];

  return (
    <section className="testimonials py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Testimonials by Believers
        </h2>

        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          effect="fade"
          className="max-w-2xl mx-auto"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 relative overflow-hidden animate-fadeIn">
                {/* Animated Quote Marks */}
                <span className="absolute top-4 left-4 text-5xl text-blue-200 opacity-20 animate-bounce-slow">
                  “
                </span>
                <p className="mb-4 text-lg italic text-gray-700 relative z-10">
                  {t.text}
                </p>
                <p className="text-gray-500 font-medium relative z-10">
                  - {t.author}
                </p>
                <span className="absolute bottom-4 right-4 text-5xl text-blue-200 opacity-20 animate-bounce-slow">
                  ”
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Call to Action */}
        <div className="mt-10 flex justify-center">
          <a
  href="#timings-section"
  className="group inline-flex items-center gap-3 px-8 py-3 rounded-full 
             bg-gradient-to-r from-blue-600 to-indigo-600 
             text-white font-semibold shadow-lg 
             hover:from-indigo-600 hover:to-blue-600 
             transition-all duration-300 ease-out"
>
  <span className="text-xl transition-transform group-hover:scale-110">🌟</span>
  <span className="text-lg">Join Us This Sunday!</span>
  <i className="fas fa-arrow-right ml-1 transition-transform group-hover:translate-x-1"></i>
</a>
        </div>
      </div>

      {/* Tailwind Custom Animations */}
  <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in-out;
        }
        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        .animate-bounce-slow {
          animation: bounceSlow 3s infinite;
        }
      `}</style>
    </section>
  );
}