import { Link, NavLink } from 'react-router-dom'

import { Navbar, Nav } from 'react-bootstrap'

import logo from "./my-icon.png"

const Navigation = (props) => {
    return (
        <Navbar expand="lg" fixed="top">
            <Link to="/">
                <img src={logo} alt="logo">
                </img>
                <Navbar.Brand>
                    aime's Playground</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavLink exact to="/">
                        <Nav.Link as="span">Home</Nav.Link>
                    </NavLink>
                    <NavLink exact to="/teléfonos">
                        <Nav.Link as="span">Phone list</Nav.Link>
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation