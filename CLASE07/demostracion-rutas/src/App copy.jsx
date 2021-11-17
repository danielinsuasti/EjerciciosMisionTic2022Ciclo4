// import logo from './logo.svg';
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

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
      <Routes>
        <Route exact path="/" element = {<Home/>}></Route> 
        <Route path="/category" element = {<Category/>}></Route>
        <Route path="/products" element = {<Products/>}></Route>
      </Routes>
       




    </div>
  );
}

export default App;
