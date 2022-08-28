import React from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import useMoviesByGenre from "../hooks/useMoviesByGenre";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const BrowseGenrePage = () => {
	const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
	const page = searchParams.get("page")
		? Number(searchParams.get("page"))
		: null;
	const { id, name } = useParams();
	const { data: movies, isLoading } = useMoviesByGenre(id, page);
	const navigate = useNavigate();

	return (
		<Container fluid="lg" className="py-3">
			{isLoading && <LoadingSpinner />}
			{movies && (
				<div className="grey-container">
					<div className="d-flex justify-content-between w-100 align-items-center">
						<h2 className="mb-5">{name}</h2>
						<Button
							variant="secondary"
							onClick={() => navigate(-1)}
						>
							&laquo; Back
						</Button>
					</div>
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
							setSearchParams({ page: page - 1 })
						}
						onNextPage={() => setSearchParams({ page: page + 1 })}
					/>
				</div>
			)}
		</Container>
	);
};

export default BrowseGenrePage;
