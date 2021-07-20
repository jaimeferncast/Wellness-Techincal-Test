import { Link, NavLink } from 'react-router-dom'

import { Navbar, Nav } from 'react-bootstrap'

const Navigation = () => {
    return (
        <Navbar expand="lg" fixed="top">
            <Link to="/">
                <Navbar.Brand>Prueba Técnica Wellness</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavLink exact to="/">
                        <Nav.Link as="span">Home</Nav.Link>
                    </NavLink>
                    <NavLink exact to="/consumos">
                        <Nav.Link as="span">Lista de consumos por hora</Nav.Link>
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation