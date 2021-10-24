import React from 'react'
import { Container} from 'react-bootstrap'
import { FormularioForm } from '../components/FormularioForm'

function Formulario() {
    return (
        <Container className="mt-4">
        <h3>Formulario de Inscripción</h3>
        <br/>
        <div>
            
            <FormularioForm/>
            
            
        </div>
    
    </Container>
    )
}

export {Formulario}
