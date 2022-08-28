import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import useSlice from "../hooks/useSlice";
import LoadingSpinner from "./LoadingSpinner";

const MovieCard = ({ movie }) => {
	const [poster, setPoster] = useState("");
	const [release_date, setRelease_date] = useState("");
	const [loading, setLoading] = useState("true");
	useEffect(() => {
		setTimeout(() => {
			if (!movie.poster_path) {
				setPoster(
					"https://via.placeholder.com/300x450?text=Poster+Not+Found"
				);
			} else {
				setPoster(
					`https://image.tmdb.org/t/p/w300${movie.poster_path}`
				);
			}
			const release = useSlice(movie.release_date);
			setRelease_date(release);
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<>
			{loading && <LoadingSpinner />}
			{poster && (
				<Link to={`/movie/${movie.id}`}>
					<Card border="dark" className="bg-dark movie-card">
						<img className="mb-2 movie-img" src={`${poster}`} />
					</Card>
					<p className="movie-text mt-2">{movie.title}</p>
					<span className="subheading text-muted text-light">
						{release_date}
					</span>
				</Link>
			)}
		</>
	);
};

export default MovieCard;
