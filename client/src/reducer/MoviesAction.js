import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/MoviesApi";

export const fetchMovies = createAsyncThunk(
	"movies/fetchMovies",
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get("/api/movies");
			return response.data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);

export const fetchMoviesById = createAsyncThunk(
	"movies/fetchMoviesById",
	async (id, { rejectWithValue }) => {
		try {
			const response = await axios.get(`/api/movies/${id}`);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);
