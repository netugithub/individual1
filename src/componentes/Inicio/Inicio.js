import { useEffect, useContext } from "react";
import { Context } from "../../store/canchaContext";
import Cards from "../Cards/Cards";
import Carrusel from "../Carrusel/Carrusel";
import Form from "../Form/Form";
import Navbar from "../Navbar";
import Redes from "../Redes/Redes";
import "./Inicio.css"



const Inicio = () => {
  
    const {info} = useContext(Context)

    
  
    
     return ( 
       <>
        
        <Carrusel />
        {console.log(info)}
        <h1 className="text-center mt-5"> NUESTRAS CANCHAS</h1>
         <Cards />
         <Redes />
      
      </>
    );
}
 
export default Inicio;