import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<Navbar className='navbar' expand='md'>
			<Container>
				<Navbar.Brand as={Link} to='/'>
					JMDB
				</Navbar.Brand>

				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav activeKey='/'>
						<Nav.Item>
							<Nav.Link as={NavLink} end to='/popular'>
								Popular
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link as={NavLink} end to='/trending'>
								Trending
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link as={NavLink} end to='/nowplaying'>
								Now Playing
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link as={NavLink} end to='/toprated'>
								Top Rated
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link as={NavLink} end to='/genres'>
								Genres
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link as={NavLink} end to='/search'>
								Search
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
