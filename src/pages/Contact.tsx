import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] via-[#fff0f6] to-[#ffe5ef] min-h-screen pt-8 pb-16">
      <section className="max-w-4xl mx-auto px-4">
        <div className="rounded-2xl shadow-lg bg-white/80 p-8 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-8 text-center">We'd love to hear from you! Reach out to us using any of the methods below.</p>

          <div className="flex flex-col gap-8">
            {/* Map & Address Card */}
            <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3 w-full h-64 rounded-lg overflow-hidden">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15220.515143630548!2d78.40822488069534!3d17.50136465227803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91cc8bc31263%3A0xa0ff9799f7f44021!2sNew%20Jerusalem%20church!5e0!3m2!1sen!2sin!4v1757162569225!5m2!1sen!2sin" width="100%" height="400" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="md:w-1/3 w-full flex flex-col justify-center items-center">
              <h3 className="text-xl font-bold mb-4">New Jerusalem Church</h3>
                <h2 className="text-xl font-semibold text-blue-700 mb-2">Address</h2>
                <p className="text-gray-700 text-center">#37-42, Jagathgirigutta, Kukatpally,<br />Hyderabad, Telangana 500037</p>
              </div>
            </div>

            {/* Contact Details & Social Media - Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-10 items-stretch">
              {/* Contact Details Card */}
              <div className="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col gap-6 justify-center items-center">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">Contact Details</h2>
                <div className="flex flex-col gap-4 w-full max-w-xs">
                  <a href="tel:+919908522380" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-50 hover:bg-pink-100 text-blue-700 font-semibold shadow transition group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700 group-hover:text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a2 2 0 011.7 1.06l1.52 2.72a2 2 0 01-.45 2.45l-1.35 1.08a11.05 11.05 0 005.02 5.02l1.08-1.35a2 2 0 012.45-.45l2.72 1.52A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z" /></svg>
                    <span>+91 99085 22380</span>
                  </a>
                  <a href="https://wa.me/919908522380" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-green-50 hover:bg-pink-100 text-green-700 font-semibold shadow transition group">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-green-700 group-hover:text-pink-700" />
                    <span>WhatsApp Message</span>
                  </a>
                  <a href="mailto:info@newjerusalemchurch.org" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-pink-50 hover:bg-blue-50 text-pink-700 font-semibold shadow transition group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-700 group-hover:text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 10-8 0m8 0v4a4 4 0 01-8 0v-4m8 0V8a4 4 0 00-8 0v4" /></svg>
                    <span>info@newjerusalemchurch.org</span>
                  </a>
                </div>
              </div>

              {/* Social Media Card */}
              <div className="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Connect with us on Social Media</h2>
                <div className="flex justify-center gap-6">
                  <a href="https://www.facebook.com/Vinaykumar12.1979" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-3 rounded-full bg-white hover:bg-blue-600 hover:scale-110 transition transform group">
                    <FontAwesomeIcon icon={faFacebook} size="lg" className="transition-colors group-hover:text-white" style={{ color: '#1877F3' }} />
                  </a>
                  <a href="https://www.youtube.com/@pastorvinaykumarnjc" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="p-3 rounded-full bg-white hover:bg-red-600 hover:scale-110 transition transform group">
                    <FontAwesomeIcon icon={faYoutube} size="lg" className="transition-colors group-hover:text-white" style={{ color: '#FF0000' }} />
                  </a>
                  <a href="https://www.instagram.com/pastorvinaykumar" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-3 rounded-full bg-white hover:bg-pink-500 hover:scale-110 transition transform group">
                    <FontAwesomeIcon icon={faInstagram} size="lg" className="transition-colors group-hover:text-white" style={{ color: '#E4405F' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}