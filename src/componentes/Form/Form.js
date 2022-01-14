import "./Form.css"

const Form = () => {
    return (
        <div>
            <form>
                <h2>Contacto</h2>

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Nombre</label>
                    <input type="text" className="form-control input" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Mensaje</label>
                    <textarea name="textarea" rows="10" cols="50"></textarea>
                    {/* <input type="text" className="form-control mensaje input" id="exampleInputEmail1" aria-describedby="emailHelp"/> */}

                </div>

                <button type="submit" className="btn btn-success">Enviar</button>
            </form>


        </div>

     );
}

export default Form;