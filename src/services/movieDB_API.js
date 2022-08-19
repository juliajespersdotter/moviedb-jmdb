/**
 * MovieDB API functions
 */

import axios from "axios";

// axios.defaults.baseURL = "https://api.themoviedb.org/3";

const BASE_URL = "https://api.themoviedb.org/3";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

const API_KEY = "6ae7c08e53e35ab0814a90502c6e85cb";

const FAKE_SLOW_API = false;
const FAKE_SLOW_API_DELAY = 1500;

// Poster Image URL
// last .jpg is poster_path from movie
// https://image.tmdb.org/t/p/w500/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg

const requestOptions = {
	params: {
		api_key: "6ae7c08e53e35ab0814a90502c6e85cb",
		language: "en-US",
		// sort_by: "popularity.desc",
		include_adult: false,
		page: 1,
	},
};

/**
 * GET an endpoint
 *
 * @param {string} endpoint
 * @returns Promise
 */
const get = async (endpoint, options) => {
	const res = await axios.get(endpoint, options);

	console.log(endpoint, options);

	FAKE_SLOW_API &&
		(await new Promise((r) => setTimeout(r, FAKE_SLOW_API_DELAY)));

	return res.data;
};

// GET /discover/movie
export const getPopularMovies = () => {
	return get(`${BASE_URL}/movie/popular`, requestOptions);
};

export const getNowPlaying = () => {
	return get(`${BASE_URL}/movie/now_playing`, requestOptions);
};

export const getTopRated = () => {
	return get(`${BASE_URL}/movie/top_rated`, requestOptions);
};

export const getMoviePoster = (size, poster_path) => {
	return get(`${IMAGE_BASE_URL}/${size}/${poster_path}`);
};

const exports = {
	getPopularMovies,
	getNowPlaying,
	getTopRated,
	getMoviePoster,
};

export default exports;
