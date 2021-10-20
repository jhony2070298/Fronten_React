import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { AdminForm } from '../components/AdminForm'

function Administrador() {
    return (
        <Container className="mt-4">
            <Row>
            <h3>Usuarios Registrados</h3>
            <br/>
                <Col>
                    <Card body>
                        <AdminForm/>
                    
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export {Administrador}