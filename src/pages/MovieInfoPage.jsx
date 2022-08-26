import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
import MovieDetails from "../components/MovieDetails";
import LoadingSpinner from "../components/LoadingSpinner";

const MovieInfoPage = () => {
	const { id } = useParams();
	const { data: movie, isLoading } = useMovie(id);
	console.log(movie);

	return (
		<>
			{isLoading && <LoadingSpinner />}
			{movie && <MovieDetails movie={movie} />}
		</>
	);
};

export default MovieInfoPage;
