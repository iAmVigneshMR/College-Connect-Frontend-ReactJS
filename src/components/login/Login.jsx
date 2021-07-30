import React, { Fragment } from 'react'
import LoginSvg1 from './LoginSvg1'
import "./login.css"
import Loginsvg2 from './Loginsvg2'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <Fragment>
            <div id="log-container">
                <div className="log-contents">
                    <div className="svg-contents">
                        <Loginsvg2 />
                    </div>
                    <div className="form-contents">
                       <div className="frm">
                       <form>
                            <img src="./svg/avatar.svg" alt="svg" /><br />
                            <input type="text" placeholder="UserName" /><br />
                            <input type="Password" placeholder="Password" />
                            <p><Link to="./signup" className="clr">Don't have an Account ? SignUp</Link></p>
                            <button className="btn-4">Login</button>
                        </form>
                       </div>
                    </div>
                </div>
            </div>
            <div className="sec-div">
                <LoginSvg1 />                      
            </div>
        </Fragment>
    )
}

export default Login
