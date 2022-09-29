import React, { useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import LoadingSpinner from '../components/LoadingSpinner'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MovieCard from '../components/MovieCard'
import { useNavigate, useSearchParams } from 'react-router-dom'
import useTrending from '../hooks/useTrending'
import { Form } from 'react-bootstrap'

const TrendingPage = () => {
	const [searchParams, setSearchParams] = useSearchParams({
		timewindow: 'day',
	})
	const timewindow = searchParams.get('timewindow')
	const navigate = useNavigate()

	const { data: movies, isLoading } = useTrending(timewindow)

	useEffect(() => {
		// scroll to top on page load
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
	}, [movies])
	return (
		<Container fluid='lg' className='py-3'>
			{isLoading && <LoadingSpinner />}
			{movies && (
				<div className='grey-container'>
					<div className='d-flex justify-content-between w-100 align-items-center'>
						<h2 className='mb-5'>Trending Movies Right Now</h2>
						<Button
							variant='secondary'
							onClick={() => navigate(-1)}
						>
							&laquo; Back
						</Button>
					</div>
					<Form
						className='w-25 mb-3'
						onChange={e => {
							setSearchParams({ timewindow: e.target.value })
						}}
					>
						<Form.Select>
							<option>Select timewindow</option>
							<option value='day'>day</option>
							<option value='week'>week</option>
						</Form.Select>
					</Form>
					<Row>
						{movies.results.map(movie => (
							<Col
								lg={3}
								md={4}
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
		</Container>
	)
}

export default TrendingPage
