import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

function RutaPrivada({component:Componente,...restPro}) {

    const conectado = useSelector(state => state.auth.conectado);

    return (
        <Route
        {...restPro}
        render = {
            (propiedades) => conectado === true ? <Componente {...propiedades}/> : <Redirect to="/login"/>
        }
        />
    )
}

export  {RutaPrivada}
