import React, { Component } from 'react'
/**
 * @property {String} type ["email", "password"]
 */
class Input extends Component {

     constructor(props){
        super(props);
        this.state = {
            
        }

     }

      
    render() {
        const { type } = this.props;
       let placeholder = "email";

        switch (type) {
            case "password":
                    placeholder= "password";
                break;
        
            default:
                break;
        }

        return (
            <div className="">
                <input  {...this.props} placeholder={placeholder}></input>
            </div>
        )
    }
}
export default Input;
