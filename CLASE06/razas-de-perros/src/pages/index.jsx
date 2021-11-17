
import borderCollie from 'media/borderCollie.jpg';
import rhodesian from 'media/rhodesian.jpg'

import CardRazasPerros from "components/CardRazasPerros";



const Index = () =>{
    return (        
            <> 
                <section>
                <h1>Razas de Perros</h1>
                <ul className="breedCardContainer">
                    <CardRazasPerros nombreRaza= 'BorderCollie' imagen = {borderCollie} ruta = '/borderCollie'/>
                    <CardRazasPerros nombreRaza= 'Rhodesian' imagen = {rhodesian}  ruta = '/rhodesian'/>
                    <CardRazasPerros nombreRaza= 'Rhodesian' imagen = {rhodesian}  ruta = '/rhodesian'/>
                    <CardRazasPerros nombreRaza= 'Rhodesian' imagen = {rhodesian}  ruta = '/rhodesian'/>
                    <CardRazasPerros nombreRaza= 'Rhodesian' imagen = {rhodesian}  ruta = '/rhodesian'/>
                    <CardRazasPerros nombreRaza= 'Rhodesian' imagen = {rhodesian}  ruta = '/rhodesian'/>
                    <CardRazasPerros nombreRaza= 'Rhodesian' imagen = {rhodesian} ruta = '/rhodesian'/>
                    <CardRazasPerros nombreRaza= 'Rhodesian' imagen = {rhodesian} ruta = '/rhodesian'/>
                    <CardRazasPerros nombreRaza= 'Rhodesian' imagen = {rhodesian} ruta = '/rhodesian'/>
                    <CardRazasPerros nombreRaza= 'Rhodesian' imagen = {rhodesian} ruta = '/rhodesian'/>
                    
                </ul>
                </section>
                <section></section>
            </>
        
    
    
    
    )
}

export default Index;