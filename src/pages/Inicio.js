import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Email from '../img/email.png'
import Phone from '../img/llamada-telefonica.png'
import Cambridge from'../img/Linguaskill Authorised 480.jpeg'
import '../styles/index.css'


function Inicio() {
    return (
        <Container className="mt-3">
            <Row>
                <div className="mi-informacion">
                    <h3><p>
                        <Image src={Email} alt="Email" width="20" height="20" fluid/>
                        info@ihbogota.com
                        <Image src={Phone} alt="Phone" width="19" height="19" fluid/>
                        +57 1 744 1993
                    </p></h3>
                </div>
                <h2 className="titulo-index">¡Certifícate internacionalmente con Cambridge sin salir de casa!</h2>
                <Row className="d-md-flex align justify-content-center info-index">
                    <Col className="d-flex align-items-start flex-column">
                        <div className="logo-principal">
                            <iframe width="560" height="415" src="https://www.youtube.com/embed/tfBiC_wjS3s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <div className="d-flex justify-content-center">
                                <Button variant="warning" size="lg" as={NavLink} to={'/registro'}>¡Registrate ahora!</Button>
                            </div>
                        </div>
                    </Col>
                    <Col className="mt-3 d-flex align-items-start flex-column bd-highlight mb-2 col-md-4">
                        <div className="mi-lst">
                            <div className="lst-informacion">                          
                                <ul className="mi-lista">
                                    <li>Avalado por el Ministerio de Educación</li>
                                    <li>¡Un examen flexible!</li>
                                    <li>Resultados instantáneos</li>
                                    <li>Reporte de certificación</li>
                                    <li>Una prueba adaptativa</li>
                                </ul>
                            </div>
                            <div className="img-cambridge">
                                <Image src={Cambridge} alt="Logo Cambridge" width="320" height="120" fluid/>
                            </div>
                        </div> 
                    </Col>      
                </Row>
            </Row>
        </Container>    
        )
}

export {Inicio}
