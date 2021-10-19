import jwt_decode from 'jwt-decode'
import { cerrarSesion, setUsuarioActual } from '../autenticacionAcciones'
import {store} from '../../store'
import { setAutenticationToken } from './setAutenticationToken'

const comprobarToken =()=> {
    if(localStorage.jwtToken){

        setAutenticationToken(localStorage.jwtToken)

        const decodificado = jwt_decode(localStorage.jwtToken)

        StorageEvent.dispatch(setUsuarioActual({
            usuario:decodificado,
            conectado:true
        }))
        
        const tiempoAtual = Math.floor(Date.now()/1000)

        if(decodificado.exp < tiempoAtual){
            store.dispatch(cerrarSesion())
            window.location.href="/login"
        }

    }
}

export {comprobarToken}
