import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <div className = "bg-red-300  text-green-700" >Hola mundo con tailwind</div> */}
      <div className = "flex flex-col md:flex-row">
        <div className = "my-1 bg-green-200" >Elemento1</div>
        <div className = "my-1 bg-red-200" >Elemento2</div>
        <div className = "my-1 bg-purple-200" >Elemento3</div>
        <div className = "my-1 bg-yellow-200" >Elemento4</div>

        <button className = "boton"  >
          Haz click aqui
        </button>

        <button className = "boton">
          Este es el boton 2
        </button>


      </div>
    </div>
  );
}

export default App;
