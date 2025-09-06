import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./TimingsSection.css";

export default function TimingsSection() {
  const services = [
    {
      title: "1st Sunday Worship Service",
      lang: "Telugu",
      time: "06:00 AM - 08:00 AM",
      gradient: "from-indigo-500 to-indigo-600",
    },
    {
      title: "2nd Sunday Worship Service",
      lang: "Telugu",
      time: "08:30 AM - 10:30 AM",
      gradient: "from-emerald-500 to-green-600",
    },
    {
      title: "3rd Sunday Worship Service",
      lang: "Telugu",
      time: "11:00 AM - 01:00 PM",
      gradient: "from-amber-400 to-orange-500",
    },
    {
      title: "4th Sunday Worship Service",
      lang: "Hindi - Telugu",
      time: "07:00 PM - 09:00 PM",
      gradient: "from-purple-500 to-fuchsia-500",
    },
  ];

  return (
    <section className="timings-section relative text-white py-16">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold">You're Invited!</h2>
        <p className="mb-10 text-xl font-light italic text-white/90 tracking-wide">
          Join us in worship, fellowship, and the joy of God’s presence.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 justify-items-center">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="w-full max-w-sm rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105"
            >
              {/* Card Header */}
              <div
                className={`bg-gradient-to-r ${service.gradient} p-4 text-lg font-semibold`}
              >
                {service.title}
              </div>

              {/* Card Footer */}
              <footer className="pr-4 flex justify-center items-center gap-4 bg-white text-gray-800 py-4">
                <span className="pr-4 border-r border-gray-300 font-medium">
                  {service.lang}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold shadow-md">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="mr-1 transition-transform duration-300 hover:scale-125"
                  />
                  {service.time}
                </span>
              </footer>
            </div>
          ))}
        </div>

        {/* Address & Contact */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-10 border-t border-white/30 pt-6">
          <div className="flex items-start gap-2 max-w-sm">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-red-500 mt-1 transition-transform duration-300 hover:scale-125"
            />
            <span>
              #37-42, Jagathgirigutta, Kukatpally, Hyderabad, Telangana - 500037, India
            </span>
          </div>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-green-500 transition-transform duration-300 hover:scale-125"
              />
              <a
                href="https://wa.me/919908522380"
                target="_blank"
                rel="noopener"
                className="hover:underline"
              >
                Phone: +91 99085 22380
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-blue-300 transition-transform duration-300 hover:scale-125"
              />
              <a
                href="mailto:njchydorg@gmail.com"
                className="hover:underline"
              >
                njchydorg@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}