import Navbar from "@/components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div>
			<Navbar />
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
