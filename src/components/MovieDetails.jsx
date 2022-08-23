import React from "react";
import { Container } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import useSlice from "../hooks/useSlice";

const MovieDetails = ({ movie }) => {
	const release_date = useSlice(movie.release_date);
	const hours = Math.floor(movie.runtime / 60);
	const minutes = movie.runtime % 60;

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
						<h3>
							<strong>{movie.vote_average}</strong>
						</h3>
						<h4 className="text-muted">/10</h4>
					</div>
				</div>

				<div className="d-flex">
					<img
						className="fluid w-25"
						src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
					></img>
					<img
						className="fluid w-75"
						src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
					></img>
				</div>
				{movie.genres.map((genre, i) => (
					<Badge key={i} className="p-2 m-1" bg="dark">
						{genre.name}
					</Badge>
				))}

				<h4>{movie.tagline}</h4>
				<p>{movie.overview}</p>
			</Container>
		</>
	);
};

export default MovieDetails;
