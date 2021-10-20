import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


function EditarForm() {
    return (
        <Form>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="documento">
                        <Form.Label>Documento</Form.Label>
                        <Form.Control
                        type="text" 
                        value="322345">
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="nombres">
                        <Form.Label>Nombres</Form.Label>
                        <Form.Control
                        type="text" 
                        value="Julieta">
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="apellidos">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control
                        type="text" 
                        value="Gómez">
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="ciudad">
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control
                        type="text" 
                        value="Medellin">
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="fecha">
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control
                        type="date" 
                        value="12/10/2021">
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="estado">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control  as="select">
                            <option value="1">Aceptado</option>
                            <option value="2">Rechazado</option>
                            <option value="3">Pendiente</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Row className="mb-3 justify-content-center">
                    <Col xs="auto">
                        <Button variant="danger" type="submit" as={NavLink} to={'/administrador'}>
                        Cancelar
                        </Button> 
                    </Col>
                    <Col xs="auto">
                        <Button  variant="primary" type="submit" as={NavLink} to={'/administrador'}>
                        Guardar cambios
                        </Button> 
                    </Col>
                </Row>
            </Row>
        </Form>
    )
}

export {EditarForm}
