import React, { Component } from 'react'
import {  Link } from "react-router-dom";


 class Header extends Component {
    render() {
        return (
            
            <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="nav navbar-nav">
              <Link className="nav-item nav-link active"   to={"/"}>Login</Link>
              <Link className="nav-item nav-link" to={"/sing-up"}>Crear usuarios</Link>
            </div>
          </nav>
        
        )
    }
}
export default Header;
