import { useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import useSlice from '../hooks/useSlice'
import { useNavigate } from 'react-router-dom'
import ActorCard from './ActorCard'
import { AiFillStar } from 'react-icons/ai '
import useLocalStorage from '../hooks/useLocalStorage'

const MovieDetails = ({ movie }) => {
	const navigate = useNavigate()

	const release_date = useSlice(movie.release_date)
	const hours = Math.floor(movie.runtime / 60)
	const minutes = movie.runtime % 60
	const score = Math.round(movie.vote_average * 10) / 10
	const [storedValue, setNewValue] = useLocalStorage('visited-movies', [
		movie,
	])

	useEffect(() => {
		if (movie) {
			console.log(movie)
			if (storedValue) {
				console.log('storedValue', storedValue)
				const indexInArray = storedValue.findIndex(
					storedMovie => storedMovie.id === movie.id
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
		<>
			<Container>
				<div className='d-flex justify-content-between w-100 align-items-center'>
					<div>
						<h1>{movie.title}</h1>
						<span className='text-muted pe-2'>{release_date}</span>
						<span className='text-muted'>
							{hours}h {minutes}m
						</span>
					</div>
					<div className='votes d-flex align-items-center'>
						<span className='me-1 star'>
							<AiFillStar />
						</span>
						<h3>
							<strong>{score}</strong>
						</h3>
					</div>
				</div>

				<div className='d-flex mt-2'>
					<img
						className='fluid w-25'
						src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
					></img>
					<img
						className='fluid w-75'
						src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
					></img>
				</div>
				<div className='d-flex justify-content-between mt-3'>
					<div>
						{movie.genres.map((genre, i) => (
							<Badge
								key={i}
								as={Link}
								to={`/genres/${genre.name}/${genre.id}`}
								className='p-2 m-1'
								bg='warning'
								text='dark'
							>
								{genre.name}
							</Badge>
						))}
					</div>
					<Button
						className='mt-1'
						variant='secondary'
						onClick={() => navigate(-1)}
					>
						&laquo; Back
					</Button>
				</div>

				<h4 className='mt-5 mb-3'>{movie.tagline}</h4>
				<p className='mb-5 w-75'>{movie.overview}</p>

				<div className='pt-5'>
					<p className='text-warning'>Cast (in credits order)</p>
					<Row>
						{movie.credits.cast.map(actor => (
							<Col
								lg={2}
								md={4}
								sm={6}
								key={actor.id}
								className='pb-5'
							>
								<ActorCard actor={actor} />
							</Col>
						))}
					</Row>
				</div>
			</Container>
		</>
	)
}

export default MovieDetails
