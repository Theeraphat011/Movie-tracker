import { setFevorite, setLoading } from "@/reducer/MoviesSlice";
import { StarIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Favorite from "@/components/ui/favorite";

const RenderPage = ({ selectedCategory }) => {
	const { favorite } = useSelector((state) => state.movies);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleFavoriteClick = (title) => {
		dispatch(setFevorite(title));
	};

	const isFavorite = (title) => {
		return favorite.includes(title);
	};
	const { movies } = useSelector((state) => state.movies);

	const filteredMovies = () => {
		if (!Array.isArray(movies)) return [];
		if (selectedCategory === "All") return movies;
		return movies.filter((movie) => movie.Genre && movie.Genre.includes(selectedCategory));
	};

	const handleMoviesClick = (id) => {
		dispatch(setLoading(true));
		setTimeout(async () => {
			await dispatch(setLoading(false));
			navigate(`/about/${id}`);
		}, 800);
	};

	return (
		<div className="grid place-content-center grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
			{filteredMovies().length > 0 ? (
				filteredMovies().map((item) => (
					<div
						key={item.id}
						className="relative shadow-sm shadow-red-900/20 p-4 rounded-lg bg-black/30 hover:bg-black/40 transition-colors">
						<div onClick={() => handleMoviesClick(item.id)}>
							<figure className="relative flex justify-center cursor-pointer group overflow-hidden rounded-lg">
								<img
									src={item.Poster}
									alt={item.Title}
									className="h-[300px] w-[280px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
									loading="lazy"
								/>
								<div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="absolute bottom-2 left-0 flex items-center gap-2 text-xl font-bold text-white bg-red-600/90 backdrop-blur-sm pl-2 pr-3 py-1 rounded-r-lg shadow-lg">
									<StarIcon className="h-5 w-5 text-white" />
									<span className="text-white">{item.imdbRating}</span>
								</div>
								<div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-md font-medium text-sm backdrop-blur-sm border border-red-500/30">
									{item.Year}
								</div>
							</figure>
						</div>
						<div className="grid gap-1 justify-between mt-5 text-white">
							<h1 className="text-xl font-semibold">{item.Title}</h1>
							<p className="text-gray-400">{item.Year}</p>
						</div>
						<div
							className="absolute bottom-5 right-5 cursor-pointer"
							onClick={() => handleFavoriteClick(item.Title)}>
							<Favorite active={isFavorite(item.Title)} color="red" />
						</div>
					</div>
				))
			) : (
				<div className="col-span-full py-10 text-center text-gray-400">
					<p className="text-xl">No movies found in this category</p>
				</div>
			)}
		</div>
	);
};
export default RenderPage;
