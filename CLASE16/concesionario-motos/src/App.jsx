import React, { useState, useEffect } from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import PublicLayout from 'layouts/PublicLayout';
import Index from 'pages/Index';
import Admin from 'pages/admin/Index';
import Vehiculos from 'pages/admin/Vehiculos';
import Login from 'pages/auth/Login';
import Test from 'pages/test';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';
import Registro from 'pages/auth/Registro';
import AuthLayout from 'layouts/AuthLayout';
import { DarkModeContext } from 'context/darkMode';
import { Auth0Provider } from '@auth0/auth0-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    console.log('modo dark:', darkMode);
  }, [darkMode]);

  return (
    <div className='App'>
      <Auth0Provider
        domain="concesionario-vehiculos-21.us.auth0.com"
        clientId="iATEAudFgDuNlDEZokBDXuhY0m4jLawP"
        redirectUri="http://localhost:3000/admin/"
        audience="api-autenticacion-concesionario-motos21"
      >
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
          <Router>
            <Switch>
              <Route path={['/admin', '/admin/vehiculos', '/test']}>
                <PrivateLayout>
                  <Switch>
                    <Route path='/admin/vehiculos'>
                      <Vehiculos />
                    </Route>
                    <Route path='/test'>
                      <Test />
                    </Route>
                    <Route path='/admin'>
                      <Admin />
                    </Route>
                  </Switch>
                </PrivateLayout>
              </Route>
              <Route path={['/login', '/registro']}>
                <AuthLayout>
                  <Switch>
                    <Route path='/login'>
                      <Login />
                    </Route>
                    <Route path='/registro'>
                      <Registro />
                    </Route>
                  </Switch>
                </AuthLayout>
              </Route>
              <Route path={['/']}>
                <PublicLayout>
                  <Route path='/'>
                    <Index />
                  </Route>
                </PublicLayout>
              </Route>
            </Switch>
          </Router>
        </DarkModeContext.Provider>
      </Auth0Provider>
    </div>
  );
}

export default App;
