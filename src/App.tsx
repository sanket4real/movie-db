import { Provider } from "./components/ui/provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

// import Layout from "./components/Layout";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/favorites" element={<Favorites />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</QueryClientProvider>
	);
}

export default App;
