import Container from "react-bootstrap/Container";
import movieDB_API from "../services/movieDB_API";
import { useQuery } from "react-query";
import Carousel from "../components/MovieCarousel";
import MovieCarousel from "../components/MovieCarousel";
import MovieCard from "../components/MovieCard";

const HomePage = () => {
	const {
		data: movies,
		error,
		isError,
		isLoading,
	} = useQuery("movie", movieDB_API.getMovies);
	console.log(movies);

	return (
		<Container className="py-3">
			<h1>Welcome!</h1>

			<h2>Popular movies right now</h2>
			{movies && (
				<>
					{movies.results.map((movie) => (
						<MovieCard movie={movie} />
					))}
				</>
			)}

			<MovieCarousel />
		</Container>
	);
};

export default HomePage;
