import logo from 'media/logo.png';

// function Header(){
const Header = () =>{
    return(
        <header>
        
            <ul className="navbar">
            <li>
                <img src={logo} alt="imagen" className="logo" />
            </li>
            <li>
                <button className="botonGenerico mainButton">Nuevo post</button>
            </li>
            <li>
                <div className="buscar">
                <input placeholder="Buscar una raza" />
                <i className="fas fa-search botonGenerico iconoBusqueda"></i>
                </div>
            </li>
            <li><button className="botonGenerico secondaryButton">Login</button></li>
            <li><button className="botonGenerico mainButton">Registro</button></li>
            </ul>
        </header>
    )
}


export default Header;