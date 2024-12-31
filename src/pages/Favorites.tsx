import { MovieCard } from "@/components/MovieCard";
import { Container, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

type Movie = {
	id: string;
	title: string;
};

const Favorites = () => {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
		setFavorites(storedFavorites);
	}, []);

	return (
		<Container>
			<Heading size="2xl" as="h1" mt={4} mb={6} textAlign="center">
				My Favorite Movies
			</Heading>

			{favorites.length === 0 ? (
				<Text textAlign="center" mt={4}>
					No favorite movies added yet.
				</Text>
			) : (
				<Grid
					templateColumns={[
						"repeat(1, 1fr)",
						"repeat(2, 1fr)",
						"repeat(3, 1fr)",
						"repeat(4, 1fr)",
					]}
					gap={["4", "5", "6"]}>
					{favorites.map((movie) => (
						<GridItem key={(movie as Movie).id}>
							<MovieCard movie={movie} />
						</GridItem>
					))}
				</Grid>
			)}
		</Container>
	);
};

export default Favorites;
