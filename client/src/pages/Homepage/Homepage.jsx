import { fetchMovies } from "@/reducer/MoviesAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StarIcon from "@heroicons/react/16/solid/StarIcon";
import DotLoader from "react-spinners/DotLoader";
import { setLoading } from "@/reducer/MoviesSlice";

const Homepage = () => {
	const { movies } = useSelector((state) => state.movies);
	const { status } = useSelector((state) => state.movies);
	const { loading } = useSelector((state) => state.movies);
	const dispatch = useDispatch();
	const navigate = useNavigate();

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

	const handleMoviesClick = (id) => {
		dispatch(setLoading(true));
		setTimeout(async () => {
			await dispatch(setLoading(false));
			navigate(`/about/${id}`);
		}, 800);
	};

	if (loading || status === "loading") {
		return (
			<div className="grid place-content-center gap-5 h-screen text-white">
				<DotLoader color="#ffff" /> <span>Loading</span>
			</div>
		);
	}

	return (
		<div className="grid place-content-center grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-5">
			{Array.isArray(movies) ? (
				movies.map((item) => (
					<div key={item.id} className="shadow-sm shadow-gray-300/30 p-4 rounded-xs">
						<div onClick={() => handleMoviesClick(item.id)}>
							<figure className="relative flex justify-center cursor-pointer">
								<img
									src={item.Poster}
									alt={item.Title}
									className="h-[300px] w-[280px] object-cover rounded-xs"
								/>
								<div className="absolute bottom-2 left-0 flex items-center gap-2 text-xl font-bold text-yellow-500 bg-white pl-2 pr-3">
									<StarIcon className="h-5 w-5" />
									<span>{item.imdbRating}</span>
								</div>
							</figure>
						</div>
						<div className="grid gap-1 justify-between mt-5 text-gray-300">
							<h1 className="text-xl font-semibold">{item.Title}</h1>

							<p>{item.Year}</p>
						</div>
					</div>
				))
			) : (
				<div className="grid place-content-center gap-5 h-svh text-white">
					<DotLoader color="#ffff" /> <span>Loading</span>
				</div>
			)}
		</div>
	);
};

export default Homepage;
