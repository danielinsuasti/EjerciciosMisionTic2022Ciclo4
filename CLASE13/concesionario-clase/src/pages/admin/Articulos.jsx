import React, {useEffect, useState } from 'react'


const Articulos = () => {
    const [nombreArticulo, setNombreArticulo] = useState('Este es el valor inicial');
    // const funcionPrueba = () =>{
    //     return console.log('hola')
    // }

    // useEffect(funcionPrueba,[])
    
    //Caso1: UseEffect, array de dependencias Vacio
    //Se ejecuta la primera vez de render(sirve para cargar elementos desde el servidor)
    useEffect(()=>{
        console.log('Hola, soy un effect que se ejecuta solo una vez cuando la pagina se renderiza, porque el array de dependencia esta vacio')
        //Paso1
        //Paso 2
        //Paso 3
        
    }, [])

    //Caso2: UseEffect, con variables en el array dependencias
    //Esta alerta, y ejecuta codigo, cuando se cambia el estado de cualquier variable en el array

    useEffect(()=>{
        console.log("Funcion que se ejecuta cada que cambia el valor de nombreArticulo");
        console.log("El valor de la variable es : ", nombreArticulo)
    }, [nombreArticulo])


    //caso3(NO RECOMENDADO): un useEffect que se ejecuta siempre
    //que no tiene ningun array de dependencias
    // useEffect(()=> {
    //     console.log('este es un use effect que se ejecuta SIEMPRE que cambia una variable');
    //     setNombreArticulo('nuevo estado');
    // })
    



    // const cambioDeArticulo =(e) =>{
    //     console.log('Articulo :' , e.target.value)
    // }

    // const cambioDeMarca = (e) =>{
    //     console.log('Marca :' , e.target.value)
    // }

    const EnviarDatosAlBackend = () =>{
        console.log('El valor de la variable nombreArticulo es : ', nombreArticulo)
    }

    return (
      <form className="flex flex-col">
        <h2>Formulario Creación de Articulos</h2>
        <input
          type="text"
          onChange={(e) => {
            setNombreArticulo(e.target.value);
          }}
          value = {nombreArticulo}
          placeholder="Nombre del Articulo"
        />
        <input
          type="text"
          onChange={(e) => {
            console.log("Marca :", e.target.value);
          }}
          placeholder="Marca del Articulo"
        />
        <input type="text" placeholder="Modelo del Articulo" />
        <button type = "button" onClick ={EnviarDatosAlBackend} className="bg-indigo-500 text-white">Enviar Datos</button>
      </form>
    );
}

export default Articulos

//CONCLUSION

//HICIMOS 3 CASOS 

//*Funcion que se ejecuta al inicio de la renderizacion del codigo(El useEffect Vacio)
//*Funcion que se ejecuta cada que una variable cambia( el useEffect con variable en el array de dependencias)
//*Funciones que se ejecutan cada que yo hago cambios(Los onChange en el formulario, o los onClick en el boton)