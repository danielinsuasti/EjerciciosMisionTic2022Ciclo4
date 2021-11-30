import React from 'react'
import ImagenLogo from './ImagenLogo'
import { useAuth0 } from "@auth0/auth0-react"

const Sidebar = () => {
  const { logout } = useAuth0();

  return (
    <nav className="w-72 border border-gray-300 h-full flex flex-col justify-between">
      <ul>
        <li>
          <ImagenLogo />
        </li>
        <li>Articulos</li>
        <li>Categorias</li>
        <li>Usuarios</li>
        <li>Vehiculos</li>
      </ul>
      <button
        onClick={() => logout({ returnTo: window.location.origin })}
        className="border-2 border-gray-400 bg-indigo-500"
      >
        Cerrar Sesión
      </button>
    </nav>
  );
};

export default Sidebar
