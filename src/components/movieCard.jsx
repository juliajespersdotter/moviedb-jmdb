import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
	let posterPath = movie.poster_path;
	return (
		<>
			<Link to={`/movie/${movie.id}`}>
				<Card>
					<Card.Img
						variant="top"
						src={`https://image.tmdb.org/t/p/w300/${posterPath}`}
					/>
					<Card.Body>
						<Card.Text>{movie.title}</Card.Text>
						<Card.Subtitle>{movie.release_date}</Card.Subtitle>
					</Card.Body>
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
