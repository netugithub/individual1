import "./Contacto.css"

const Contacto = () => {
    return ( 
        <div >
            <div className="col-6 ms-3 row">
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
            <div className="row">
            <div className="col-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9659995233383!2d-58.44092388519512!3d-34.60502126507324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca6d41caa929%3A0x13be7fe92c2a2016!2sAv.%20Angel%20Gallardo%20551%2C%20C1414%20CABA!5e0!3m2!1ses-419!2sar!4v1642122308881!5m2!1ses-419!2sar" width={600} height={450}  allowfullscreen={""} ></iframe>

            </div>      
            </div>


        </div>

     );
}
 
export default Contacto;