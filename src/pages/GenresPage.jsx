import React from "react";
import Container from "react-bootstrap/Container";
import useGenres from "../hooks/useGenres";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const GenresPage = () => {
	const { data: genres } = useGenres();
	console.log(genres);
	return (
		<Container fluid="lg" className="py-3">
			{genres && (
				<div className="grey-container">
					<h2 className="mb-5">Genres</h2>
					<Row>
						{genres.genres.map((genre) => (
							<Col
								lg={3}
								md={4}
								sm={10}
								key={genre.id}
								className="pb-5"
							>
								<Link to={`/genres/${genre.name}/${genre.id}`}>
									{genre.name}
								</Link>
							</Col>
						))}
					</Row>
				</div>
			)}
		</Container>
	);
};

export default GenresPage;
