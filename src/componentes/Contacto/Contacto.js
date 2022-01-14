import "./Contacto.css"

const Contacto = () => {
    return ( 
        <div className="row">
            <div className="col-6 ms-3">
            <form>
                <h2>Contacto</h2>
                <div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Nombre</label>
                        <input type="text" className="form-control input col-7" id="exampleInputPassword1" style={{fontSize: "18pt", height: "40px", width:"450px"}}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control input col-7" id="exampleInputEmail1" aria-describedby="emailHelp"  style={{fontSize: "18pt", height: "40px", width:"450px"}}/>
                    
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Mensaje</label>
                        <div>
                            <textarea name="textarea" rows="7" cols="40"></textarea>
                        </div>
                    </div>
                </div>
                    <button type="submit" className="btn btn-success col-2">Enviar</button>
                
            </form>
            </div>
            <div className="col-6 ms-3">
                <h2 className="col-5">Dónde estamos?</h2>
              

            </div>





        </div>

     );
}
 
export default Contacto;