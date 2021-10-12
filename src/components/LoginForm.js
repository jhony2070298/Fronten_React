import React from 'react'
import { Button, Form } from 'react-bootstrap'

function LoginForm() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Usuario</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Ingrese su usuario" 
                />  
                <Form.Control.Feedback type="invalid">
                </Form.Control.Feedback> 
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Ingrese su Contraseña" 
                />
                <Form.Control.Feedback type="invalid">
                </Form.Control.Feedback>
            </Form.Group>
            
            <Button className="mb-3" variant="primary" type="submit">
                Iniciar sesión
            </Button>
        </Form>
    )
}

export {LoginForm}
