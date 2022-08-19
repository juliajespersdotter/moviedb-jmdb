import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				{/* <Navbar.Brand as={Link} to="/">
					React Template
				</Navbar.Brand> */}

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					{/* <Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/">Home</Nav.Link>
					</Nav> */}
					<Nav activeKey="/">
						<Nav.Item>
							<Nav.Link as={NavLink} end to="/">
								Home
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link as={NavLink} end to="/movies">
								Movies
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link as={NavLink} end to="/series">
								TV Series
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link as={NavLink} end to="/genres">
								Genres
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
