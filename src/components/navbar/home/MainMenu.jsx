import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import "./mainmenu.css"

const MainMenu = () => {
    return (
        <Fragment>
            <div id="img-main">
                <img src="./frd1.jpg" alt="main images" />
                <div className="main-contents">
                    <h1>College Connect</h1>
                    <p className="p1">It's an Online Plateform to find Friends</p>
                    <p>Find someone who can become your Friend online or from your College</p>
                    <Link to="/login"><button className="btn-3">get started</button></Link>
                </div>
            </div>
        </Fragment>
    )
}

export default MainMenu
