import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LogoIH from '../img/logo_ih.jpg'
import linguaskill from '../img/Linguaskill_from_480.jpeg'
import Email from '../img/email.png'
import Phone from '../img/llamada-telefonica.png'
import Cambridge from'../img/Linguaskill Authorised 480.jpeg'
import '../styles/index.css'


function Inicio() {
    return (
        <Container classname="mt-3">
            <Row>
                <div cass="mi-imagenes">
                    <Image src={LogoIH} alt="Logo International House Bogotá" width="225" height="80" fluid/>
                    <span class="linguaskill">
                    <Image src={linguaskill} alt="Logo Linguaskill" width="225" height="70" fluid/>
                    </span>
                </div>
                <div class="mi-informacion">
                    <p h6> 
                        <Image src={Email} alt="Email" width="20" height="20" fluid/>
                        info@ihbogota.com
                        <Image src={Phone} alt="Phone" width="19" height="19" fluid/>
                        +57 1 744 1993
                    </p>
                </div>
                <h2 class="titulo-index">¡Certifícate internacionalmente con Cambridge sin salir de casa!</h2>
                <Row class="d-md-flex align justify-content-center info-index">
                    <Col class="d-flex align-items-start flex-column">
                        <div class="logo-principal">
                            <iframe width="560" height="415" src="https://www.youtube.com/embed/tfBiC_wjS3s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div class="d-flex justify-content-center">
                                <button class="mi-button btn-warning" onclick="parent.location.href='./pages/register.html'">¡Registrate ahora!</button>
                            </div>
                        </div>
                    </Col>
                    <Col classname='mt-3' class="d-flex align-items-start flex-column bd-highlight mb-2 col-md-4">
                        <div class="mi-lst">
                            <div class="lst-informacion">                          
                                <ul class="mi-lista">
                                    <li>Avalado por el Ministerio de Educación</li>
                                    <li>¡Un examen flexible!</li>
                                    <li>Resultados instantáneos</li>
                                    <li>Reporte de certificación</li>
                                    <li>Una prueba adaptativa</li>
                                </ul>
                            </div>
                            <div class="img-cambridge">
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
