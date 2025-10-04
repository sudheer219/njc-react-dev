
const PrayerRequest = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/prayer-bg.jpg')", // Replace with your image path
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        
        {/* Left: Scripture / Invitation */}
        <div className="flex flex-col mt-3">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Need a Prayer?
          </h2>
          <p className="text-lg italic text-white/90 mb-4">
          At New Jerusalem Church, we believe in the power of prayer. 
Share your joys, concerns, and thanksgivings below. 
Our prayer team and leadership regularly pray for our community.
          </p>
          <p className="text-lg italic font-semibold text-white/90 mb-4">
            “Cast all your anxiety on Him because He cares for you.”
          </p>
          <p className="text-sm font-semibold text-amber-200">
            — 1 Peter 5:7
          </p>
        </div>

        {/* Right: Prayer Request Form */}
        <div className="bg-black/50 backdrop-blur rounded-2xl p-8 border border-white/20 shadow-lg">
          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/30 text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/30 text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Your email (optional)"
              />
            </div>

            {/* Prayer Request */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Prayer Request
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/30 text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Write your prayer request here..."
              ></textarea>
            </div>

            {/* Optional: Anonymous */}
              <div className="flex items-center gap-2">
                <input type="checkbox" id="anonymous" className="accent-pink-500" />
                <label htmlFor="anonymous" className="text-sm text-gray-200">
                  I prefer to remain anonymous
                </label>
              </div>

              {/* Optional: Prayer Wall */}
              <div className="flex items-center gap-2">
                <input type="checkbox" id="prayerWall" className="accent-pink-500" />
                <label htmlFor="prayerWall" className="text-sm text-gray-200">
                  Share my request on the Prayer Wall
                </label>
              </div>


            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-rose-400 text-white font-semibold shadow-lg hover:from-pink-600 hover:to-rose-500 transition-all"
            >
              Submit a Prayer Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PrayerRequest;