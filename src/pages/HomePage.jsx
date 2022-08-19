import Container from "react-bootstrap/Container";
import movieDB_API from "../services/movieDB_API";
import { useQuery } from "react-query";

const HomePage = () => {
	const {
		data: movie,
		error,
		isError,
		isLoading,
	} = useQuery("movie", movieDB_API.getMovies);
	console.log(movie);

	return (
		<Container className="py-3">
			<h1>Welcome!</h1>
		</Container>
	);
};

export default HomePage;
