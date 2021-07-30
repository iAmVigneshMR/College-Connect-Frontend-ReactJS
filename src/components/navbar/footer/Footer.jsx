import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"

const Footer = () => {
    return (
        <Fragment>
            <div id="container">
                <div className="contents">
                    <div className="logo">
                        <h1>College</h1>
                        <img src="./connect.png" alt="connect" />
                    </div>
                    <div className="quick-links">
                        <h3>Quick Links : </h3>
                        <ul>
                            <li><Link to="/chats" className="lnk"><i class="fas fa-arrow-right"></i> Chats</Link></li>
                            <li><Link to="/posts" className="lnk"><i class="fas fa-arrow-right"></i> Posts</Link></li>
                            <li><Link to="/aboutme" className="lnk"><i class="fas fa-arrow-right"></i> About Me</Link></li>
                            <li><Link to="/login" target="_blank" className="lnk"><i class="fas fa-arrow-right"></i> Login</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="lst">
                <a href="https://vigneshmr06.000webhostapp.com/">Vignesh M R</a>
            </div>
        </Fragment>
    )
}

export default Footer
