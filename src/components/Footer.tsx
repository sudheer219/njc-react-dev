import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function FooterContact() {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-10">
        
        {/* Church Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">New Jerusalem Church</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            #37-42, Jagathgirigutta, Kukatpally,<br />
            Hyderabad, Telangana 500037
          </p>
        </div>

        {/* Contact Details */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="tel:+919908522380" className="hover:text-pink-300 transition flex items-center gap-2">
                📞 +91 99085 22380
              </a>
            </li>
            <li>
              <a href="mailto:info@newjerusalemchurch.org" className="hover:text-pink-300 transition flex items-center gap-2">
                ✉ info@newjerusalemchurch.org
              </a>
            </li>
            <li>
              <a href="https://wa.me/919908522380" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition flex items-center gap-2">
                <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp Us
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-pink-300 transition">Home</a></li>
            <li><a href="/about" className="hover:text-pink-300 transition">About Us</a></li>
            <li><a href="/sermons" className="hover:text-pink-300 transition">Sermons</a></li>
            <li><a href="/contact" className="hover:text-pink-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Service Timings */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Service Timings</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 py-2 border-b border-white/10 last:border-b-0">
              <div className="flex items-center gap-2 mb-1 md:mb-0">
                <span className="inline-flex items-center px-2 py-1 rounded bg-indigo-600 text-white text-xs font-semibold">
                  1st
                </span>
                <span className="font-medium">Sunday Worship (Telugu)</span>
              </div>
              <span className="px-2 py-1 rounded bg-indigo-100 text-indigo-700 text-xs font-semibold flex items-center gap-1 w-fit">
                06:00 AM - 08:00 AM
              </span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 py-2 border-b border-white/10 last:border-b-0">
              <div className="flex items-center gap-2 mb-1 md:mb-0">
                <span className="inline-flex items-center px-2 py-1 rounded bg-green-600 text-white text-xs font-semibold">
                  2nd
                </span>
                <span className="font-medium">Sunday Worship (Telugu)</span>
              </div>
              <span className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-semibold flex items-center gap-1 w-fit">
                08:30 AM - 10:30 AM
              </span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 py-2 border-b border-white/10 last:border-b-0">
              <div className="flex items-center gap-2 mb-1 md:mb-0">
                <span className="inline-flex items-center px-2 py-1 rounded bg-orange-500 text-white text-xs font-semibold">
                  3rd
                </span>
                <span className="font-medium">Sunday Worship (Telugu)</span>
              </div>
              <span className="px-2 py-1 rounded bg-orange-100 text-orange-700 text-xs font-semibold flex items-center gap-1 w-fit">
                11:00 AM - 01:00 PM
              </span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 py-2">
              <div className="flex items-center gap-2 mb-1 md:mb-0">
                <span className="inline-flex items-center px-2 py-1 rounded bg-purple-600 text-white text-xs font-semibold">
                  4th
                </span>
                <span className="font-medium">Sunday Worship (Hindi - Telugu)</span>
              </div>
              <span className="px-2 py-1 rounded bg-purple-100 text-purple-700 text-xs font-semibold flex items-center gap-1 w-fit">
                07:00 PM - 09:00 PM
              </span>
            </li>
          </ul>
        </div>

        {/* Map Thumbnail */}
        
      </div>

      {/* Social Icons */}
      <div className="mt-10 flex justify-center gap-6">
        {[
          { icon: faFacebook, link: "https://www.facebook.com/Vinaykumar12.1979", label: "Facebook" },
          { icon: faYoutube, link: "https://www.youtube.com/@pastorvinaykumarnjc", label: "YouTube" },
          { icon: faInstagram, link: "https://www.instagram.com/pastorvinaykumar", label: "Instagram" },
        ].map((social, idx) => (
          <a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="p-3 rounded-full bg-white/10 hover:bg-pink-500 hover:scale-110 transition transform"
          >
            <FontAwesomeIcon icon={social.icon} size="lg" />
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-8 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} New Jerusalem Church. All rights reserved.
      </div>
    </footer>
  );
}