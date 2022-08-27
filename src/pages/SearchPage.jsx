import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useSearchParams } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import LoadingSpinner from "../components/LoadingSpinner";
import Pagination from "../components/Pagination";
import MovieCard from "../components/MovieCard";
import Search from "../components/Search";

const PeoplePage = () => {
	const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
	const page = searchParams.get("page")
		? Number(searchParams.get("page"))
		: null;
	const query = searchParams.get("query") ?? "";

	const {
		data: movies,
		error,
		isError,
		isLoading,
		isSuccess,
	} = useSearch(query, page);
	console.log(movies);

	const handleSearch = async (query) => {
		setSearchParams({ query, page: 1 });
	};

	return (
		<Container className="py-3 grey-container">
			<h1 className="mb-3">Search Movies ...</h1>

			<div className="my-4">
				<Search onSearch={handleSearch} />
			</div>

			{isLoading && <LoadingSpinner />}

			<div>
				{isSuccess && movies.results && (
					<>
						{query && (
							<p>Showing search results for '{query}'...</p>
						)}
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
								setSearchParams({
									query: query,
									page: page - 1,
								})
							}
							onNextPage={() =>
								setSearchParams({
									query: query,
									page: page + 1,
								})
							}
						/>
					</>
				)}
			</div>
		</Container>
	);
};

export default PeoplePage;
