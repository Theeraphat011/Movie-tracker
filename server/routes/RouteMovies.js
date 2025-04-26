const express = require("express");
const router = express.Router();
const { getMovies, getMoviesById } = require("../controllers/ControllerRoute");

router.get("/api/movies", getMovies);
router.get("/api/movies/:id", getMoviesById);

module.exports = router;
