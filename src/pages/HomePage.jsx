import Container from "react-bootstrap/Container";
import movieDB_API from "../services/movieDB_API";
import { useQuery } from "react-query";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieCard from "../components/MovieCard";
import MovieCarousel from "../components/MovieCarousel";

const HomePage = () => {
	const {
		data: popularMovies,
		error,
		isError,
		isLoading,
	} = useQuery("movies", movieDB_API.getPopularMovies);

	const { data: nowPlaying } = useQuery(
		"now-playing",
		movieDB_API.getNowPlaying
	);

	const { data: topRated } = useQuery("top-rated", movieDB_API.getTopRated);
	return (
		<Container fluid="lg" className="py-3">
			<h1>MovieDB</h1>

			{isError && <p>An error has occurred</p>}

			{popularMovies && nowPlaying && topRated && (
				<>
					<MovieCarousel movies={popularMovies.results} />
					<div className="movie-list">
						<h2 className="mb-5">Popular movies right now</h2>
						<Row>
							{popularMovies.results.map((movie) => (
								<Col
									lg={3}
									md={4}
									sm={10}
									key={movie.id}
									className="pb-5"
								>
									<MovieCard movie={movie} />
								</Col>
							))}
						</Row>
					</div>

					<div className="movie-list">
						<Row>
							<h2 className="mb-5">Now Playing</h2>
							{nowPlaying.results.map((movie) => (
								<Col
									lg={3}
									md={4}
									sm={10}
									key={movie.id}
									className="pb-5"
								>
									<MovieCard movie={movie} />
								</Col>
							))}
						</Row>
					</div>

					<div className="movie-list">
						<Row>
							<h2 className="mb-5">Top Rated</h2>
							{topRated.results.map((movie) => (
								<Col
									lg={3}
									md={4}
									sm={10}
									key={movie.id}
									className="pb-5"
								>
									<MovieCard movie={movie} />
								</Col>
							))}
						</Row>
					</div>
				</>
			)}
		</Container>
	);
};

export default HomePage;
