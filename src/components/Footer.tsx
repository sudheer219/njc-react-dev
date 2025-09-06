import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

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
              <a href="tel:+919876543210" className="hover:text-pink-300 transition flex items-center gap-2">
                📞 +91 98765 43210
              </a>
            </li>
            <li>
              <a href="mailto:info@newjerusalemchurch.org" className="hover:text-pink-300 transition flex items-center gap-2">
                ✉ info@newjerusalemchurch.org
              </a>
            </li>
            <li>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition flex items-center gap-2">
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

        {/* Map Thumbnail */}
        
      </div>

      {/* Social Icons */}
      <div className="mt-10 flex justify-center gap-6">
        {[
          { icon: faFacebook, link: "https://facebook.com", label: "Facebook" },
          { icon: faYoutube, link: "https://youtube.com", label: "YouTube" },
          { icon: faInstagram, link: "https://instagram.com", label: "Instagram" },
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