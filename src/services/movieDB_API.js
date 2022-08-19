/**
 * MovieDB API functions
 */

import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const API_KEY = "6ae7c08e53e35ab0814a90502c6e85cb";

const FAKE_SLOW_API = false;
const FAKE_SLOW_API_DELAY = 1500;

const requestOptions = {
	params: {
		api_key: "6ae7c08e53e35ab0814a90502c6e85cb",
		language: "en-US",
		sort_by: "popularity.desc",
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

	FAKE_SLOW_API &&
		(await new Promise((r) => setTimeout(r, FAKE_SLOW_API_DELAY)));

	return res.data;
};

// GET /discover/movie
export const getMovies = () => {
	return get("/discover/movie", requestOptions);
};

const exports = {
	getMovies,
};

export default exports;
