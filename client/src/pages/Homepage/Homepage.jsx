import { fetchMovies } from "@/reducer/MoviesAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Homepage = () => {
	const { movies } = useSelector((state) => state.movies);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMovies());
	}, [dispatch]);

	console.log(movies);

	return (
		<div className="grid place-content-center grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-10">
			{movies.map((item) => (
				<div key={item.id}>
					<figure className="flex justify-center cursor-pointer">
						<img
							src={item.Poster}
							alt={item.Title}
							className="h-[300px] w-[250px] object-cover"
						/>
					</figure>
					<h1>
						<strong>Title : </strong>
						{item.Title}
					</h1>
					<p>
						<strong>Genre : </strong>
						{item.Genre}
					</p>
					<p>
						<strong>Director : </strong>
						{item.Director}
					</p>
					<p>
						<strong>Actors : </strong>
						{item.Actors}
					</p>
					<p>
						<strong>Rate : </strong>
						{item.imdbRating},<strong>Year : </strong>
						{item.Year}
					</p>
				</div>
			))}
		</div>
	);
};

export default Homepage;
