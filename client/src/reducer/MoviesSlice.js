import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies, fetchMoviesById } from "./MoviesAction";

const initialState = {
	movies: [],
	status: "idle",
	loading: true,
	favorite: [],
	error: null,
};

const MoviesSlice = createSlice({
	name: "movies",
	initialState: initialState,
	reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setFevorite: (state, action) => {
			// Check if the movie is already in favorites
			const movieTitle = action.payload;
			const existingIndex = state.favorite.findIndex(title => title === movieTitle);
			
			if (existingIndex >= 0) {
				// Remove from favorites if already exists
				state.favorite = state.favorite.filter(title => title !== movieTitle);
			} else {
				// Add to favorites if not exists
				state.favorite.push(movieTitle);
			}
			console.log("favorite:", state.favorite);
		}
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

export const { setLoading,setFevorite } = MoviesSlice.actions;
export default MoviesSlice.reducer;
