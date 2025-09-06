import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroCarousel from "./components/HeroCarousel";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import YouTubeSection from "./components/YouTubeSection";
import SermonsSection from "./components/Sermons";
import AnnouncementsSection from "./components/Announcements";
import TimingsSection from "./components/Timings";
import TestimonialsSection from "./components/testimonials";
import MissionSection from "./components/Mission";
import PrayerRequestSection from "./components/PrayerRequest";
import LocationSection from "./components/Location";
import FooterContact from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroCarousel />
                  <YouTubeSection />
                  <SermonsSection />
                  <AnnouncementsSection />
                  <TimingsSection />
                  <TestimonialsSection />
                  <MissionSection />
                  <PrayerRequestSection />
                  <LocationSection />
                  <FooterContact />
                </>
              }
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
