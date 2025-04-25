const movies = require("../movie");

exports.getMovies = (req, res) => {
	try {
		res.status(200).json(movies);
	} catch (error) {
		console.error("Error fetching movie:", error);
		res.status(500).json({ message: "Server error thile retrieving moive" });
	}
};

exports.getMoviesById = (req, res) => {
	try {
		const { id } = req.params;
		const movie = movies.find((movie) => movie.id === parseInt(id) || movie.id === id);

		if (!movie) {
			return res.status(404).json({ message: "Movies not found" });
		}

		res.status(200).json(movie);
	} catch (error) {
		console.error("Error fetching movie:", error);
		res.status(500).json({ message: "Server error thile retrieving moive" });
	}
}
