import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
import MovieDetails from "../components/MovieDetails";

const MovieInfoPage = () => {
	const { id } = useParams();
	const { data: movie } = useMovie(id);
	console.log(movie);

	return <>{movie && <MovieDetails movie={movie} />}</>;
};

export default MovieInfoPage;
