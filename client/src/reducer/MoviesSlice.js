import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "./MoviesAction";

const initialState = {
    movies: [],
    status: "idle",
    error: null,
};

const MoviesSlice = createSlice({
    name: "movies",
    initialState: initialState,
    reducers: {},
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
            });
    },
});

export default MoviesSlice.reducer;
