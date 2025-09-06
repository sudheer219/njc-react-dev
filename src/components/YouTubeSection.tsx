import { useEffect, useState } from "react";
import useCountUp from "../hooks/useCountUp";

type Stats = {
  subscribers: number | null;
  videos: number | null;
  views: number | null;
};

export default function YouTubeSection() {
  const [stats, setStats] = useState<Stats>({
    subscribers: null,
    videos: null,
    views: null,
  });
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const subscribers = useCountUp(stats.subscribers);
  const videos = useCountUp(stats.videos);
  const views = useCountUp(stats.views);

  // Helper: format numbers like 1.2M, 850K
  const formatNumber = (num: number | null) => {
    if (num === null) return "--";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num.toString();
  };

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_YT_API_KEY;
    const CHANNEL_ID = "UCROfuPk8xvubJDNuPQfnkLg";

    if (!API_KEY) {
      setError("YouTube API key is missing. Check your .env file.");
      return;
    }

    // 1️⃣ Load from localStorage first
    const cached = localStorage.getItem("ytStats");
    if (cached) {
      try {
        const parsed: Stats = JSON.parse(cached);
        setStats(parsed);
        setLoaded(true);
      } catch {
        console.warn("Invalid cached stats, ignoring.");
      }
    }

    // 2️⃣ Fetch fresh data
    fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.items?.length) {
          const s = data.items[0].statistics;
          const freshStats: Stats = {
            subscribers: Number(s.subscriberCount),
            videos: Number(s.videoCount),
            views: Number(s.viewCount),
          };
          setStats(freshStats);
          setLoaded(true);
          localStorage.setItem("ytStats", JSON.stringify(freshStats));
        } else {
          setError("No data returned from YouTube API.");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch YouTube stats.");
      });
  }, []);

  return (
    <section
      className="
    youtube-section 
    bg-[#ea004d] py-6 
    bg-none md:bg-[url('/images/ytube-bg.jpg')] 
    bg-no-repeat bg-right bg-contain 
    transition-[background-image] duration-700 ease-in-out
  "
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-0">
        {/* Left: Profile */}
        <div
          className={`flex items-center text-white transition-all duration-700 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <img
            src="/images/y-profile.jpg"
            width="82"
            alt="YouTube Profile"
            className="rounded-full border-4 border-white shadow-lg"
          />
          <div className="ms-4 text-center md:text-left">
            <h6 className="font-semibold">Pastor Vinay Kumar</h6>
            <a
              href="https://www.youtube.com/@pastorvinaykumarnjc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm underline break-all"
            >
              youtube.com/@pastorvinaykumarnjc
            </a>
          </div>
        </div>

        {/* Right: Stats */}
        <div
          className={`flex md:mr-40 flex-wrap justify-center md:justify-around gap-6 transition-all duration-700 ease-out delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {error ? (
            <p className="text-white">{error}</p>
          ) : (
            <>
              <Stat
                label="Subscribers"
                value={formatNumber(subscribers)}
                loaded={loaded}
                delay={200}
              />
              <Stat
                label="Videos"
                value={formatNumber(videos)}
                loaded={loaded}
                delay={400}
              />
              <Stat
                label="Views"
                value={formatNumber(views)}
                loaded={loaded}
                delay={600}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  loaded,
  delay = 0,
}: {
  label: string;
  value: string;
  loaded: boolean;
  delay?: number; // optional stagger delay in ms
}) {
  return (
    <p className="text-white text-center flex flex-col p-5 w-40">
      {/* Bigger, bolder number */}
      <span className="font-extrabold text-3xl md:text-5xl leading-tight">
        {value}
      </span>

      {/* Label fades in after number */}
      <span
        className={`text-sm md:text-base text-white/70 font-medium tracking-wide transition-opacity duration-700`}
        style={{
          opacity: loaded ? 1 : 0,
          transitionDelay: `${delay}ms`,
        }}
      >
        {label}
      </span>
    </p>
  );
}
