import React, { useEffect, useState } from 'react'
import { Alert, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import {LoginForm} from '../components/LoginForm'
import ImgUser from '../img/user-login_1.png'
import '../styles/LoginForm.css';
import validator from 'validator';
import { isObjetoVacio } from '../connection/helpers/isObjetoVacio';
import { useDispatch, useSelector } from 'react-redux';
import { loginUsuario } from '../connection/autenticacionAcciones';

function Login() {

    const [errores, setErrores] = useState({});
    const dispatch = useDispatch();
    const conectado = useSelector(state=>state.auth.conectado);
    const history = useHistory();

    useEffect(()=>{
        if(conectado){
            history.push("/formulario")
        }
    })

    const login= ({userName,password}) =>{
        const errores={}
        setErrores(errores)

        if(validator.isEmpty(userName)){
            errores.userName = "El usuario no puede estar vacio"
        }

        if(validator.isEmpty(password)){
            errores.password = "La contraseña no puede estar vacia"
        }

        if(!isObjetoVacio(errores)){
            setErrores(errores);
            return;
        }

        
        dispatch(loginUsuario({userName,password}))
        .then(response =>{

        })
        .catch(error => {
            setErrores({autenticacion:"Usuario o contraseña incorrectos"})
        })

    }


    return (
        <Container className="mt-3">
            <Row>
                <Col sm="12" md={{span:8,offset:2}} lg={{span:6, offset:3}}>
                    <Card body>
                        {errores.autenticacion && <Alert variant="danger">{errores.autenticacion}</Alert>}
                        <h3 className="text-center">Iniciar sesión</h3>
                        <div className="mt-3 mi-imagen-usuario">
                            <Image className="mx-auto d-block" src={ImgUser} fluid/>
                        </div>
                        <div>
                        <LoginForm errores={errores} enviarCallback={login}></LoginForm> 
                        </div>
                        <div className="mt-3 text-center">
                            <Link to={'/registro'}>¿No tienes una cuenta? Registrate aqui</Link>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export {Login}
