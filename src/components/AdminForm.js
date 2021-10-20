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
                    <td>322345</td>
                    <td>Julietha</td>
                    <td>Gomez</td>
                    <td>Medellin</td>
                    <td>14 Jun 2021</td>
                    <td>Aprobado</td>
                    <td>
                        <Button variant="primary" className="m-2">Editar</Button>
                        <Button variant="danger" className="m-2">Eliminar</Button> 
                        <Button variant="info" className="m-2">Info</Button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>322345</td>
                    <td>Julietha</td>
                    <td>Gomez</td>
                    <td>Medellin</td>
                    <td>14 Jun 2021</td>
                    <td>Aprobado</td>
                    <td>
                        <Button variant="primary" className="m-2">Editar</Button>
                        <Button variant="danger" className="m-2">Eliminar</Button> 
                        <Button variant="info" className="m-2">Info</Button>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>322345</td>
                    <td>Julietha</td>
                    <td>Gomez</td>
                    <td>Medellin</td>
                    <td>14 Jun 2021</td>
                    <td>Aprobado</td>
                    <td>
                        <Button variant="primary" className="m-2">Editar</Button>
                        <Button variant="danger" className="m-2">Eliminar</Button> 
                        <Button variant="info" className="m-2">Info</Button>
                    </td>
                </tr>
             </tbody>
        </Table>
    )
}

export   {AdminForm}
