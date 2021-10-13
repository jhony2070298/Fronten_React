import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { RegisterForm } from '../components/RegisterForm'

function Register() {
    return (
        <Container className="mt-4">
            <Row>
            <h3>Registro de usuario</h3>
            <br/><br/><br/><br/>
                <Col sm="12" md={{span:8, offset:2}} lg={{span:6, offset:3}} >
                    <Card body>
                        <RegisterForm/>
                        <div className="mt-3 text-center">
                            <Link to={'/login'}>¿Ya tienes una cuenta? Iniciar sesion aqui</Link>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export {Register}
