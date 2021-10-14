import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function RegisterForm() {
    return (
        <Form >
            <Form.Group className="mb-2" controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                type="text"
                placeholder="Ingrese su nombre"
                />
                <Form.Control.Feedback type="invalid">
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-2" controlId="apelido">
                <Form.Label>Apellido</Form.Label>
                <Form.Control 
                type="text"
                placeholder="Ingrese su apellido"
                />
                <Form.Control.Feedback type="invalid">
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-2" controlId="correo">
                <Form.Label>Correo</Form.Label>
                <Form.Control 
                type="email"
                placeholder="Ingrese su correo"
                />
                <Form.Control.Feedback type="invalid">
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-2" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Ingrese su contraseña" 
                />
                <Form.Control.Feedback type="invalid">  
                </Form.Control.Feedback>
            </Form.Group>
           
           <div className="mt-3 text-center">
                <Button type="submit" variant="danger"  className="mx-2" as={NavLink} to={'/'}>
                    Regresar
                </Button>
                <Button type="submit" variant="primary"  className="mx-2">
                    Crear usuario
                </Button>    
            </div>
         
        </Form>
    )
}

export   {RegisterForm}
