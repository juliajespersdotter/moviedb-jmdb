import movieDB_API from "../services/movieDB_API";
import { useQuery } from "react-query";

const MovieCard = ({ movie }) => {
	let posterPath = movie.poster_path;
	return (
		<>
			<p>{movie.title}</p>
			<img src={`https://image.tmdb.org/t/p/w300/${posterPath}`} />
		</>
	);
};

export default MovieCard;
