import React from 'react'
import { Button, Image} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Subir from '../img/subir_archivos.jpg'



function FormularioForm() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Formulario</title>
        <link rel="shortcut icon" href="img/logo.png" type="image/x-icon" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous" />    
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" href="/css/form.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <div className="col-12 container">
          <div className="container_form">
            <div className="row pt-4 py-4">
              <div className="col-3 pr-5 text-right"><label htmlFor="nombres" className="txt_lbl">Nombres</label></div>
              <div className="col-3 "><input type="text" name="nombres" id="nombres" placeholder="Escriba su Nombre" className="form-control" /></div>
              <div className="col-2 pr-5 text-right"><label htmlFor="apellidos" className="txt_lbl">Apellidos</label></div>
              <div className="col-3 "><input type="text" name="apellidos" id="apellidos" placeholder="Escriba su Apellido" className="form-control" /></div>
            </div>
            <div className="row pt-3 py-4">
              <div className="col-3 pr-5 text-right"><label htmlFor="documento" className="txt_lbl">Documento</label></div>
              <div className="col-3  "><input type="text" name="documento" id="documento" placeholder="Escriba su Numero de Documento" className="form-control" /></div>
              <div className="col-2 pr-5 text-right"><label htmlFor="email" className="txt_lbl">Email</label></div>
              <div className="col-3"><input type="text" name="email" id="email" placeholder="ejemplo@prueba.com" className="form-control" /></div>
            </div>
            <div className="row py-4 ">
              <div className="col-3 pr-5 text-right"><label htmlFor="direccion" className="txt_lbl">Dirección</label></div>
              <div className="col-3"><input type="text" name="direccion" id="direccion" placeholder="Escriba su Dirección" className="form-control" /></div>
              <div className="col-2 pr-5 text-right"><label htmlFor="telefono" className="txt_lbl">Teléfono</label></div>
              <div className="col-3"><input type="text" name="telefono" id="telefono" placeholder="Escriba su Numero de Teléfono" className="form-control" /></div>
            </div>
            <div className="row py-3">
              <div className="col-3 pr-5 text-right"><label htmlFor="fecha_exam" className="txt_lbl">Fecha del Examen</label></div>
              <div className="col-3"><input type="date" name="fecha_exam" id="fecha_exam" className="form-control txt_hora" /></div>
              <div className="col-2 pr-5 text-right"><label htmlFor="hora" className="txt_lbl">Hora</label></div>
              <div className="col-3"><input type="time" name="hora" id="hora" className="form-control" /></div>
            </div>
            <div className="row py-4">
              <div className="col-3 pr-5 text-right"><label htmlFor="institucion" className="txt_lbl_ind">Institución a la que va dirigido el examen </label></div>
              <div className="col-6"><input type="text" name="institucion" id="institucion" placeholder="Nombre de la Institución" className="form-control" /></div>
            </div>
            <div className="row py-3">
              <div className="col-3 pr-5 text-right"><label htmlFor="tipo_examen" className="txt_lbl">Que tipo de examen va a realizar</label></div>
              <div className="col-2 ">
                <input type="radio" name="General" defaultValue={1} className="mr-1" />  Linguaskill General
              </div>
              <div className="col-4">
                <input type="radio" name="Business" defaultValue={2} className="mr-1" /> Linguaskill Business
              </div>
            </div>
            <div className="row pt-2 py-">
              <div className="col-3 pr-5 text-right"><label htmlFor="modulos" className="txt_lbl">Módulos a realizar</label></div>
              <div className="col-2 ">
                <input type="radio" name="tres_modulos" defaultValue={1} className="mr-1" />Tres Módulos
              </div>
              <div className="col-2">
                <input type="radio" name="dos_modulos " defaultValue={2} className="mr-1" />Dos Módulos
              </div>
              <div className="col-2">
                <input type="radio" name="un_modilo" defaultValue={3} className="mr-1" />Un Módulo 
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-4 text-center">
                <div className="row">
                  <div className="col-6"><label htmlFor="archivo_documento" className="txt_lbl">Cargar Documento de Identidad</label></div>
                  <div className="col-5 box-img py-2" onclick="uploadfile();"><Image className="mx-auto d-block" src={Subir} fluid/>
                    <div className="txt-file pt-3">Click Aqui Para Caragar Archivos</div>
                  </div>
                  <input type="file" name="archivo_documento" id="archivo_documento" className="d-none" />
                </div>
              </div>
              <div className="col-4 text-center">
                <div className="row">
                  <div className="col-5"><label htmlFor="archivo_pago" className="txt_lbl">Cargar Evidencia de Pago</label></div>
                  <div className="col-5 box-img py-2" onclick="uploadfile2();"><Image className="mx-auto d-block" src={Subir} fluid/>
                    <div className="txt-file pt-3">Click Aqui Para Caragar Archivos</div>
                  </div>
                  <input type="file" name="archivo_pago" id="archivo_pago" className="d-none" />
                </div>
              </div>
              <div className="col-4 text-center">
                <div className="row">
                  <div className="col-5"><label htmlFor="archivo_foto" className="txt_lbl">Cargar Foto del Candidato</label></div>
                  <div className="col-5 box-img py-2" onclick="uploadfile3();">
                    <Image className="mx-auto d-block" src={Subir} fluid/>
                    <div className="txt-file pt-3">Click Aqui Para Cargar Archivos</div>
                  </div>
                  <input type="file" name="archivo_foto" id="archivo_foto" className="d-none" />
                </div>
              </div>
            </div>
            <div className="row py-5">
              <div className="col text-center">
                <Button type="button" className="ml-3" variant="danger" as={NavLink} to={'/'}>Regresar</Button>
                <Button type="button" className="ml-3" variant="primary">Enviar</Button>    
              </div>
            </div>
          </div>
        </div> 
      </div>
    );
  }


export {FormularioForm}