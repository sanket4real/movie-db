import { Link } from "react-router-dom";
import { Flex, Box, Heading, Spacer } from "@chakra-ui/react";
import ThemeToggle from "./ThemeToggle";
import { useColorModeValue } from "./ui/color-mode";

const Navbar = () => {
	const bgColor = useColorModeValue("gray.100", "gray.800");
	const textColor = useColorModeValue("black", "white");
	return (
		<Flex as="nav" p="4" bg={bgColor} color={textColor} alignItems="center">
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
