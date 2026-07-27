import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ServicesPage from "./pages/ServicesPage";

const App = () => {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path="services" element={<ServicesPage />} />
				<Route path="portfolio" element={<Portfolio />} />
				<Route path="about" element={<About />} />
				<Route path="blog" element={<Blog />} />
				<Route path="contact" element={<Contact />} />
			</Route>
		</Routes>
	);
};

export default App;
