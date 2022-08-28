import React from "react";
import { Button, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";

const ActorDetails = ({ actor }) => {
	const navigate = useNavigate();

	return (
		<>
			<Container className="grey-container">
				<div className="d-flex justify-content-between w-100 align-items-center">
					<div>
						<h1>{actor.name}</h1>
						<p className="text-muted pe-2">
							{actor.known_for_department}
						</p>
						<span className="text-muted mb-4">
							{actor.place_of_birth}
						</span>
					</div>
					<Button variant="secondary" onClick={() => navigate(-1)}>
						&laquo; Back
					</Button>
				</div>

				<div className="d-flex mt-2 justify-content-between align-items-start">
					<img
						className="fluid w-25"
						src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
					></img>
					<p className="mb-5 w-75 ms-5">{actor.biography}</p>
				</div>

				<div className="pt-5">
					<h2 className="mt-5 mb-3">Starred in</h2>
					<Row>
						{actor.movie_credits.cast.map((movie, i) => (
							<Col lg={2} md={4} sm={10} key={i} className="pb-5">
								<MovieCard movie={movie} />
								{movie.character && (
									<p className="movie-text fw-bold mt-2">
										as {movie.character}
									</p>
								)}
							</Col>
						))}
					</Row>
				</div>
			</Container>
		</>
	);
};

export default ActorDetails;
