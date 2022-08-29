import React, { useEffect } from "react";
import usePopular from "../hooks/usePopular";
import { Container, Button } from "react-bootstrap";
import LoadingSpinner from "../components/LoadingSpinner";
import Pagination from "../components/Pagination";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieCard from "../components/MovieCard";
import { useNavigate, useSearchParams } from "react-router-dom";

const PopularPage = () => {
	const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
	const page = searchParams.get("page")
		? Number(searchParams.get("page"))
		: null;
	const navigate = useNavigate();
	const { data: movies, isLoading } = usePopular(page);

	useEffect(() => {
		// scroll to top on page load
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}, [movies]);
	return (
		<Container fluid="lg" className="py-3">
			{isLoading && <LoadingSpinner />}
			{movies && (
				<div className="grey-container">
					<div className="d-flex justify-content-between w-100 align-items-center">
						<h2 className="mb-5">Popular Movies Right Now</h2>
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

export default PopularPage;
