import React, {useEffect} from 'react'


const Articulos = () => {

    // const funcionPrueba = () =>{
    //     return console.log('hola')
    // }

    // useEffect(funcionPrueba,[])

    useEffect(()=>{
        console.log('Hola, soy un effect que se ejecuta solo una vez cuando la pagina se renderiza, porque el array de dependencia esta vacio')
        //Paso1
        //Paso 2
        //Paso 3
        
    }, [])

    return (
        <form className = 'flex flex-col'>
            <h2>Formulario Creación de Vehículos</h2>
            <input type="text" placeholder = 'Nombre del Vehículo' />
            <input type="text" placeholder = 'Marca del Vehículo' />
            <input type="text" placeholder = 'Modelo del Vehículo' />
            <button className = "bg-indigo-500 text-white">Enviar Datos</button>                       
        </form>
    )
}

export default Articulos
