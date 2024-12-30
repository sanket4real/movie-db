// import {
// 	Box,
// 	Select,
// 	RangeSlider,
// 	RangeSliderTrack,
// 	RangeSliderFilledTrack,
// 	RangeSliderThumb,
// } from "@chakra-ui/react";

// interface FilterProps {
// 	onFilterChange: (filters: FilterOptions) => void;
// }

// export interface FilterOptions {
// 	genre: string;
// 	yearRange: [number, number];
// 	rating: [number, number];
// }

// export const Filters = ({ onFilterChange }: FilterProps) => {
// 	return (
// 		<Box p={4}>
// 			<Select
// 				placeholder="Select genre"
// 				onChange={(e) => onFilterChange({ genre: e.target.value })}>
// 				<option value="action">Action</option>
// 				<option value="comedy">Comedy</option>
// 				<option value="drama">Drama</option>
// 			</Select>

// 			<RangeSlider
// 				aria-label={["min year", "max year"]}
// 				defaultValue={[1990, 2023]}
// 				min={1900}
// 				max={2023}
// 				onChange={(val) => onFilterChange({ yearRange: val })}>
// 				<RangeSliderTrack>
// 					<RangeSliderFilledTrack />
// 				</RangeSliderTrack>
// 				<RangeSliderThumb index={0} />
// 				<RangeSliderThumb index={1} />
// 			</RangeSlider>
// 		</Box>
// 	);
// };

const Filters = () => {
	return <div>Filters</div>;
};

export default Filters;
