import React, {useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const motosBackend = [
    {
        nombre : 'Moto Ninja',
        marca : 'Yamaha',
        modelo : 2015
    },
    {
        nombre : 'Pulsar 200',
        marca : 'auteco',
        modelo : 2019
    },
    {
        nombre : 'Logan',
        marca : 'Renault',
        modelo : 2015
    },
    {
        nombre : 'Mazda 3',
        marca : 'Mazda',
        modelo : 2022
    },
    {
        nombre : 'Mazda 3',
        marca : 'Mazda',
        modelo : 2022
    },
    {
        nombre : 'Mazda 3',
        marca : 'Mazda',
        modelo : 2022
    },
    {
        nombre : 'Mazda 3',
        marca : 'Mazda',
        modelo : 2022
    }
]

const Articulos = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textoBoton, setTextoBoton] = useState('Crear Nuevo');
    const [motos, setMotos] = useState([]);
    const [colorBoton, setColorBoton] = useState('indigo')

    useEffect(()=>{
        //Obtener lista de motos desde el Backend
        setMotos(motosBackend);
    }, [])
    
    useEffect(()=> {
        if(mostrarTabla){
            setTextoBoton('Crear Nuevo')
            setColorBoton('indigo')
        }else{
            setTextoBoton('Mostrar Todos')
            setColorBoton('red')
        }
    }, [mostrarTabla])


    return (
      <div className="flex h-full w-full flex-col items-center justify-start p-8">
        <div className="flex flex-col">
          <h2 className="text-3xl font-extrabold text-gray-900">
            PAGINA DE ADMINISTRACION DE ARTICULOS
          </h2>

          <button
            onClick={() => setMostrarTabla(!mostrarTabla)}
            className={`text-white bg-${colorBoton}-500 p-5 rounded-full m-6 w-28 self-end`}
          >
            {textoBoton}
          </button>
        </div>
        {mostrarTabla ? (
          <TablaArticulos listaMotos={motos} />
        ) : (
          <FormularioCreacionArticulos 
            funcionParaMostrarLaTabla={setMostrarTabla} 
            listaMotos = {motos}
            funcionParaAgregarUnaMoto={setMotos}
            />
        )}

        <ToastContainer position="bottom-center" autoClose={3000} />

        {/* <span className='text-green-500'>Vehiculo Agregado con exito</span>
          <span className='text-red-500'>Fallo el ingreso del vehiculo</span> */}
      </div>
    );
}

const TablaArticulos=( {listaMotos} )=>{

    useEffect(() => {
        console.log("Este es el listado de motos en el componente tabla", listaMotos)
    },[listaMotos])

    return (
        <div className = 'flex flex-col items-center justify-center'>
            <h2 className = 'text-2xl font-extrabold text-gray-800'>Todos los articulos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre articulo</th>
                        <th>Marca Articulo</th>
                        <th>Modelo articulo</th>
                    </tr>
                </thead>          

                <tbody>
                    {
                        listaMotos.map((moto)=> {
                            return(
                                <tr>
                                    <td>{moto.nombre}</td>
                                    <td>{moto.marca}</td>
                                    <td>{moto.modelo}</td>
                                </tr>
                            )
                        }                        
                        )
                    }                    

                </tbody>
            </table>
        </div>
    )
    
}

const FormularioCreacionArticulos=( {funcionParaMostrarLaTabla, funcionParaAgregarUnaMoto, listaMotos} )=>{

    const[nombre, setNombre] = useState('');
    const[marca, setMarca] = useState('');
    const[modelo, setModelo] = useState('');

    const enviarAlBackend = () =>{
        console.log('nombre : ', nombre, ' marca :', marca, ' modelo : ', modelo);

        if(nombre === '' || marca === '' || modelo === '' ){
          // toast.error('Ingrese todos los datos');
        }else{
          toast.success('Registro Almacenado Correctamente');
          funcionParaMostrarLaTabla(true)
          funcionParaAgregarUnaMoto([
              ...listaMotos, {nombre : nombre, marca : marca, modelo : modelo}
          ]);          
        }        
        
    }


    return (
      <div className="flex flex-col items-center justify-center">
        <h2 className=" text-2xl font-extrabold text-gray-800">
          {" "}
          CREAR NUEVO ARTICULO
        </h2>

        <form className="flex flex-col  ">
          <label className="flex flex-col" htmlFor="name">
            Nombre del vehiculo
            <input
              name="nombre"
              className="bg-gray-100 border border-indigo-600 p-2 rounded-lg m-2"
              type="text"
              placeholder="Pulsar"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
              
            />
          </label>
          <label className="flex flex-col" htmlFor="marca">
            Marca del vehiculo
            <select
              className="bg-gray-100 border border-indigo-600 p-2 rounded-lg m-2"
              name="marca"
              value={marca}
              onChange={(e) => {
                setMarca(e.target.value);
              }}
              
            >
              <option disabled>Seleccione una opción</option>
              <option>Honda</option>
              <option>AKT</option>
              <option>Yamaha</option>
              <option>Suzuki</option>
            </select>
          </label>

          <label className="flex flex-col" htmlFor="modelo">
            Modelo del vehiculo
            <input
              name="modelo"
              className="bg-gray-100 border border-indigo-600 p-2 rounded-lg m-2"
              type="number"
              min={1992}
              max={2022}
              placeholder="2015"
              value={modelo}
              onChange={(e) => {
                setModelo(e.target.value);
              }}
              
            />
          </label>

          <button
            type="button"
            className="col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-700 text-white"
            onClick = { () =>{
                enviarAlBackend();
            }
                
            }
          >
            Guardar Articulo
          </button>
        </form>
      </div>
    );
}




export default Articulos
