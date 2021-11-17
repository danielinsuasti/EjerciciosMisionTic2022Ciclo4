// import logo from './logo.svg';
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

const Category = () => {
  return (
    <div>
      <h2>Category</h2>
    </div>
  );
};

const Products = () => {
  return (
    <div>
      <h2>Products</h2>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light">
        
        <ul className="nav navbar-nav">          
          <li>            
            <Link to="/">Home</Link>
          </li>

          <li>            
            <Link to="/category">Category</Link>
          </li>

          <li>            
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/"> <Home /> </Route> 
        <Route path="/category"> <Category /> </Route>
        <Route path="/products"> <Products /> </Route>
      </Switch>
       




    </div>
  );
}

export default App;
