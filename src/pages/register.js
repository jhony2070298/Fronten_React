import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { RegisterForm } from '../components/RegisterForm'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import validator from 'validator'
import { isObjetoVacio } from '../connection/helpers/isObjetoVacio';
import { registroUsuario, loginUsuario } from '../connection/autenticacionAcciones';


function Register() {

    const [errores, setErrores]= useState({});
    const dispatch = useDispatch();
    const conectado = useSelector(state => state.auth.conectado);
    const history = useHistory();

    useEffect(() => {
        if(conectado) {
            history.push("/");
        }
    });

    const register =({userName, password, nombre, correo}) => {
        const errores={};
        setErrores(errores);

        if(validator.isEmpty(nombre)){
            errores.nombre = "El nombre no puede ser vacio";
        }

        if(!validator.isEmail(correo)){
            errores.correo = "El correo electronico es invalido";
        }
        
        if(validator.isEmpty(userName)){
            errores.userName = "El usuario no puede ser vacio";
        }

        if(!validator.isLength(password, {min: 8, max: 30})){
            errores.password = "La contraseña debe tener entre 8 y 30 caracteres";
        }

        if(!isObjetoVacio(errores)){
            setErrores(errores);
            return;
        }

        dispatch(registroUsuario({userName, password, nombre, correo}))
        .then(response=>{
            dispatch(loginUsuario({userName, password}));
        })
        .catch(err=>{
            // setErrores({ registroError: err.response.data.message });
            console.log("ocurrió un error")
        });
    }

    return (
        <Container className="mt-4">
            <Row>
            <h3>Registro de usuario</h3>
            <br/><br/><br/><br/>
                <Col sm="12" md={{span:8, offset:2}} lg={{span:6, offset:3}} >
                    <Card body>
                        <RegisterForm errores={errores} enviarCallback={register}/>             
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
