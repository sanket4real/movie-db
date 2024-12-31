import { Box, Image, Text, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Toaster, toaster } from "@/components/ui/toaster";
import { Movie } from "../types/movie";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

interface Props {
	movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
		setIsFavorite(favorites.some((fav: Movie) => fav.id === movie.id));
	}, [movie.id]);

	const toggleFavorite = () => {
		const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

		if (isFavorite) {
			const newFavorites = favorites.filter((fav: Movie) => fav.id !== movie.id);
			localStorage.setItem("favorites", JSON.stringify(newFavorites));
			setIsFavorite(false);
			toaster.create({
				title: "Removed from favorites",
				duration: 2000,
			});
		} else {
			favorites.push(movie);
			localStorage.setItem("favorites", JSON.stringify(favorites));
			setIsFavorite(true);
			toaster.create({
				title: "Added to favorites",
				duration: 2000,
			});
		}
	};

	return (
		<>
			<Toaster />
			<Box
				position={"relative"}
				borderRadius="lg"
				overflow="hidden"
				boxShadow="md"
				transition="transform 0.2s"
				_hover={{ transform: "scale(1.02)" }}>
				<Button
					position={"absolute"}
					top={2}
					right={2}
					onClick={toggleFavorite}
					colorScheme={isFavorite ? "red" : "blue"}
					size="sm"
					mt={2}>
					{isFavorite ? <IoMdHeart fill="red" /> : <IoIosHeartEmpty />}
				</Button>
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
		</>
	);
};
