import { IconButton } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { BsMoonStars } from "react-icons/bs";
import { CiSun } from "react-icons/ci";

const ThemeToggle = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<IconButton
			aria-label="Toggle color mode"
			onClick={toggleColorMode}
			variant="ghost"
			color="current"
			ml={4}>
			{colorMode === "light" ? <BsMoonStars /> : <CiSun />}
		</IconButton>
	);
};

export default ThemeToggle;
