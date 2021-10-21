import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


function LoginForm({errores,enviarCallback}) {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const enviarFormulario = (e)=> {
        e.preventDefault();
        enviarCallback({userName,password});

    }

    return (
        <Form onSubmit={enviarFormulario}>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Usuario</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Ingrese su usuario"
                    value={userName}
                    onChange={e=>setUserName(e.target.value)}
                    isInvalid={errores.userName} 
                />  
                <Form.Control.Feedback type="invalid">
                    {errores.userName}
                </Form.Control.Feedback> 
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Ingrese su Contraseña" 
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    isInvalid={errores.password} 
                />
                <Form.Control.Feedback type="invalid">
                    {errores.password}
                </Form.Control.Feedback>
            </Form.Group>
            
            <Button className="mb-3 mx-auto d-block" variant="primary" type="submit" as={NavLink} to={'/formulario'}>
                Iniciar sesión
            </Button>     
        </Form>
    )
}

export {LoginForm}
