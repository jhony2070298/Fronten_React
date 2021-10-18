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
import { Inicio } from '../pages/inicio';
import LogoIH from '../img/logo_ih.jpg'
import linguaskill from '../img/Linguaskill_from_480.jpeg'


function App() {
  return (
      <BrowserRouter>
          <div>
            <Navegacion/> 
          </div>
          <div className="mt-3 mi-imagenes">
                    <Image src={LogoIH} alt="Logo International House Bogotá" width="225" height="80" fluid/>
                    <span class="linguaskill">
                    <Image src={linguaskill} alt="Logo Linguaskill" width="225" height="70" fluid/>
                    </span>
          </div>
          {/* <div>
          <Image className="mx-auto" src={Logo} fluid/>
          </div> */}
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
  );
}

export default App;
