import React from 'react'
import { Button, Table } from 'react-bootstrap'
function AdminForm() {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Documento</th>
                    <th>Nombres</th>
                    <th>Apellidos</th> 
                    <th>Ciudad</th> 
                    <th>Fecha que solicita</th>
                    <th>Estado</th>
                    <th>Acción</th>   
                 </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                        <Button variant="primary">Editar</Button>{' '}
                        <Button variant="danger">Eliminar</Button> <Button variant="info">Info</Button>{' '}
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <Button variant="primary">Editar</Button>{' '}
                    <Button variant="danger">Eliminar</Button> <Button variant="info">Info</Button>{' '}
  
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    <Button variant="primary">Editar</Button>{' '}
                    <Button variant="danger">Eliminar</Button> <Button variant="info">Info</Button>{' '}
  
                </tr>
             </tbody>
        </Table>
    )
}

export   {AdminForm}
