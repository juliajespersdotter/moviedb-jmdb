import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const MovieCarousel = ({ movies }) => {
	return (
		<>
			{movies && (
				<Carousel>
					{movies.map((movie) => (
						<Carousel.Item
							key={movie.id}
							as={Link}
							to={`/movie/${movie.id}`}
						>
							<div className="w-100 mt-5 m-auto">
								<img
									className="w-100 d-block"
									src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
								/>
							</div>
						</Carousel.Item>
					))}
				</Carousel>
			)}
		</>
	);
};

export default MovieCarousel;
