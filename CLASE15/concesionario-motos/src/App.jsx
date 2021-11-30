import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './styles/style.css';
import Login from './pages/auth/Login';
import Registro from './pages/auth/Registro';
import Admin from './pages/admin/Admin';
import Index from './pages/Index';
import PublicLayout from './layouts/PublicLayout';
import PrivateLayout from './layouts/PrivateLayout';
import AuthLayout from './layouts/AuthLayout';
import Usuarios from './pages/admin/Usuarios';
import Categorias from './pages/admin/Categorias';
import Articulos from './pages/admin/Articulos';
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <Auth0Provider
    domain="concesionario-vehiculos-21.us.auth0.com"
    clientId="iATEAudFgDuNlDEZokBDXuhY0m4jLawP"
    redirectUri={window.location.origin}
    >
      <Router>
        <Switch>  
          <Route path = {['/admin', '/admin/usuarios', '/admin/categorias', '/admin/articulos']}>
            <PrivateLayout>
              <Switch>              
                <Route path = '/admin/usuarios'>
                  <Usuarios />
                </Route>
                <Route path = '/admin/categorias'>
                  <Categorias />
                </Route>
                <Route path = '/admin/articulos'>
                  <Articulos />
                </Route>
                <Route path = '/admin'>
                  <Admin />
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>


          <Route path = {['/login','/registro']}>
            <AuthLayout>
              <Switch>
                <Route path = '/login'>
                  <Login />
                </Route>

                <Route path = '/registro'>
                  <Registro />
                </Route>

              </Switch>
            </AuthLayout>
          </Route>
          

          <Route path = {['/']}>
            <PublicLayout>
              <Switch>
                <Route path= '/'>
                  <Index />
                </Route>
              </Switch>
            </PublicLayout>
          </Route>      
        
        </Switch>
      </Router>
    </Auth0Provider>
  );
}

export default App;
