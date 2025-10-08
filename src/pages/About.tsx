import logo from '../assets/logo.png';

export default function About() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] via-[#fff0f6] to-[#ffe5ef] min-h-screen pt-8 pb-16">
      <section className="max-w-4xl mx-auto px-4 text-center mb-16">
        <img
          src={logo}
          alt="New Jerusalem Church Logo"
          className="mx-auto mb-6 object-contain drop-shadow-lg rounded-full bg-white/80 p-2"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pink-800">About New Jerusalem Church</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Welcome to New Jerusalem Church — a Christ-centered community dedicated to proclaiming the Gospel of God. Our heart is to lead people into a living relationship with Jesus Christ, nurture them in His Word, and equip them to share His love with the world.
        </p>
      </section>


      {/* Mission, Vision & Pastor - Two Column Layout */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Mission & Vision (Left) */}
          <div className="flex flex-col gap-8 justify-center">
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
          </div>
          {/* Pastor Details (Right) */}
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white/90 rounded-xl shadow p-6 flex flex-col items-center w-full">
              <img
                src="/images/y-profile.jpg"
                alt="Pastor Profile"
                className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-pink-200"
              />
              <h3 className="text-lg font-bold text-pink-800">Pastor B.A. Vinay Kumar</h3>
              <p className="text-gray-600 text-sm mb-2">Lead Pastor</p>
              <p className="text-gray-700 text-center text-base">
                Pastor B.A. Vinay Kumar has faithfully served the Lord, sharing the Gospel of Jesus Christ with passion and dedication. His inspiring sermons have touched countless lives, helping many grow deeper in faith and understanding of God’s Word.<br /><br />
                New Jerusalem Church was founded on April 12, 1998, by Mr. B. A. Anandam and Mrs. Deborah, guided by God’s vision. In 2000, their son, Pastor Vinay Kumar, answered the Lord’s call and devoted his life to ministry. Since then, he has led New Jerusalem Church with a heart for nurturing believers and spreading Christ’s message.<br /><br />
                By God’s grace, Pastor Vinay Kumar continues to be a vessel of blessing. Under his leadership, our church family is growing in faith, unity, and love.
              </p>
            </div>
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