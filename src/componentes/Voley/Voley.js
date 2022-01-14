import { useContext, useEffect } from "react"
import { Context } from "../../store/canchaContext"
import { useState } from "react";
import "./Voley.css"


const Voley = () =>{

    const{voley, getVoley} = useContext(Context)

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
        getVoley()
      }, [])

    return(
        <div className="mt-4">
            {voley.length>0 ?
                voley.map(canchita =>(
                    <div key={canchita.id} className="card mb-3" style={{maxwidth: "540px"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src={canchita.url_imagen} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{canchita.nombre}</h5>
                                    <p>Horarios: {canchita.horarios.map(hora => (
                                        <button onClick={() => reservar(canchita.id, hora.id)} key={hora.id} className="btn border ms-3 mt-2"> {hora.hora} </button>))}
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

export default Voley