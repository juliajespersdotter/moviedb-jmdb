import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import "./assets/scss/App.scss";
import MovieInfoPage from "./pages/MovieInfoPage";
import GenresPage from "./pages/GenresPage";
import ActorPage from "./pages/ActorPage";
import BrowseGenrePage from "./pages/BrowseGenrePage";
import SearchPage from "./pages/SearchPage";
import Footer from "./components/Footer";

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/movie/:id" element={<MovieInfoPage />} />
				<Route path="/actor/:id" element={<ActorPage />} />
				<Route path="/genres" element={<GenresPage />} />
				<Route path="/genres/:name/:id" element={<BrowseGenrePage />} />
				<Route path="/search" element={<SearchPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
