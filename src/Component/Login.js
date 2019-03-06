import React, { Component } from 'react';

import './Login.css';

class Login extends Component {
    constructor(){
        super();

        this.state = {
            username: "",
            password: ""
        };

    }

    handleUsernameChange = (name) => {
        this.setState({username: name});
    };

    handlePasswordChange = (pass) => {
        this.setState({password: pass});
    };

    handleLogin = () => {
        alert(`Username: ${ this.state.username} Password: ${ this.state.password}`);
    }

    render(){
        return(
            <div className = "Login_Card">
                <div className = "Top_Section">
                    <p className = "Title_Text"> Login Section </p>
                </div>
                <div className = "Middle_Section">
                    <div className = "Middle_Text"> Higher </div>
                    <div className = "Middle_Text"> Further </div>
                    <div className = "Middle_Text"> Faster </div>
                </div>
                <div className = "Bottom_Section"></div>
                <div></div>
            </div>
        )
    }
}

export default Login;