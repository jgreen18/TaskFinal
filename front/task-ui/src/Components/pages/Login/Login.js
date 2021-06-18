import React, { Component } from 'react'
// import Input from "../atoms/Input";
import Button from '../../atoms/Button';
import img from "../../pages/usuario.png";
import Header from "../../organisms/Header"
import { loginService } from "../../../utils/api/services";
import { withRouter} from "react-router-dom";
import { setToken } from "../../../utils/auth/Token";

import "./login.css";

class Login extends Component {


    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",



        };
        // this.override = true;

    }
    handleLogin = async () => {

        const { email, password } = this.state;
        let loginResponse = await loginService(email, password);
        if (loginResponse?.success) {
            setToken(loginResponse.data.data.token);
            this.props.history.push("/allTask");
        }
    };
    handleSingUp = () => {


        this.props.history.push("/signUp");

    };

    handleOnInputChange = (key, event) => {
        this.setState({

            [key]: event.target.value,
        });
    };




    render() {
        return (


            <div className="body">

                <Header />


                <div className="modal-dialog text-center">
                    <img src={img} alt="user" />



                    <div className="modal-content">

                        <form className="col-12">

                            <input type="email" onChange={(event) => this.handleOnInputChange('email', event)} className="form-control" key={'email'}  placeholder={'email'}>
                            </input>
                            <input onChange={(event) => this.handleOnInputChange('password', event)} className="form-control" key={'password'} type={'password'} placeholder={'password'}>
                            </input>

                            <Button type="button" onClick={this.handleLogin} className="btn btn-outline-success">Success</Button>

                        </form>

                    </div>

                </div>
            </div>





        )
    }
}
export default withRouter(Login);
