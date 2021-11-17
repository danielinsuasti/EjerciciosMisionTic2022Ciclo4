// import logo from './logo.svg';
import { Link, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Category  from "./Category";
import Products from "./Products";
import Login from "./Login";

import PrivateRoute from "./PrivateRoute";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

const Admin = () => {
  return (
    <div>
      <h2>Welcome to Admin</h2>
    </div>
  );
};






function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
        <div className="container-fluid"> 

                     
          <Link className = "navbar-brand" to="/">Home</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className ="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav">                

              <li className="nav-item">            
                <Link className="nav-link" to="/category">Category</Link>
              </li>

              <li className="nav-item">            
                <Link className="nav-link" to="/products">Products</Link>
              </li>

              <li className="nav-item">            
                <Link className="nav-link" to="/admin">Admin Area</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/"> <Home /> </Route> 
        <Route path="/category"> <Category /> </Route>
        <Route path="/products"> <Products /> </Route>
        <Route path="/login"> <Login /> </Route>
        <PrivateRoute path= "/admin" component={Admin} />

        
        
      </Switch>
       




    </div>
  );
}

export default App;
