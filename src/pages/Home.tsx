import { MovieCard } from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { getMovies } from "@/services/api";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";

type Movie = {
	id: number;
	title: string;
};

const Home = () => {
	const [page, setPage] = useState(1);
	const [movies, setMovies] = useState<Movie[]>([]);
	const [searchTerm, setSearchTerm] = useState("");

	const loadMoreMovies = async () => {
		const nextPage = page + 1;
		try {
			const response = await getMovies(nextPage, searchTerm);
			const newMovies = response.results.filter(
				(newMovie: { id: any }) =>
					!movies.some((existingMovie) => existingMovie.id === newMovie.id)
			);
			setMovies((prev) => [...prev, ...newMovies]);
			setPage(nextPage);
		} catch (error) {
			console.error("Error fetching more movies:", error);
		}
	};

	const { lastElementRef } = useInfiniteScroll(loadMoreMovies);

	const handleSearch = async (searchTerm: string) => {
		setSearchTerm(searchTerm);
		setPage(1);
		try {
			const response = await getMovies(1, searchTerm);
			setMovies(response.results);
			console.log(movies);
		} catch (error) {
			console.error("Error fetching movies:", error);
		}
	};

	return (
		<Container>
			<SearchBar onSearch={handleSearch} />
			<Container className="movies-list" mt={6}>
				<Grid
					templateColumns={[
						"repeat(1, 1fr)",
						"repeat(2, 1fr)",
						"repeat(3, 1fr)",
						"repeat(4, 1fr)",
					]}
					gap={["4", "5", "6"]}>
					{movies.map((movie, index) => (
						<GridItem
							key={movie.id}
							ref={index === movies.length - 1 ? lastElementRef : null}>
							<MovieCard movie={movie} />
						</GridItem>
					))}
				</Grid>
			</Container>
		</Container>
	);
};

export default Home;
