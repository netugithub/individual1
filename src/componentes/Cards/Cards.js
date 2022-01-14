import { useContext } from "react";
import { Context } from "../../store/canchaContext";
import "./Cards.css"
import { Link } from "react-router-dom";

const Cards = () => {
   
   const{info} = useContext(Context)
   
   
    return ( 
        <>
        {info.length>0 ? 
        // <div className="container">
            <div className=" container text-center d-flex contenedorCards">
                <div className="card" style={{width: "18rem"}}>
                    <img src={info[0].url_imagen} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Futbol</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/futbol" className="btn btn-success">Ir a canchas</Link>
                    </div>
                </div>

                <div className="card" style={{width: "18rem"}}>
                    <img src={info[1].url_imagen} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Tenis</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/tenis" className="btn btn-success">Ir a canchas</Link>
                    </div>
                </div>

                <div className="card" style={{width: "18rem"}}>
                    <img src={info[2].url_imagen} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Voley</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/voley" className="btn btn-success">Ir a canchas</Link>
                    </div>
                </div>
            </div>
        // </div>
        :

        <p>Cargando</p>
        
        
        
        }
    </>
     );
}
 
export default Cards;