import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const { loginWithRedirect } = useAuth0();

    return (
      <nav className="bg-red-200 p-5">
        <ul className="flex w-full justify-between my-3">
          <li>Inicio</li>
          <li>Equipo</li>
          <li>Categorias</li>
          <li>Marcas</li>
          <li className="px-3">
            <button
              onClick={() => loginWithRedirect()}
              className="bg-indigo-500 p-2 text-white rounded-lg shadow-md hover:bg-indigo-700"
            >
              Iniciar Sesion
            </button>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar
