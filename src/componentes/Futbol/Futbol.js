import { useContext, useEffect } from "react";
import { useState } from "react";
import { Context } from "../../store/canchaContext";
import "./Futbol.css"



const Futbol = () =>{

    const{futbol, getFutbol} = useContext(Context)

    const [reservas, setReservas] = useState(JSON.parse(localStorage.getItem("reserva"))===null? []: JSON.parse(localStorage.getItem("reserva") ))
    

    useEffect(() =>{
    localStorage.setItem("reserva", JSON.stringify([reservas]))
     
    }, [reservas])
 


    const reservar=(idCancha, idHorario) =>{
        let reservacion = `cancha: ${idCancha} hora:${idHorario}`
      
        setReservas([...reservas, reservacion])
        alerta()
    }
   

    const alerta = ()=>{
        alert(`su cancha ha sido reservada!!`)
    }





    useEffect(() =>{
        getFutbol()
    }, [])


        return(
            
        <div className="mt-4">     
            {futbol.length>0 ?
                futbol.map(canchita =>(
                        <div key={canchita.id} className="card mb-3" style={{maxwidth: "540px"}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={canchita.url_imagen} className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{canchita.nombre}</h5>
                                        <p className="card-title">Cantidad de jugadores: {canchita.jugadores}</p>
                                        <p className="card-title">Cancha techada: {canchita.techo === true ? "si" : "no"}</p>
                                        <p>Horarios: {canchita.horarios.map(hora => (
                                            <button  onClick={() => reservar(canchita.id, hora.id)}  key={hora.id} className="btn border ms-3 mt-2 btnHorario"> {hora.hora} </button>))}
                                        </p>
                                        <button className="bg-success reservar"> Reservar </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                
                            
                    ))
                    
                        
                        :
                        <p>Cargando</p>}
                        </div> 
                
                    
        )
}

export default Futbol;
