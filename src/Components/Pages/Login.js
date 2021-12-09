import React, { Component } from 'react';
import fsdlogo from '../../images/FSDLogo.png'

export default class Login extends Component {
    render() {
        return (
            <div className="login-container">
                <form className="login-form">
                    <img src={fsdlogo} alt="FarsideDev Logo" style={{height: '100px'}}/>
                    <label className="lf-label">
                        Username
                        <input className="lf-input" type='text'/>
                    </label>

                    <label className="lf-label">
                        Password
                        <input className="lf-input" type='password'/>
                    </label>

                    <input className="lf-btn" type='submit' value='login'></input>
                </form>
            </div>
        )
    }
}

