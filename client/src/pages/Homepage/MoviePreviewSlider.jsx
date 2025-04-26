import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { StarIcon } from "@heroicons/react/24/solid";
import { PlayIcon } from "@heroicons/react/24/solid";
import { setLoading } from "@/reducer/MoviesSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../Homepage/Homepage.css";

const MoviePreviewSlider = ({ featuredMovies }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const swiperRef = useRef(null);

	const handleMovieClick = (id) => {
		dispatch(setLoading(true));
		setTimeout(async () => {
			await dispatch(setLoading(false));
			navigate(`/about/${id}`);
		}, 800);
	};

	if (!featuredMovies.length) return null;

	return (
		<div className="relative h-[500px] rounded-xl overflow-hidden">
			<Swiper
				ref={swiperRef}
				effect="fade"
				fadeEffect={{ crossFade: true }}
				speed={1000}
				spaceBetween={0}
				centeredSlides={true}
				loop={true}
				loopAdditionalSlides={2}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
					pauseOnMouseEnter: false,
				}}
				pagination={{
					clickable: true,
					dynamicBullets: true,
				}}
				modules={[Autoplay, Pagination, EffectFade]}
				className="h-full w-full movie-slider">
				{featuredMovies.map((movie, index) => (
					<SwiperSlide key={`${movie.id}-${index}`}>
						<div
							className="relative w-full h-full cursor-pointer group"
							onClick={() => handleMovieClick(movie.id)}>
							<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>

							<img
								src={movie.Poster}
								alt={movie.Title}
								className="w-full h-full object-cover object-center"
								loading="lazy"
							/>

							<div className="absolute bottom-0 left-0 p-6 md:p-10 w-full md:w-3/4 text-white z-20">
								<h2 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">
									{movie.Title || "Unknown Title"}
								</h2>

								<div className="flex items-center gap-3 mb-4 flex-wrap">
									{movie.imdbRating && (
										<span className="flex items-center gap-1 bg-red-600 text-white px-2 py-1 rounded-md font-bold">
											<StarIcon className="h-4 w-4" /> {movie.imdbRating}
										</span>
									)}
									{movie.Year && (
										<span className="bg-black/80 text-white border border-red-500/30 px-2 py-1 rounded-md">
											{movie.Year}
										</span>
									)}
									{movie.Runtime && (
										<span className="bg-black/80 text-white border border-red-500/30 px-2 py-1 rounded-md">
											{movie.Runtime}
										</span>
									)}
								</div>

								{movie.Plot && (
									<p className="text-gray-200 line-clamp-2 mb-5 max-w-2xl text-lg">
										{movie.Plot}
									</p>
								)}

								<div className="flex gap-3 flex-wrap mb-6">
									{movie.Genre?.split(", ").map((genre, i) => (
										<span
											key={`${genre}-${i}`}
											className="bg-black/50 text-white border border-red-500/30 px-3 py-1 rounded-full text-sm">
											{genre}
										</span>
									))}
								</div>

								<button
									className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-5 rounded-full transition-all flex items-center gap-2 hover:scale-105"
									onClick={(e) => {
										e.stopPropagation();
										handleMovieClick(movie.id);
									}}>
									<PlayIcon className="h-5 w-5" /> Watch Now
								</button>
							</div>

							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
								<div className="bg-red-600/80 p-6 rounded-full">
									<PlayIcon className="h-10 w-10 text-white" />
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default MoviePreviewSlider;
