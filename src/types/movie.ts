export interface Movie {
	id: number;
	title: string;
	poster_path: string;
	release_date: string;
	vote_average: number;
	overview: string;
	genre_ids: number[];
}

export interface MovieResponse {
	results: Movie[];
	page: number;
	total_pages: number;
	total_results: number;
}
