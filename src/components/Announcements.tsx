import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./AnnouncementsSection.css";
import { useNavigate } from "react-router-dom";
import { CalendarDaysIcon, ClockIcon } from "@heroicons/react/16/solid";




export default function AnnouncementsSection() {

  function formatDate(date) {
  // If it's not a real date (like "Every Wednesday"), just return it
  if (isNaN(new Date(date).getTime())) return date;
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}
  const navigate = useNavigate();

  const announcements = [
  {
    id: 1,
    title: "Bible Study Service",
    img: "/images/events-1.jpg",
    date: "2025-03-15",
    time: "09:00 AM – 05:00 PM"
  },
  {
    id: 2,
    title: "Fasting & Prayer Meeting",
    img: "/images/events-2.jpg",
    date: "2025-12-25",
    time: "06:00 PM – 08:00 PM"
  },
  {
    id: 3,
    title: "Half-Night Service",
    img: "/images/events-3.jpg",
    date: "2025-10-12",
    time: "10:00 AM – 01:00 PM"
  },
  {
    id: 4,
    title: "Bible Study Series",
    img: "/images/events-4.jpg",
    date: "Every Wednesday",
    time: "07:00 PM – 08:30 PM"
  }
];


  return (
    <section className="py-16 bg-gradient-to-r from-pink-50 via-purple-50 via-blue-50 to-green-50 text-gray-900">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Important Announcements
        </h2>
        <p className="text-center mb-8">
          Stay updated with the latest news and events happening in our Church.
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
        >

          
          {announcements.map((item) => (
            

<SwiperSlide key={item.id}>
  <div
    className="cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    onClick={() => navigate(`/announcements/${item.id}`)}
  >
    <img
      src={item.img}
      alt={item.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4 space-y-2">
      <h3 className="text-lg font-semibold">{item.title}</h3>
      <div className="flex items-center text-sm text-gray-600">
        <CalendarDaysIcon className="w-4 h-4 mr-1 text-indigo-500" />
        {formatDate(item.date)}
        <span className="mx-2">·</span>
        <ClockIcon className="w-4 h-4 mr-1 text-indigo-500" />
        {item.time}
      </div>

    </div>
  </div>
</SwiperSlide>

          ))}
        </Swiper>
        
      </div>
    </section>
  );
}