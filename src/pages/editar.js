import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { EditarForm } from '../components/EditarForm'

function Editar() {
    return (
        <Container className="mt-5">
        <Row>
            <Col>
            <h3 className="text-center">Editar</h3>
                <Card body>
                    <div>
                    <EditarForm/> 
                    </div>
                </Card>
            </Col>
        </Row>
    </Container>
    )
}

export {Editar}
