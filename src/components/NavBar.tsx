import { Link } from "react-router-dom";
import { Flex, Box, Heading, Spacer } from "@chakra-ui/react";
import ThemeToggle from "./ThemeToggle";
import { useColorMode } from "./ui/color-mode";

const Navbar = () => {
	return (
		<Flex
			as="nav"
			p="4"
			bg={useColorMode()}
			color={useColorMode()}
			alignItems="center">
			<Box>
				<Heading size="md">
					<Link to="/">Movie DB</Link>
				</Heading>
			</Box>
			<Spacer />
			<Box>
				<Link to="/" style={{ marginRight: "20px" }}>
					Home
				</Link>
				<Link to="/favorites">Favorites</Link>
				<ThemeToggle />
			</Box>
		</Flex>
	);
};

export default Navbar;
