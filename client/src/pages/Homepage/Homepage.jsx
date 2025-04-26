import { fetchMovies } from "@/reducer/MoviesAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DotLoader from "react-spinners/DotLoader";
import { setLoading } from "@/reducer/MoviesSlice";
import RenderPage from "./RenderPage";
import MoviePreviewSlider from "./MoviePreviewSlider";

const Homepage = () => {
	const { movies } = useSelector((state) => state.movies);
	const { status } = useSelector((state) => state.movies);
	const { loading } = useSelector((state) => state.movies);
	const dispatch = useDispatch();
	const [selectedCategory, setSelectedCategory] = useState("All");

	useEffect(() => {
		dispatch(fetchMovies());
	}, [dispatch]);

	useEffect(() => {
		if (status === "successfully") {
			dispatch(setLoading(true));
			setTimeout(() => {
				dispatch(setLoading(false));
			}, 800);
		}
	}, [status, dispatch]);

	const getCategories = () => {
		if (!Array.isArray(movies)) return ["All"];
		const genres = new Set(movies.flatMap((movie) => movie.Genre?.split(", ") || []));
		return ["All", ...genres];
	};

	const getFeaturedMovies = () => {
		if (!Array.isArray(movies)) return [];
		return [...movies]
			.sort((a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating))
			.slice(0, 5);
	};

	const categories = getCategories();

	const handleCategoryClick = (category) => {
		setSelectedCategory(category);
	};

	if (loading || status === "loading") {
		return (
			<div className="grid place-content-center gap-5 h-screen text-white">
				<DotLoader color="#ffff" /> <span>Loading</span>
			</div>
		);
	}

	return (
		<div className="px-5">
			{Array.isArray(movies) && movies.length > 0 && (
				<div className="mb-10">
					<MoviePreviewSlider featuredMovies={getFeaturedMovies()} />
				</div>
			)}

			<div className="mb-8 overflow-x-auto">
				<div className="flex space-x-2 py-4 min-w-max">
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => handleCategoryClick(category)}
							className={`px-4 py-2 rounded-full transition-all ${
								selectedCategory === category
									? "bg-red-500 text-white font-medium"
									: "bg-black text-gray-300 hover:bg-gray-800 cursor-pointer"
							}`}>
							{category}
						</button>
					))}
				</div>
			</div>
			<RenderPage selectedCategory={selectedCategory} />
		</div>
	);
};

export default Homepage;
