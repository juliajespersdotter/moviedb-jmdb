import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MovieCard from './MovieCard'

const VisitedMovies = () => {
	const movies = JSON.parse(localStorage.getItem('visited-movies'))
	console.log(movies)

	return (
		<>
			{movies && (
				<div className='grey-container'>
					<Row>
						<h2 className='mb-5'>Recently Visited Movies</h2>
						{movies.map(movie => (
							<Col
								lg={2}
								md={3}
								sm={10}
								key={movie.id}
								className='pb-5'
							>
								<MovieCard movie={movie} />
							</Col>
						))}
					</Row>
				</div>
			)}
		</>
	)
}

export default VisitedMovies
