import axios from 'axios';
import React, { Component } from 'react'
import * as moment from "moment";
import { Link, withRouter } from "react-router-dom";
import { getToken } from '../../../../utils/auth/Token';
import "./alltask.css";
import { deleteToken } from "../../../../utils/auth/Token";
import Headertask from "../../../organisms/HeaderTask";
class AllTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tareas: [{
                id_task: "",
                title: "",
                descript: "",
                start_date: "",
                end_date: "",
                estado: "",
                Users_id_user: ""
            }]


        }
    }



    componentDidMount() {
        axios.get('http://localhost:3000/task//ViewIncompleteTask', {
            headers: {
                authorization: getToken()
            }
        }).then(res => {
            var tareas = res.data.data;
            console.log(tareas);
            if (tareas?.length) { this.setState({ tareas }); }
        }).catch((error) => {
            console.log(error.response.data);
        })

    }
    handleEToken = () => {
        deleteToken();
        this.props.history.push("/");
      };
      handleUpdate = () => {
        
        this.props.history.push("/UpdateTask");
      };

      handleBorrar(data) {
        axios.put(`http://localhost:3000/task/deleteTask`, { id_task: data }, {
            headers: {
                authorization: getToken()
            }

        }).then(res => {
            this.componentDidMount();
            alert(res.data.message)

        }).catch((error) => {
            console.log(error.response);
        })
    }

   

    render() {
        return (
            <div className="card">
<Headertask/>
                <div className="card-header">
                    <h3>Lista de Tareas Incompletas</h3>

                    <button type="button" id="btn" onClick={this.handleEToken} className="btn btn-success ">Cerrar sesión</button>
                </div>
                <div className="card-body">
                    <Link to="/AddTask" className="btn btn-success">Agregar tarea</Link>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Título</th>
                                <th>Descripción</th>
                                <th>Fecha de inicio</th>
                                <th>Fecha límite</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.tareas.map((task) => {
                                return (
                                    <tr key={`tarea-${task.id_task}`}>
                                        <td>{task.id_task}</td>
                                        <td>{task.title}</td>
                                        <td>{task.descript}</td>
                                        <td>{task.start_date = moment(task.start_date).format('DD/MM/YYYY')}</td>
                                        <td>{task.end_date = moment(task.end_date).format('DD/MM/YYYY ')}</td>
                                        <td>{task.estado}</td>
                                        <td>      <div className="btn-group" role="group" aria-label="">
                                            <button type="button" onClick={this.handleUpdate}className="btn btn-warning">Editar tarea</button>
                                            <button type="button" onClick={() =>this.handleBorrar(task.id_task)} className="btn btn-danger">Eliminar</button>
                                        </div>
                                        </td>
                                    </tr>
                                );
                            })}



                        </tbody>
                    </table>
                </div>
                <div className="card-footer text-muted">
                    Administrador de tareas |
                    Desarrollado por J. Green & A. Martínez
                </div>
            </div>


        )
    }
}
export default withRouter(AllTask);
