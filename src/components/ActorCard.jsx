import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import useSlice from "../hooks/useSlice";
import LoadingSpinner from "./LoadingSpinner";

const ActorCard = ({ actor }) => {
	const [poster, setPoster] = useState("");
	// const [release_date, setRelease_date] = useState("");
	const [loading, setLoading] = useState("true");
	useEffect(() => {
		setTimeout(() => {
			if (!actor.profile_path) {
				setPoster(
					"https://via.placeholder.com/300x450?text=Poster+Not+Found"
				);
			} else {
				setPoster(
					`https://image.tmdb.org/t/p/w300${actor.profile_path}`
				);
			}
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<>
			{loading && <LoadingSpinner />}
			{poster && (
				<Link to={`/actor/${actor.id}`}>
					<Card border="dark" className="bg-dark movie-card">
						<img className="mb-2 movie-img" src={`${poster}`} />
					</Card>
					<p className="movie-text mt-2">{actor.name}</p>
					<p className="movie-text text-muted">
						as {actor.character}
					</p>
				</Link>
			)}
		</>
	);
};

export default ActorCard;
