import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navegacion } from '../layouts/Navegacion';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Image } from 'react-bootstrap';
import { Register } from '../pages/register';
import { Login } from '../pages/login';
import { Formulario } from '../pages/formulario';
import { Usuario } from '../pages/usuario';
import { Administrador } from '../pages/administrador';
import { Editar } from '../pages/editar';
import { Inicio } from '../pages/Inicio';
import LogoIH from '../img/logo_ih.jpg'
import linguaskill from '../img/Linguaskill_from_480.jpeg'
import { Provider } from 'react-redux';
import {store} from '../store';
import {comprobarToken} from '../connection/helpers/comprobarToken'
import { RutaPrivada } from './RutaPrivada';

comprobarToken()


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <div>
            <Navegacion/> 
          </div>
          <div className="mt-3 mi-imagenes">
                    <Image src={LogoIH} alt="Logo International House Bogotá" width="225" height="80" fluid/>
                    <span className="linguaskill">
                    <Image src={linguaskill} alt="Logo Linguaskill" width="225" height="70" fluid/>
                    </span>
          </div>
          <Container>
            <Switch>
              <Route exact path="/registro" component={Register}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/" component={Inicio}></Route>
              <RutaPrivada exact path="/formulario" component={Formulario}></RutaPrivada>
              <RutaPrivada exact path="/usuario" component={Usuario}></RutaPrivada>
              <RutaPrivada exact path="/administrador" component={Administrador}></RutaPrivada>
              <RutaPrivada exact path="/editar" component={Editar}></RutaPrivada>
            </Switch>
          </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
