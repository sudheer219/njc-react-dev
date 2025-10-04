import logo from '../assets/logo.png';

export default function About() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] via-[#fff0f6] to-[#ffe5ef] min-h-screen pt-8 pb-16">
      <section className="max-w-4xl mx-auto px-4 text-center mb-16">
        <img
          src={logo}
          alt="New Jerusalem Church Logo"
          className="mx-auto mb-6 w-24 h-24 object-contain drop-shadow-lg rounded-full bg-white/80 p-2"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pink-800">About New Jerusalem Church</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Welcome to New Jerusalem Church, a vibrant community of faith, hope, and love in Hyderabad. Our mission is to share the Gospel, nurture spiritual growth, and serve our neighbors with compassion and joy.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 mb-16">
        <div className="bg-white/80 rounded-2xl shadow-lg p-8 border-t-4 border-pink-400">
          <h2 className="text-2xl font-bold text-pink-700 mb-3">Our Mission</h2>
          <p className="text-gray-700 text-base md:text-lg">
            To proclaim the love and salvation of Jesus Christ, equip believers for ministry, and impact our city and world through acts of service, prayer, and outreach.
          </p>
        </div>
        <div className="bg-white/80 rounded-2xl shadow-lg p-8 border-t-4 border-blue-400">
          <h2 className="text-2xl font-bold text-blue-700 mb-3">Our Vision</h2>
          <p className="text-gray-700 text-base md:text-lg">
            To be a Christ-centered church where every person is welcomed, discipled, and empowered to fulfill God’s purpose for their life.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-center text-pink-700 mb-8">Our Leadership</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="bg-white/90 rounded-xl shadow p-6 flex flex-col items-center w-full md:w-1/2">
            <img
              src="/images/y-profile.jpg"
              alt="Pastor Profile"
              className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-pink-200"
            />
            <h3 className="text-lg font-bold text-pink-800">Pastor John Doe</h3>
            <p className="text-gray-600 text-sm mb-2">Lead Pastor</p>
            <p className="text-gray-700 text-center text-base">
              With a heart for people and a passion for the Gospel, Pastor John leads our church in faith, vision, and service.
            </p>
          </div>
          <div className="bg-white/90 rounded-xl shadow p-6 flex flex-col items-center w-full md:w-1/2">
            <img
              src="/images/women-ministry.jpg"
              alt="Assistant Pastor"
              className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-blue-200"
            />
            <h3 className="text-lg font-bold text-blue-800">Pastor Jane Smith</h3>
            <p className="text-gray-600 text-sm mb-2">Assistant Pastor</p>
            <p className="text-gray-700 text-center text-base">
              Pastor Jane is dedicated to discipleship, women’s ministry, and building strong families in Christ.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-2xl mx-auto px-4 text-center mt-12">
        <div className="bg-pink-100 rounded-2xl py-8 px-6 shadow-lg">
          <h2 className="text-2xl font-bold text-pink-700 mb-3">Join Us!</h2>
          <p className="text-gray-700 mb-4">
            We invite you to worship, grow, and serve with us. Whether you’re new to faith or seeking a church home, you are welcome here.
          </p>
          <a
            href="/contact"
            className="inline-block bg-pink-600 hover:bg-pink-800 text-white font-semibold px-6 py-3 rounded-full shadow transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}