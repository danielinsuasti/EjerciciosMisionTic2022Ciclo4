import React, {useEffect, useState } from 'react'


const Articulos = () => {
    const[edad, setEdad] = useState(0);
    const[esMenorDeEdad, setEsMenorDeEdad] = useState(false);
    const[mostrarCamposAdicionales, setMostrarCamposAdicionales] = useState(false);

    useEffect(()=>{
        if(edad >= 18){
            setEsMenorDeEdad(false)

        }else{
            setEsMenorDeEdad(true)
        }
    },[edad])

    
    return (
      <form className="flex flex-col">
        <h2>Formulario Creación de Articulos</h2>
        <label htmlFor="edad">
          Por favor ingrese su edad
          <input
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            className="border border-gray-600"
            name="edad"
            type="number"
          />
        </label>

        {esMenorDeEdad ? (
          <span className="text-3xl text-red-500">
            !Usted es menor de edad, no puede hacer pagos!
          </span>
        ) : (
          <span className="text-3xl text-green-500">
            !Usted es MAYOR de edad, SI puede hacer pagos!
          </span>
        )}  

        <button type="button" onClick = {() => setMostrarCamposAdicionales(!mostrarCamposAdicionales)} className = "text-white bg-indigo-500" >
            Mostrar Campos Adicionales
        </button>

        {mostrarCamposAdicionales && (
            <div>
                <input className = 'border bg-gray-400 my-2 p-3 'type="text" placeholder = 'Dato nuevo'  />
                <input className = 'border bg-gray-400 my-2 p-3 'type="text" placeholder = 'Dato nuevo'  />
                <input className = 'border bg-gray-400 my-2 p-3 'type="text" placeholder = 'Dato nuevo'  />
                <input className = 'border bg-gray-400 my-2 p-3 'type="text" placeholder = 'Dato nuevo'  />
                <input className = 'border bg-gray-400 my-2 p-3 'type="text" placeholder = 'Dato nuevo'  />                
            </div>
        )}    

      </form>
    );
}

export default Articulos
