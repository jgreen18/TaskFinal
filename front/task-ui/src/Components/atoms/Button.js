import React, { Component } from 'react'
// /**
//  * @property {String} type ["email", "password"]
//  */
class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }


    render() {
       

        return (
            <div className="">
                <button  {...this.props} >Ingresar</button>
            </div>
        )
    }
}
export default Button;
