
import React, { Component } from 'react'
import { withRouter ,Link} from "react-router-dom";
import { AddTaskService} from "../../../../utils/api/services";
import Button from '../../../atoms/Button';



class AddTask extends Component {
    constructor(props){
        super(props);
        this.state = {
            // token: getToken,
            title: "", 
            descript : "", 
            start_date: "", 
            end_date: "",
             estado: "",

        }
    }

   
    handleOnInputChange = (key, event) => {
        this.setState({

            [key]: event.target.value,
        });
    };
    handledAddTask = async () => {

        const { title, descript, start_date, end_date, estado} = this.state;
        let loginResponse = await AddTaskService(title, descript, start_date, end_date, estado);
        if (loginResponse?.success) {
            // setToken(loginResponse.data.data.token);
            this.props.history.push("/allTask");
        }
    };

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h3>Agregar tarea</h3>
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
                            <label htmlFor="">Fecha de inicio</label>
                            <input onChange={(event) => this.handleOnInputChange('start_date', event)} type="date" name="start_date"  id="st_date" className="form-control" placeholder="dd/mm/aaaa" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Fecha limite</label>
                            <input onChange={(event) => this.handleOnInputChange('end_date', event)} type="date" name="end_date"  id="end_date" className="form-control" placeholder="dd/mm/aaaa" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Estado</label>
                            <input onChange={(event) => this.handleOnInputChange('estado', event)} type="text" name="estado" id="estado" className="form-control" placeholder="Complete/Incomplete" aria-describedby="helpId" />
                        </div>
                        <br></br>
                        <div className="btn-group" role="group" aria-label="">
                        <Button type="button" onClick={this.handledAddTask} className="btn btn-outline-success">Agregar Tarea</Button>
                        <Link to="allTask" className="btn btn-primary">Cancelar</Link>
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

export default withRouter(AddTask)

