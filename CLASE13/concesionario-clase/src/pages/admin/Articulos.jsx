import React, {useEffect, useState } from 'react'


const Articulos = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textoBoton, setTextoBoton] = useState('Crear Nuevo')
    
    useEffect(()=> {
        if(mostrarTabla){
            setTextoBoton('Crear Nuevo')
        }else{
            setTextoBoton('Mostrar Todos')
        }
    }, [mostrarTabla])


    return (
      <div className = 'flex h-full w-full flex-col items-center justify-start p-8'>
          <div className ='flex flex-col'>
            <h2 className = 'text-3xl font-extrabold text-gray-900'>
                PAGINA DE ADMINISTRACION DE ARTICULOS
            </h2>

            <button
            onClick={() => setMostrarTabla(!mostrarTabla)}
            className="text-white bg-indigo-500 p-5 rounded-full m-6 w-28 self-end"
            >
            {textoBoton}
            </button>            

          </div>
          {mostrarTabla ? <TablaArticulos /> : <FormularioCreacionArticulos />}
        
      </div>
    );
}

const TablaArticulos=()=>{
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
                <tr>
                    <td>Moto Crucero</td>
                    <td>Honda</td>
                    <td>2010</td>
                </tr>
                <tr>
                    <td>Moto2</td>
                    <td>Yamaha</td>
                    <td>2021</td>
                </tr>

                <tbody>

                </tbody>
            </table>
        </div>
    )
    
}

const FormularioCreacionArticulos=()=>{
    return (
        <div className = 'flex flex-col items-center justify-center'>
            <h2 className = ' text-2xl font-extrabold text-gray-800'> CREAR NUEVO ARTICULO</h2>
            <form className = 'grid grid-cols-2' >
                <input className = 'bg-gray-100 border border-indigo-600 p-2 rounded-lg m-2' type="text" />
                <input className = 'bg-gray-100 border border-indigo-600 p-2 rounded-lg m-2' type="text" />
                <input className = 'bg-gray-100 border border-indigo-600 p-2 rounded-lg m-2' type="text" />
                <input className = 'bg-gray-100 border border-indigo-600 p-2 rounded-lg m-2' type="text" />
                <button className ='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-700 text-white'>
                    Guardar Articulo
                </button>
            </form>

            
        </div>
    )
}




export default Articulos
