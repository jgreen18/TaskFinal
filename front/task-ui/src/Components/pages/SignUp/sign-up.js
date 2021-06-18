import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import Header from "../../organisms/Header"
import "./sign-up.css"
import { setToken,  } from "../../../utils/auth/Token";
import { signupService } from "../../../utils/api/services";
import Button from '../../atoms/Button';






class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: "",
            email: "",
            pass: "",
            date_birth: "",
            address: ""
        }
    }
    
    handleOnInputChange = (key, event) => {
        this.setState({

            [key]: event.target.value,
        });
    };
    handledSingUp = async () => {

        const { user_name,email ,pass,date_birth,address} = this.state;
        let loginResponse = await signupService(user_name,email ,pass,date_birth,address);
        if (loginResponse?.success) {
            setToken(loginResponse.data.data.token);
            this.props.history.push("/allTask");
        }
    };

    render() {

        return (
            <div className="card-header">


                <Header />
                <div className="card">
                    <div className="card-header">
                        <h3>Registrar usuario</h3>
                    </div>
                    <div className="card">
                        <form>
                            <div className="form-group">
                                <label htmlFor="">Nombre de usuario</label>
                                <input type="text"onChange={(event) => this.handleOnInputChange('user_name', event)} name="user_name" id="nombre" className="form-control" placeholder="Nombre de usuario" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Correo de usuario</label>
                                <input type="email" onChange={(event) => this.handleOnInputChange('email', event)} name="email" id="correo" className="form-control" placeholder="example@domain.com" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Contraseña</label>
                                <input type="password" onChange={(event) => this.handleOnInputChange('pass', event)} name="pass" id="contraseña" className="form-control" placeholder="***" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Fecha de nacimiento</label>
                                <input type="date" name="date_birth"onChange={(event) => this.handleOnInputChange('date_birth', event)} id="birth" className="form-control" placeholder="dd/mm/aaaa" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Dirección</label>
                                <input type="text" onChange={(event) => this.handleOnInputChange('address', event)} name="address" id="domicilio" className="form-control" placeholder="c example #xy col example " aria-describedby="helpId" />
                            </div>
                            <br></br>
                            <div className="btn-group" role="group" aria-label="">
                            <Button type="button" onClick={this.handledSingUp} className="btn btn-outline-success">Success</Button>
                               
                            </div>
                        </form>
                    </div>
                    <div className="card-footer text-muted">
                        Administrador de tareas |
                        Desarrollado por J. Green & A. Martínez
                    </div>
                </div>
                </div>  
                )
    }
}
                export default withRouter(Signup);