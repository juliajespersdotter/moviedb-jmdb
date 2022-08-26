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
		include_adult: false,
		//append_to_response: "credits",
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
const getPopularMovies = () => {
	return get(`${BASE_URL}/movie/popular`, requestOptions);
};

const getNowPlaying = () => {
	return get(`${BASE_URL}/movie/now_playing`, requestOptions);
};

const getTopRated = () => {
	return get(`${BASE_URL}/movie/top_rated`, requestOptions);
};

const getMoviePoster = (size, poster_path) => {
	return get(`${IMAGE_BASE_URL}/${size}/${poster_path}`);
};

const getMovie = (id) => {
	return get(
		`${BASE_URL}/movie/${id}?&append_to_response=credits`,
		requestOptions
	);
};

const getActor = (id) => {
	return get(`${BASE_URL}/person/${id}`, requestOptions);
};

const getGenres = () => {
	return get(`${BASE_URL}/genre/movie/list`, requestOptions);
};

const getMoviesByGenre = (id, page) => {
	return get(
		`${BASE_URL}/discover/movie?&with_genres=${id}&page=${page}`,
		requestOptions
	);
};

const getRecommended = (id) => {
	return get(`${BASE_URL}/movie/${id}/recommendations`, requestOptions);
};

const exports = {
	getPopularMovies,
	getNowPlaying,
	getTopRated,
	getMoviePoster,
	getMovie,
	getActor,
	getGenres,
	getMoviesByGenre,
	getRecommended,
};

export default exports;
