import { fetchMoviesById } from "@/reducer/MoviesAction";
import { setLoading } from "@/reducer/MoviesSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";

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
		<div>
			<div className="bg-gray-300">
				<figure>
					<img
						src={movies.Poster}
						alt={movies.Title}
						className="w-[200px] h-[300px] object-cover"
					/>
				</figure>
			</div>
			{movies.Title}
		</div>
	);
};
export default Detailpage;
