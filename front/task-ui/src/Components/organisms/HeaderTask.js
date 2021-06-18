import React, { Component } from 'react'
import {  Link } from "react-router-dom";


 class Headertask extends Component {
    render() {
        return (
            
            <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="nav navbar-nav">
              <Link className="nav-item nav-link active"   to={"/"}>Todas las tareas</Link>
              <Link className="nav-item nav-link" to={"/CompleteTask"}>Tareas completas</Link>
              <Link className="nav-item nav-link" to={"/IncompleteTask"}>Tareas incompletas</Link>
            </div>
          </nav>
        
        )
    }
}
export default Headertask;
