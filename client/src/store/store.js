import { configureStore } from "@reduxjs/toolkit";
import MoviesSlice from "../reducer/MoviesSlice";

const store = configureStore({
	reducer: {
		movies: MoviesSlice,
	},
});

export default store;
