import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
import MovieDetails from "../components/MovieDetails";
import LoadingSpinner from "../components/LoadingSpinner";
import useMovieRecs from "../hooks/useMovieRecs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import MovieCard from "../components/MovieCard";

const MovieInfoPage = () => {
	const { id } = useParams();
	const { data: movie, isLoading } = useMovie(id);
	const { data: movieRecs } = useMovieRecs(id);
	console.log(movieRecs);

	return (
		<Container className="grey-container">
			{isLoading && <LoadingSpinner />}
			{movie && <MovieDetails movie={movie} />}

			<h2 className="m-5 ms-2">You might also like...</h2>
			{movieRecs && (
				<Row>
					{movieRecs.results.map((movie) => (
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
			)}
		</Container>
	);
};

export default MovieInfoPage;
