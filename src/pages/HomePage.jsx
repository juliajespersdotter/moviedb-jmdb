import Container from "react-bootstrap/Container";
import movieDB_API from "../services/movieDB_API";
import { useQuery } from "react-query";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieCard from "../components/MovieCard";
import MovieCarousel from "../components/MovieCarousel";

const HomePage = () => {
	const {
		data: movies,
		error,
		isError,
		isLoading,
	} = useQuery("movies", movieDB_API.getPopularMovies);

	const { data: nowPlaying } = useQuery(
		"now-playing",
		movieDB_API.getNowPlaying
	);

	const { data: topRated } = useQuery("top-rated", movieDB_API.getTopRated);
	console.log(movies);
	console.log("now playing: ", nowPlaying);

	return (
		<Container fluid="lg" className="py-3">
			<h1>MovieDB</h1>

			{movies && (
				<>
					<MovieCarousel movies={movies.results} />
					<Row>
						<h2>Popular movies right now</h2>

						{movies.results.map((movie) => (
							<Col
								lg={2}
								md={4}
								sm={10}
								key={movie.id}
								className="pb-5"
							>
								<MovieCard movie={movie} />
							</Col>
						))}
					</Row>

					<Row>
						<h2>Now Playing</h2>
						{nowPlaying.results.map((movie) => (
							<Col
								lg={2}
								md={4}
								sm={10}
								key={movie.id}
								className="pb-5"
							>
								<MovieCard movie={movie} />
							</Col>
						))}
					</Row>

					<Row>
						<h2>Top Rated</h2>
						{topRated.results.map((movie) => (
							<Col
								lg={2}
								md={4}
								sm={10}
								key={movie.id}
								className="pb-5"
							>
								<MovieCard movie={movie} />
							</Col>
						))}
					</Row>
				</>
			)}
		</Container>
	);
};

export default HomePage;
