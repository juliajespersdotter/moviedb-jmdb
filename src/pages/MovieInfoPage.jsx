import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import useMovie from '../hooks/useMovie'
import MovieDetails from '../components/MovieDetails'
import LoadingSpinner from '../components/LoadingSpinner'
import useMovieRecs from '../hooks/useMovieRecs'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'
import MovieCard from '../components/MovieCard'
import useLocalStorage from '../hooks/useLocalStorage'

const MovieInfoPage = () => {
	const { id } = useParams()
	const { data: movie, isLoading } = useMovie(id)
	const { data: movieRecs } = useMovieRecs(id)
	const [storedValue, setNewValue] = useLocalStorage('visited-movies', [
		movie,
	])

	useEffect(() => {
		if (movie) {
			if (storedValue.length) {
				const indexInArray = storedValue.findIndex(
					movieArray => movieArray.id === movie.id
				)
				if (indexInArray >= 0) {
					storedValue.splice(indexInArray, 1)
				}

				if (storedValue.length === 10) {
					storedValue.pop()
				}
				storedValue.unshift(movie)
				setNewValue(storedValue)
			}
		}
	}, [movie])

	return (
		<Container className='grey-container'>
			{isLoading && <LoadingSpinner />}
			{movie && <MovieDetails movie={movie} />}

			<h2 className='mt-5 pb-3'>You might also like...</h2>
			{movieRecs && (
				<Row>
					{movieRecs.results.map(movie => (
						<Col
							lg={2}
							md={4}
							sm={10}
							key={movie.id}
							className='pb-5'
						>
							<MovieCard movie={movie} />
						</Col>
					))}
				</Row>
			)}
		</Container>
	)
}

export default MovieInfoPage
