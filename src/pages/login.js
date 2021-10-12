import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {LoginForm} from '../components/LoginForm'

function Login() {
    return (
        <Container className="mt-3">
        <Row>
            <Col sm="12" md={{span:8,offset:2}} lg={{span:6, offset:3}}>
            
                <Card body>
                    <h3>Iniciar sesión</h3>
                    <div>
                    <LoginForm/> 
                    </div>
                    <div className="mt-3">
                        <Link to={'/registro'}>¿No tienes una cuenta? Registrate aqui</Link>
                    </div>
                </Card>
            </Col>
        </Row>
    </Container>
    )
}

export {Login}
