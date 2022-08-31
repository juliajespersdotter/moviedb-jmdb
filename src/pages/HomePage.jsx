import Container from "react-bootstrap/Container";
import useNowPlaying from "../hooks/useNowPlaying";
import useTopRated from "../hooks/useTopRated";
import usePopular from "../hooks/usePopular";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieCard from "../components/MovieCard";
import MovieCarousel from "../components/MovieCarousel";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom";

const HomePage = () => {
	const { data: popularMovies, isError, isLoading } = usePopular();

	const { data: nowPlaying } = useNowPlaying();

	const { data: topRated } = useTopRated();
	return (
		<Container fluid="lg" className="py-3">
			{isError && <p>An error has occurred</p>}

			{isLoading && <LoadingSpinner />}

			{popularMovies && nowPlaying && topRated && (
				<>
					<MovieCarousel movies={popularMovies.results} />
					<div className="grey-container">
						<h2 className="mb-5">
							<Link to={`/popular`}>
								Popular Movies Right Now
							</Link>
						</h2>
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

					<div className="grey-container">
						<Row>
							<h2 className="mb-5">
								<Link to={`/nowplaying`}>Now Playing</Link>
							</h2>
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

					<div className="grey-container">
						<Row>
							<h2 className="mb-5">
								<Link to={`/toprated`}>Top Rated</Link>
							</h2>
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
