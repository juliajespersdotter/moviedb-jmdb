import React from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import useSlice from "../hooks/useSlice";
import { useNavigate } from "react-router-dom";

const MovieDetails = ({ movie }) => {
	const navigate = useNavigate();

	const release_date = useSlice(movie.release_date);
	const hours = Math.floor(movie.runtime / 60);
	const minutes = movie.runtime % 60;
	const score = Math.floor(movie.vote_average);

	return (
		<>
			<Container>
				<div className="d-flex justify-content-between w-100 align-items-center">
					<div>
						<h1>{movie.title}</h1>
						<span className="text-muted pe-2">{release_date}</span>
						<span className="text-muted">
							{hours}h {minutes}m
						</span>
					</div>
					<div className="votes d-flex align-items-center">
						<span className="m-2">⭐️</span>
						<h3>
							<strong>{score}</strong>
						</h3>
						<h4 className="text-muted">/10</h4>
					</div>
				</div>

				<div className="d-flex mt-2">
					<img
						className="fluid w-25"
						src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
					></img>
					<img
						className="fluid w-75"
						src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
					></img>
				</div>
				<div className="d-flex justify-content-between">
					<div>
						{movie.genres.map((genre, i) => (
							<Badge key={i} className="p-2 m-1" bg="dark">
								{genre.name}
							</Badge>
						))}
					</div>
					<Button
						className="mt-1"
						variant="secondary"
						onClick={() => navigate(-1)}
					>
						&laquo; Back
					</Button>
				</div>

				<h4 className="mt-5 mb-3">{movie.tagline}</h4>
				<p className="mb-5 w-75">{movie.overview}</p>

				<div className="pt-5">
					<p className="ms-4text-muted">Cast (in credits order)</p>
					<ListGroup as="ol">
						{movie.credits.cast.map((actor, i) => (
							<ListGroup.Item
								key={i}
								as="li"
								className="d-flex justify-content-between align-items-start"
							>
								<div className="ms-2 me-auto">
									<div className="fw-bold">{actor.name}</div>
									{actor.character}
								</div>
								<Button
									variant="dark"
									as={Link}
									to={`/actor/${actor.id}`}
								>
									Read more
								</Button>
							</ListGroup.Item>
						))}
					</ListGroup>
				</div>
			</Container>
		</>
	);
};

export default MovieDetails;
