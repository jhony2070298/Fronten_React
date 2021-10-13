import React from 'react'
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import '../styles/index.css'

function Navegacion() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="align-items-end">
                <Container>
                    <Navbar.Brand as={NavLink} to={'/'}>Linguaskill  Cambridge</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav>
                            <React.Fragment>
                                <Nav.Link as={NavLink} to={'/registro'}>Registrarse</Nav.Link>
                                <Nav.Link as={NavLink} to={'/login'}>Iniciar sesión</Nav.Link>
                                <Nav.Link as={NavLink} to={'/administrador'}>Admin</Nav.Link>
                            </React.Fragment>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item as={NavLink} to={'/editar'}>Editar</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={NavLink} to={'/'}>Cerrar sesión</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    )
}

export {Navegacion}
