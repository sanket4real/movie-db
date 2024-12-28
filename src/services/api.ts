import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const options = {
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${API_KEY}`,
	},
};

export const movieApi = axios.create({
	baseURL: BASE_URL,
	...options,
});

export const getMovies = async (page = 1, query = "") => {
	const endpoint = query ? "/search/movie" : "/movie/popular";
	const response = await movieApi.get(endpoint, {
		params: {
			page,
			query,
		},
	});
	return response.data;
};
