import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies, fetchMoviesById } from "./MoviesAction";

const initialState = {
	movies: [],
	status: "idle",
	loading: true,
	error: null,
};

const MoviesSlice = createSlice({
	name: "movies",
	initialState: initialState,
	reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMovies.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchMovies.fulfilled, (state, action) => {
				state.status = "successfully";
				state.movies = action.payload;
			})
			.addCase(fetchMovies.rejected, (state, action) => {
				state.status = "rejected";
				state.error = action.payload;
			})
			.addCase(fetchMoviesById.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchMoviesById.fulfilled, (state, action) => {
				state.status = "successfully";
				state.movies = action.payload;
			})
			.addCase(fetchMoviesById.rejected, (state, action) => {
				state.status = "rejected";
				state.movies = action.payload;
			});
	},
});

export const { setLoading } = MoviesSlice.actions;
export default MoviesSlice.reducer;
