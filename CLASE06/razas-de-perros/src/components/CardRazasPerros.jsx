import {Link} from 'react-router-dom'


const CardRazasPerros = ({nombreRaza, imagen, ruta}) =>{
    return(
      <li className="breedCard">
          <Link to = {ruta}>      
              <div className="contenedorImagen">
                <img src={imagen} alt={nombreRaza} />
              </div>
              <span className="breedTitle">{nombreRaza}</span>
           </Link >    
      </li>    
    )
  }

  export default CardRazasPerros;