import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {LoginForm} from '../components/LoginForm'
import ImgUser from '../img/user-login_1.png'
import '../styles/LoginForm.css';

function Login() {
    return (
        <Container className="mt-3">
            <Row>
                <Col sm="12" md={{span:8,offset:2}} lg={{span:6, offset:3}}>
                    <Card body>
                        <h3 className="text-center">Iniciar sesión</h3>
                        <div className="mt-3 mi-imagen-usuario">
                            <Image className="mx-auto d-block" src={ImgUser} fluid/>
                        </div>
                        <div>
                        <LoginForm/> 
                        </div>
                        <div className="mt-3 text-center">
                            <Link to={'/registro'}>¿No tienes una cuenta? Registrate aqui</Link>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export {Login}
