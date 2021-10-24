import React from 'react'
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom'
import { cerrarSesion } from '../connection/autenticacionAcciones';
import '../styles/index.css'

function Navegacion() {

    const conectado = useSelector(state => state.auth.conectado);
    const usuario = useSelector(state => state.auth.usuario);
    const dispatch = useDispatch();

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="align-items-end">
                <Container>
                    <Navbar.Brand as={NavLink} to={'/'}>Linguaskill  Cambridge</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        {conectado &&
                        <Nav.Link as={NavLink} to={'/formulario'}>Formulario</Nav.Link>
                        }
                    </Nav>
                        <Nav>
                            {!conectado ? (
                                <React.Fragment>
                                    <Nav.Link as={NavLink} to={'/registro'}>Registrarse</Nav.Link>
                                    <Nav.Link as={NavLink} to={'/login'}>Iniciar sesión</Nav.Link>
                                    
                                </React.Fragment>
                            ):(
                                
                                <NavDropdown title={usuario.sub} id="basic-nav-dropdown">
                                    {/* <NavDropdown.Item as={NavLink} to={'/editar'}>Editar</NavDropdown.Item> */}
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item onClick={()=>dispatch(cerrarSesion())}>Cerrar sesión</NavDropdown.Item>
                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    )
}

export {Navegacion}
