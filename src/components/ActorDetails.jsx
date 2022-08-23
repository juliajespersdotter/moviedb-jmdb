import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ActorDetails = ({ actor }) => {
	const navigate = useNavigate();

	return (
		<>
			<Container>
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
			</Container>
		</>
	);
};

export default ActorDetails;
