import { fetchMoviesById } from "@/reducer/MoviesAction";
import { setLoading } from "@/reducer/MoviesSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";
import { StarIcon, ClockIcon, CalendarIcon, FilmIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";

const Detailpage = () => {
	const { id } = useParams();
	const { movies } = useSelector((state) => state.movies);
	const { status } = useSelector((state) => state.movies);
	const { loading } = useSelector((state) => state.movies);
	const dispatch = useDispatch();

	console.log("detail", movies);

	useEffect(() => {
		dispatch(fetchMoviesById(id));
		setTimeout(() => {
			dispatch(setLoading(false));
		}, 800);
	}, [dispatch, id]);

	if (loading || status === "loading") {
		return (
			<div className="grid place-content-center gap-5 h-svh text-white">
				<DotLoader color="#ffff" /> <span>Loading</span>
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4 py-8 text-white">
			<div className="relative rounded-xl overflow-hidden mb-8">
				{/* Backdrop image with overlay */}
				<div className="absolute inset-0 bg-black/70 z-10"></div>
				{movies.Poster && (
					<div className="w-full h-[400px] relative">
						<img
							src={movies.Poster}
							alt={movies.Title}
							className="w-full h-full object-cover opacity-30"
						/>
					</div>
				)}

				{/* Main content */}
				<div className="md:flex items-center relative z-20 p-8">
					<div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
						<img
							src={movies.Poster}
							alt={movies.Title}
							className="w-[250px] h-auto rounded-lg shadow-lg border-2 border-gray-800"
						/>
					</div>

					<div className="md:w-3/4 md:pl-8">
						<h1 className="text-4xl md:text-5xl font-bold mb-4">{movies.Title}</h1>

						<div className="flex items-center gap-3 mb-6 flex-wrap">
							{movies.imdbRating && (
								<span className="flex items-center gap-1 bg-red-600 text-white px-2 py-1 rounded-md font-bold">
									<StarIcon className="h-4 w-4" /> {movies.imdbRating}
								</span>
							)}
							{movies.Year && (
								<span className="bg-black/80 text-white border border-red-500/30 px-2 py-1 rounded-md flex items-center gap-1">
									<CalendarIcon className="h-4 w-4" /> {movies.Year}
								</span>
							)}
							{movies.Runtime && (
								<span className="bg-black/80 text-white border border-red-500/30 px-2 py-1 rounded-md flex items-center gap-1">
									<ClockIcon className="h-4 w-4" /> {movies.Runtime}
								</span>
							)}
							{movies.Rated && (
								<span className="bg-black/80 text-white border border-red-500/30 px-2 py-1 rounded-md flex items-center gap-1">
									<FilmIcon className="h-4 w-4" /> {movies.Rated}
								</span>
							)}
						</div>

						<div className="flex gap-3 flex-wrap mb-6">
							{movies.Genre?.split(", ").map((genre, i) => (
								<span
									key={`${genre}-${i}`}
									className="bg-black/50 text-white border border-red-500/30 px-3 py-1 rounded-full text-sm">
									{genre}
								</span>
							))}
						</div>

						<p className="text-gray-200 text-lg mb-6">{movies.Plot}</p>

						<Button
							variant="default"
							className="bg-red-600 hover:bg-red-700 text-white">
							Add to Watchlist
						</Button>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
				<div className="bg-black/40 rounded-xl p-6 border border-gray-800">
					<h2 className="text-2xl font-bold mb-4 text-red-500">Cast & Crew</h2>

					<div className="space-y-4">
						<div>
							<h3 className="text-lg font-semibold text-gray-300">Director</h3>
							<p className="text-gray-400">{movies.Director}</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-gray-300">Writers</h3>
							<p className="text-gray-400">{movies.Writers}</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-gray-300">Actors</h3>
							<p className="text-gray-400">{movies.Actors}</p>
						</div>
					</div>
				</div>

				<div className="bg-black/40 rounded-xl p-6 border border-gray-800">
					<h2 className="text-2xl font-bold mb-4 text-red-500">Details</h2>

					<div className="space-y-4">
						<div>
							<h3 className="text-lg font-semibold text-gray-300">Country</h3>
							<p className="text-gray-400">{movies.Country}</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-gray-300">Language</h3>
							<p className="text-gray-400">{movies.Language}</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-gray-300">Awards</h3>
							<p className="text-gray-400">{movies.Awards}</p>
						</div>

						{movies.BoxOffice && (
							<div>
								<h3 className="text-lg font-semibold text-gray-300">Box Office</h3>
								<p className="text-gray-400">{movies.BoxOffice}</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Detailpage;
