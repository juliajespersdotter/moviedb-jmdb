import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import useSlice from "../hooks/useSlice";

const MovieCard = ({ movie }) => {
	let posterPath = movie.poster_path;
	const release_date = useSlice(movie.release_date);

	return (
		<>
			<Link to={`/movie/${movie.id}`}>
				<Card border="dark" className="bg-dark movie-card">
					<img
						className="mb-2 movie-img"
						src={`https://image.tmdb.org/t/p/w300/${posterPath}`}
					/>
				</Card>
				<p className="movie-text mt-2">{movie.title}</p>
				<span className="subheading text-muted text-light">
					{release_date}
				</span>
			</Link>
		</>
	);
};
// <p>{movie.title}</p>
// <Image
// 	fluid
// 	rounded
// 	src={`https://image.tmdb.org/t/p/w200/${posterPath}`}
// />

export default MovieCard;
