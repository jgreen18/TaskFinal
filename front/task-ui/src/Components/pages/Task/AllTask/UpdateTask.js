
import React, { Component } from 'react'
import { withRouter , Link } from "react-router-dom";
import {setToken} from"../../../../utils/auth/Token"
import { AddTaskService} from "../../../../utils/api/services"

class UpdateTask extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "", 
            descript : "", 
            start_date: "", 
            end_date: "",
             estado: "",

        }
    }
    handledCancelar = () => {
        
        this.props.history.push("/alltask");
      };

    handleOnInputChange = (key, event) => {
        this.setState({

            [key]: event.target.value,
        });
    };
    handledUpdateTask = async () => {

        const { title, descript, start_date, end_date, estado} = this.state;
        let loginResponse = await AddTaskService(title, descript, start_date, end_date, estado);
        if (loginResponse?.success) {
            setToken(loginResponse.data.data.token);
            this.props.history.push("/allTask");
        }
    };

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h3>Actualizar tarea</h3>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="">Título</label>
                            <input onChange={(event) => this.handleOnInputChange('title', event)} type="text" name="title" id="title" className="form-control" placeholder="Título de la tarea" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Descripción</label>
                            <input onChange={(event) => this.handleOnInputChange('descript', event)} type="text" name="descript" id="descript" className="form-control" placeholder="Descripción" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Inicio de tarea</label>
                            <input onChange={(event) => this.handleOnInputChange('start_date', event)} type="date" name="st_date"  id="st_date" className="form-control" placeholder="dd/mm/aaaa" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Fin de tarea</label>
                            <input onChange={(event) => this.handleOnInputChange('end_date', event)} type="date" name="end_date"  id="end_date" className="form-control" placeholder="dd/mm/aaaa" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Estado</label>
                            <input onChange={(event) => this.handleOnInputChange('estado', event)} type="text" name="estado" id="estado" className="form-control" placeholder="Complete/Incomplete" aria-describedby="helpId" />
                        </div>
                        <br></br>
                        <div className="btn-group" role="group" aria-label="">
                        <button type="submit" className="btn btn-success">Actualizar tarea</button>
                        {/* <button type="submit"  onClick={this.handledCancelar} className="btn btn-success">Cancelar</button> */}
      

                            <Link to="/allTask" className="btn btn-primary">Cancelar</Link>
                        </div>
                    </form>
                </div>
                <div className="card-footer text-muted">
                    Administrador de tareas |
                    Desarrollado por J. Green & A. Martínez
                </div>
            </div>
        )
    }
}
export default UpdateTask;