const express = require("express");
const cors = require("cors");
const { getMovies, getMoviesById } = require("./controllers/ControllerRoute");

const app = express();

app.use(cors());

app.get("/api/movies", getMovies);

app.get("/api/movies/:id", getMoviesById);

app.listen(9000, () => {
	console.log("server is running http://localhost:9000/");
});
