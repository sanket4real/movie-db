import { Box, Image, Text } from "@chakra-ui/react";
import { Movie } from "../types/movie";

interface Props {
	movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
	return (
		<Box
			borderRadius="lg"
			overflow="hidden"
			boxShadow="md"
			transition="transform 0.2s"
			_hover={{ transform: "scale(1.02)" }}>
			<Image
				src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				alt={movie.title}
				width="100%"
				height="auto"
				onError={(e) => {
					(e.target as HTMLImageElement).src =
						"https://fakeimg.pl/400x600?text=img&font=bebas";
				}}
			/>
			<Box p={4}>
				<Text fontSize="xl" fontWeight="bold">
					{movie.title}
				</Text>
				<Text color="gray.600">
					{movie.release_date ? new Date(movie.release_date).getFullYear() : "N/A"}
				</Text>
			</Box>
		</Box>
	);
};
