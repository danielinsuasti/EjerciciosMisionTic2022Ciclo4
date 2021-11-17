import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from './components/card';

function App() {
  return (
    <div className="App">

      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>


      <span className = "fondoNegro">HOLA MUNDO BOOTSTRAP VANILLA + REACT</span>

      <button type="button" className="btn btn-primary">Primary</button>

      <button type="button" className="btn btn-success">Success</button>



      <div className = "container">
        
        <Card/>
        <Card/>
        <Card/>
        <Card/>


      </div>
      

      <div className="alert alert-success" role="alert">
        A simple success alert—check it out!
      </div>
            
    
    </div>   
  );
}

export default App;
