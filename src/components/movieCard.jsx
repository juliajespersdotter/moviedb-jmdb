import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import useSlice from "../hooks/useSlice";

const MovieCard = ({ movie }) => {
	let posterPath = movie.poster_path;
	const release_date = useSlice(movie.release_date);

	return (
		<>
			<Link to={`/movie/${movie.id}`}>
				<Card border="light" text="dark" className="movieCard">
					<img
						variant="top"
						className="mb-2"
						src={`https://image.tmdb.org/t/p/w300/${posterPath}`}
					/>
					<Card.Body className="p-0">
						<Card.Text className="mb-3 p-1">
							{movie.title}
						</Card.Text>
						{/* <Card.Subtitle className="mb-2 text-muted">
							{movie.release_date}
						</Card.Subtitle> */}
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">{release_date}</small>
					</Card.Footer>
				</Card>
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
