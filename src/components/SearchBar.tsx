import { Button, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";

const SearchBar = ({
	onSearch,
}: {
	onSearch: (searchTerm: string) => void;
}) => {
	const [input, setInput] = useState("");

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	const handleSearch = () => {
		if (input.trim() !== "") {
			onSearch(input.trim());
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleSearch();
		}
	};

	return (
		<Flex
			className="search-bar"
			justifyContent="center"
			alignItems="center"
			gap={[2, 3, 4]}
			p={[2, 3, 4]}>
			<label htmlFor="search-input" className="sr-only">
				Search for a movie
			</label>
			<Input
				id="search-input"
				type="text"
				value={input}
				onChange={handleInputChange}
				onKeyPress={handleKeyPress}
				placeholder="Search for a movie..."
				aria-label="Search for a movie"
				width={["200px", "300px", "400px"]}
				size={["sm", "md", "lg"]}
			/>
			<Button
				onClick={handleSearch}
				aria-label="Start search"
				size={["sm", "md", "lg"]}
				colorScheme="blue">
				Search
			</Button>
		</Flex>
	);
};

export default SearchBar;
