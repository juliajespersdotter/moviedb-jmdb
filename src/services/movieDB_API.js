/**
 * MovieDB API functions
 */

import axios from "axios";

// axios.defaults.baseURL = "https://api.themoviedb.org/3";

const BASE_URL = "https://api.themoviedb.org/3";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

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

/**
 * GET movie/popular
 * @returns list of popular movies
 */
const getPopularMovies = () => {
	return get(`${BASE_URL}/movie/popular`, requestOptions);
};

/** GET movie/now_playing
 *
 * @returns list of movies in cinema
 */
const getNowPlaying = () => {
	return get(`${BASE_URL}/movie/now_playing`, requestOptions);
};

/** GET movie/top_rated
 *
 * @returns list of top rated movies
 */
const getTopRated = () => {
	return get(`${BASE_URL}/movie/top_rated`, requestOptions);
};

/** GET movie poster
 *
 * @param {integer} size
 * @param {string} poster_path
 * @returns img src
 */
const getMoviePoster = (size, poster_path) => {
	return get(`${IMAGE_BASE_URL}/${size}/${poster_path}`);
};

/** GET movie/:id
 *
 * @param {integer} id
 * @returns movie info
 */
const getMovie = (id) => {
	return get(
		`${BASE_URL}/movie/${id}?&append_to_response=credits`,
		requestOptions
	);
};

/** GET person/:id
 *
 * @param {integer} id
 * @returns actor info
 */
const getActor = (id) => {
	return get(
		`${BASE_URL}/person/${id}?append_to_response=movie_credits`,
		requestOptions
	);
};

/** GET genre/movie/list
 *
 * @returns list of movie genres
 */
const getGenres = () => {
	return get(`${BASE_URL}/genre/movie/list`, requestOptions);
};

/** GET discover/movie with genres
 *
 * @param {integer} id
 * @param {integer} page
 * @returns movies with a specifik genre
 */
const getMoviesByGenre = (id, page) => {
	return get(
		`${BASE_URL}/discover/movie?&with_genres=${id}&page=${page}`,
		requestOptions
	);
};

/** GET movie/:id/recommendations
 *
 * @param {integer} id
 * @returns movie recommendations related to movie
 */
const getRecommended = (id) => {
	return get(`${BASE_URL}/movie/${id}/recommendations`, requestOptions);
};

/** GET search/movie?query
 *
 * @param {string} query
 * @param {id} page
 * @returns list of movies that match query
 */
const getSearchResult = (query, page) => {
	return get(
		`${BASE_URL}/search/movie?query=${query}&page=${page}`,
		requestOptions
	);
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
	getSearchResult,
};

export default exports;
