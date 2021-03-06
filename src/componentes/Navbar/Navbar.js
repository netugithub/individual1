import "./Navbar.css"
import logo from "../../img/logo.jpg"
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                        <img src={logo} alt="logo deportes" className="logo"/>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active ms-3" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Canchas
                                </a>
                                <ul className="dropdown-menu lista" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/futbol">Futbol</Link></li>
                                    <li><Link className="dropdown-item" to="/tenis">Tenis</Link></li>
                                    <li><Link className="dropdown-item" to="/voley">Voley</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active ms-3" aria-current="page" to="/contacto">Contacto</Link>
                            </li>
                        </ul>
                        <i className="bi bi-person-circle usuario">  Mi usuario</i>
                    </div>
                </div>
        </nav>
        // <nav className="navbar navbar-expand-lg navbar-light ">
        //         <div className="container-fluid">
        //            <img src={logo} alt="logo deportes" className="logo"/>
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                     <li className="nav-item">
        //                     <a className="nav-link active" aria-current="page" href="#">Futbol</a>
        //                     </li>
        //                     <li className="nav-item">
        //                     <a className="nav-link active" href="#">Tenis</a>
        //                     </li>
        //                     <li className="nav-item">
        //                     <a className="nav-link active" href="#">Voley</a>
        //                     </li>
        //                 </ul>
        //                 <i className="bi bi-person-circle usuario">  Mi usuario</i>
        //                 {/* <form className="d-flex">
        //                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        //                     <button className="btn btn-outline-success" type="submit">Search</button>
        //                 </form> */}
        //             </div>
        //         </div>
        // </nav>
     );
}
 
export default Navbar;




