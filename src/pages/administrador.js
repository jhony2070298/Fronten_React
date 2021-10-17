import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { AdminForm } from '../components/AdminForm'

function AdminF() {
    return (
        <Container className="mt-4">
            <Row>
            <h3>Usuarios Registrados</h3>
            <br/>
                <Col sm="12" md={{span:8, offset:2}} lg={{span:6, offset:3}} >
                    <Card body>
                        <AdminForm/>
                    
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export {AdminF}