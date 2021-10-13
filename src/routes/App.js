import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navegacion } from '../layouts/Navegacion';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Image } from 'react-bootstrap';
import { Register } from '../pages/Register';
import { Login } from '../pages/Login';
import { Formulario } from '../pages/Formulario';
import { Usuario } from '../pages/Usuario';
import { Administrador } from '../pages/Administrador';
import { Editar } from '../pages/Editar';
import { Inicio } from '../pages/Inicio';
import Logo from '../img/logo_ih.jpg'


function App() {
  return (
      <BrowserRouter>
          <div>
            <Navegacion/> 
          </div>
          <Image className="mx-auto" src={Logo} fluid/>
          <Container>
            <Switch>
              <Route exact path="/registro" component={Register}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/formulario" component={Formulario}></Route>
              <Route exact path="/usuario" component={Usuario}></Route>
              <Route exact path="/administrador" component={Administrador}></Route>
              <Route exact path="/editar" component={Editar}></Route>
              <Route exact path="/inicio" component={Inicio}></Route>
            </Switch>
          </Container>
      </BrowserRouter>
  );
}

export default App;
