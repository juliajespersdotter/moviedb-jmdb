import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useMoviesByGenre from "../hooks/useMoviesByGenre";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

const BrowseGenrePage = () => {
	const [page, setPage] = useState(1);
	const { id, name } = useParams();
	const { data: movies } = useMoviesByGenre(id, page);
	console.log(movies);

	return (
		<Container fluid="lg" className="py-3">
			{movies && (
				<div className="grey-container">
					<h2 className="mb-5">{name}</h2>
					<Row>
						{movies.results.map((movie) => (
							<Col
								lg={3}
								md={4}
								sm={10}
								key={movie.id}
								className="pb-5"
							>
								<MovieCard movie={movie} />
							</Col>
						))}
					</Row>

					<Pagination
						page={page}
						numPages={Math.ceil(movies.total_pages)}
						hasPreviousPage={movies.page !== 1}
						hasNextPage={movies.page !== movies.total_pages}
						onPreviousPage={() =>
							setPage((currentPage) => currentPage - 1)
						}
						onNextPage={() =>
							setPage((currentPage) => currentPage + 1)
						}
					/>
				</div>
			)}
		</Container>
	);
};

export default BrowseGenrePage;
