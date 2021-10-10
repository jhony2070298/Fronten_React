import React from 'react'
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap'

function Navegacion() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={NavLink} to={'/'}>Linguaskill  Cambridge</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav >
                            <React.Fragment>
                                <Nav.Link as={NavLink} to={'/'}>Registrarse</Nav.Link>
                                <Nav.Link as={NavLink} to={'/'}>Iniciar sesión</Nav.Link>
                                <Nav.Link as={NavLink} to={'/'}>Admin</Nav.Link>
                            </React.Fragment>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item>Editar</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>Cerrar sesión</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    )
}

export {Navegacion}
