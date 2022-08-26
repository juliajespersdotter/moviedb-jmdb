import React from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
					<h2 className="ms-4 mt-5 mb-3">Starred in</h2>
					<ListGroup as="ol">
						{actor.movie_credits.cast.map((movie) => (
							<ListGroup.Item
								variant="dark"
								key={movie.id}
								as="li"
								className="d-flex justify-content-between align-items-start"
							>
								<div className="ms-2 me-auto">
									<div className="fw-bold">{movie.title}</div>
									As {movie.character}
								</div>
								<Button
									variant="danger"
									as={Link}
									to={`/movie/${movie.id}`}
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

export default ActorDetails;
