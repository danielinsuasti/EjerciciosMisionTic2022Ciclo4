import React from 'react'
import ImagenLogo from './ImagenLogo'

const Sidebar = () => {
    return (
        <nav className = 'w-72 border border-gray-300 h-full flex flex-col justify-between'>
            <ul>
                <li>
                    <ImagenLogo />
                </li>
                <li>Articulos</li>
                <li>Categorias</li>
                <li>Usuarios</li>
                <li>Vehiculos</li>
            </ul>
        </nav>
    )
}

export default Sidebar
