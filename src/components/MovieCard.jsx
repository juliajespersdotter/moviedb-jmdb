import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import useSlice from '../hooks/useSlice'
import LoadingSpinner from './LoadingSpinner'
import { AiFillStar } from 'react-icons/ai '

const MovieCard = ({ movie }) => {
	const [poster, setPoster] = useState('')
	const [release_date, setRelease_date] = useState('')
	const [loading, setLoading] = useState('true')
	const score = Math.round(movie.vote_average * 10) / 10

	useEffect(() => {
		setTimeout(() => {
			// if movie.poster_path is null in response, set placeholder img as poster
			if (!movie.poster_path) {
				setPoster(
					'https://via.placeholder.com/300x450?text=Poster+Not+Found'
				)
			} else {
				setPoster(`https://image.tmdb.org/t/p/w300${movie.poster_path}`)
			}
			// only show year of release not exact date
			const release = useSlice(movie.release_date)
			setRelease_date(release)
			setLoading(false)
		}, 1000)
	}, [])

	return (
		<>
			{loading && <LoadingSpinner />}
			{poster && (
				<Link to={`/movie/${movie.id}`}>
					<Card border='dark' className='bg-dark movie-card'>
						<img className='mb-2 movie-img' src={`${poster}`} />
					</Card>
					<div className='score d-flex align-items-center ms-1 mt-2'>
						<span className='me-1 smallstar'>
							<AiFillStar />
						</span>
						<p className='score-text'>{score}</p>
					</div>
					<p className='m-0 mb-1 ms-1 movie-text'>{movie.title}</p>
					<span className='subheading text-muted text-light ms-1'>
						{release_date}
					</span>
				</Link>
			)}
		</>
	)
}

export default MovieCard
