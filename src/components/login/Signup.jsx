import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import LoginSvg1 from './LoginSvg1'
import Signupsng from './Signupsng'
import "./login.css"

const Signup = () => {
    return (
        <Fragment>
            <div id="log-container">
                <div className="log-contents">
                    <div className="svg-contents">
                        <Signupsng />
                    </div>
                    <div className="form-contents">
                       <div className="frm">
                       <form>
                            <img src="./svg/avatar2.svg" alt="svg" /><br />
                            <input type="text" placeholder="UserName Or Email" /><br />
                            <input type="Password" placeholder="Password" /><br />
                            <input type="Password" placeholder="Confirm Password" />
                            <p><Link to="./login" className="clr">Already have an Account ? Login</Link></p>
                            <button className="btn-4">SignUp</button>
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

export default Signup
