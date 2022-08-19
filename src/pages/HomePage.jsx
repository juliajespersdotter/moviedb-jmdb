import Container from "react-bootstrap/Container";
import movieDB_API from "../services/movieDB_API";
import { useQuery } from "react-query";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
		<Container fluid="lg" className="py-3">
			<h1>Welcome!</h1>
			<MovieCarousel />

			<h2>Popular movies right now</h2>
			{movies && (
				<>
					<Row>
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
				</>
			)}
		</Container>
	);
};

export default HomePage;
