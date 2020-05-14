import React, {Component} from 'react';
import "../public/css/side.css";
import Calendar from './Calendar';

class SideDiv extends Component {
    render(){
        return (
            <div className="sideDiv" >
                <div className="loginForm" >
                    <h5>Login here</h5>
                    <form>
                        <input type="text" placeholder="username/ email"/>
                        <input type="password" placeholder="password"/>
                        <button type="button">
                            Login
                        </button>
                    </form>
                </div>
                <Calendar/>
            </div>
        )
    }
}

export default SideDiv
