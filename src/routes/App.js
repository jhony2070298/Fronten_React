import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navegacion } from '../layouts/Navegacion';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Image } from 'react-bootstrap';
import { Register } from '../pages/Register';
import { Login } from '../pages/login';
import { Formulario } from '../pages/formulario';
import { Usuario } from '../pages/Usuario';
import { Administrador } from '../pages/administrador';
import { Editar } from '../pages/Editar';
import { Inicio } from '../pages/Inicio';
import LogoIH from '../img/logo_ih.jpg'
import linguaskill from '../img/Linguaskill_from_480.jpeg'
import { Provider } from 'react-redux';
import {store} from '../store';
import {comprobarToken} from '../connection/helpers/comprobarToken'

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
              <Route exact path="/formulario" component={Formulario}></Route>
              <Route exact path="/usuario" component={Usuario}></Route>
              <Route exact path="/administrador" component={Administrador}></Route>
              <Route exact path="/editar" component={Editar}></Route>
              <Route exact path="/" component={Inicio}></Route>
            </Switch>
          </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
