import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navegacion } from '../layouts/Navegacion';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Register } from '../pages/Register';
import { Login } from '../pages/Login';
import { Formulario } from '../pages/Formulario';
import { Usuario } from '../pages/Usuario';
import { Administrador } from '../pages/Administrador';
import { Editar } from '../pages/Editar';


function App() {
  return (
      <BrowserRouter>
          <div>
            <Navegacion/> 
          </div>
          <Container>
            <Switch>
              <Route exact path="/registro" component={Register}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/formulario" component={Formulario}></Route>
              <Route exact path="/usuario" component={Usuario}></Route>
              <Route exact path="/administrador" component={Administrador}></Route>
              <Route exact path="/editar" component={Editar}></Route>
            </Switch>
          </Container>
      </BrowserRouter>
  );
}

export default App;
