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
		<div className="search-bar">
			<label htmlFor="search-input" className="sr-only">
				Search for a movie
			</label>
			<input
				id="search-input"
				type="text"
				value={input}
				onChange={handleInputChange}
				onKeyPress={handleKeyPress}
				placeholder="Search for a movie..."
				aria-label="Search for a movie"
			/>
			<button onClick={handleSearch} aria-label="Start search">
				Search
			</button>
		</div>
	);
};

export default SearchBar;
