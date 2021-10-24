import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function RegisterForm({errores,enviarCallback}) {

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const enviarFormulario = (e) => {
        e.preventDefault();
        enviarCallback({userName, password, nombre, correo});
    }
    return (
        <Form onSubmit = {enviarFormulario}>
            <Form.Group className="mb-2" controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                type="text"
                placeholder="Ingrese su nombre"
                value = {nombre}
                onChange = {e => setNombre(e.target.value)}
                isInvalid = {errores.nombre}
                />
                <Form.Control.Feedback type="invalid">
                    {errores.nombre}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-2" controlId="correo">
                <Form.Label>Correo</Form.Label>
                <Form.Control 
                type="email"
                placeholder="Ingrese su correo" 
                value = {correo}
                onChange = {e => setCorreo(e.target.value)}
                isInvalid = {errores.correo}
                />
                <Form.Control.Feedback type="invalid">
                    {errores.correo}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-2" controlId="userName">
                <Form.Label>Usuario</Form.Label>
                <Form.Control 
                type="text"
                placeholder="Ingrese su usuario"
                value = {userName}
                onChange = {e => setUserName(e.target.value)}
                isInvalid = {errores.userName}
                />
                <Form.Control.Feedback type="invalid">
                    {errores.userName}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-2" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Ingrese su contraseña" 
                value = {password}
                onChange = {e => setPassword(e.target.value)}
                isInvalid = {errores.password}
                />
                <Form.Control.Feedback type="invalid">  
                    {errores.password}
                </Form.Control.Feedback>
            </Form.Group>
           
           <div className="mt-3 text-center">
                <Button type="submit" variant="danger"  className="mx-2"  as={NavLink} to={'/'}>
                    Regresar
                </Button>
                <Button type="submit" variant="primary"  className="mx-2"  >
                    Crear usuario
                </Button>    
            </div>
         
        </Form>
    )
}

export   {RegisterForm}
