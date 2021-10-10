import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navegacion } from '../layouts/Navegacion';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { register } from '../pages/register';
import { login } from '../pages/login';
import { formulario } from '../pages/formulario';
import { usuario } from '../pages/usuario';
import { administrador } from '../pages/administrador';
import { editar } from '../pages/editar';
import { Provider } from 'react-redux';
import store from '../store';


function App() {
  return (
      <BrowserRouter>
          <div>
            <Navegacion/> 
          </div>
          <Container>
            <Switch>
              <Route exact path="/registro" component={register}></Route>
              <Route exact path="/login" component={login}></Route>
              <Route exact path="/formulario" component={formulario}></Route>
              <Route exact path="/usuario" component={usuario}></Route>
              <Route exact path="/administrador" component={administrador}></Route>
              <Route exact path="/editar" component={editar}></Route>
            </Switch>
          </Container>
      </BrowserRouter>
  );
}

export default App;
