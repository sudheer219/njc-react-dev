
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../App.css";

type Sermon = {
	id: string;
	title: string;
	thumbnail: string;
	publishedAt: string;
};

const PLAYLISTS: Record<string, string> = {
	"Book of Genesis": "PLu33UiIvJsaGQ6gqam8RwBTTRXvdn1sAZ",
	Exodus: "PLu33UiIvJsaHxwmVQdMUYzIJLLo_4CCcw",
	Devotional: "PLu33UiIvJsaGFnoRGQ7fJHuErrFzf1u8Z",
	Revelation: "PLu33UiIvJsaHk0zark8vrq6gQmHLYgMgZ",
	Job: "PLu33UiIvJsaHvZNwLJn9OTHtJn1e7w66s",
	Esther: "PLu33UiIvJsaFRB3KSx5N1CdKg005MEV_7",
	John: "PLu33UiIvJsaEf9F2Qf9jhx83aonRPbWAH",
	Nehemiah: "PLu33UiIvJsaEOy4TMTlz0XVr7uOApTrFi",
};

export default function Sermons() {
	const [sermons, setSermons] = useState<Sermon[]>([]);
	const [loading, setLoading] = useState(false);
	const [activePlaylist, setActivePlaylist] = useState<string>("Book of Genesis");

	const API_KEY = import.meta.env.VITE_YT_API_KEY;

	const fetchPlaylistVideos = (playlistId: string) => {
		setLoading(true);
		fetch(
			`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=12&playlistId=${playlistId}&key=${API_KEY}`
		)
			.then((res) => res.json())
			.then((data) => {
				const videos = data.items.map((item: any) => ({
					id: item.snippet.resourceId.videoId,
					title: item.snippet.title,
					thumbnail: item.snippet.thumbnails.medium.url,
					publishedAt: item.snippet.publishedAt,
				}));
				setSermons(videos);
				setLoading(false);
			})
			.catch((err) => {
				console.error("Failed to fetch playlist videos", err);
				setLoading(false);
			});
	};

	useEffect(() => {
		fetchPlaylistVideos(PLAYLISTS[activePlaylist]);
	}, [activePlaylist]);

	return (
		<section
			className="text-center py-10 bg-gradient-to-b from-orange-50 via-pink-50 to-white"
			id="sermons"
		>
			<header>
				<h1 className="text-2xl md:text-4xl font-bold mb-1 text-red-600">
					Watch Our Latest Sermons
				</h1>
				<p className="text-xl text-gray-600 font-thin">
					Explore our collection of sermons and teachings
				</p>
			</header>

			{/* Playlist Filter Buttons */}
			<div className="mt-5">
				<nav className="flex flex-wrap items-center justify-center gap-2">
					{Object.keys(PLAYLISTS).map((name) => (
						<motion.button
							key={name}
							onClick={() => setActivePlaylist(name)}
							whileTap={{ scale: 0.95 }}
							animate={
								activePlaylist === name
									? { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5 } }
									: {}
							}
							className={`rounded-full text-sm px-5 py-1 font-medium transition ${
								activePlaylist === name
									? "bg-blue-500 text-white"
									: "bg-white border border-gray-300 text-gray-900 hover:bg-gray-100"
							}`}
						>
							{name}
						</motion.button>
					))}
				</nav>
			</div>

			{/* Sermon Swiper */}
			<article className="relative mb-12 z-0">
				{loading && (
					<div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-800/70">
						<div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
					</div>
				)}

				<Swiper
					modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
					effect="coverflow"
					grabCursor
					centeredSlides
					slidesPerView="auto"
					coverflowEffect={{
						rotate: 10,
						stretch: 0,
						depth: 150,
						modifier: 1,
						slideShadows: false,
					}}
					autoplay={{ delay: 4000, disableOnInteraction: false }}
					pagination={{ clickable: true }}
					navigation
					breakpoints={{
						640: { slidesPerView: 1 },
						1024: { slidesPerView: 3 },
					}}
					className="max-w-6xl mx-auto mt-8"
				>
					{sermons.map((sermon, idx) => (
						<SwiperSlide key={sermon.id} className="max-w-sm border-4 rounded-2xl border-white shadow-lg">
							<motion.a
								href={`https://www.youtube.com/watch?v=${sermon.id}`}
								target="_blank"
								rel="noopener noreferrer"
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: idx * 0.1 }}
								whileHover={{ scale: 1.03 }}
								className="bg-white rounded-lg shadow-md hover:shadow-xl transition block overflow-hidden"
							>
								<div className="relative h-56">
									<img
										src={sermon.thumbnail}
										alt={sermon.title}
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="p-3 text-left">
									<h3 className="text-sm font-semibold line-clamp-2">{sermon.title}</h3>
									<p className="text-xs text-gray-500">
										{new Date(sermon.publishedAt).toLocaleDateString()}
									</p>
								</div>
							</motion.a>
						</SwiperSlide>
					))}
				</Swiper>

				{/* Footer Button */}
				<footer className="flex justify-center mt-8">
					<a
						href="https://www.youtube.com/@pastorvinaykumarnjc"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold px-6 py-3 flex items-center space-x-2"
					>
						Watch on YouTube <i className="fas fa-chevron-right ml-2"></i>
					</a>
				</footer>
			</article>
		</section>
	);
}
