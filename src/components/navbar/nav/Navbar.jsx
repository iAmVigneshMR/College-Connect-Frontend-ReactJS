import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import "./nav.css";

const Navbar = () => {
    const [ showLinks,setShowlinks] = useState(false);
    return (
        <Fragment>
            <div id="nav-container">
                <div className="nav-contents">
                    <div className="left-contents">
                        <Link to="/"><img src="./connect.png" alt="lOGO" /></Link>
                    </div>
                        <button onClick={() => setShowlinks(!showLinks)} className="btn"><i class="fas fa-bars"></i></button>    
                    <div className="right-contents" id={showLinks ? "hidden" : ""}>
                        <ul>
                            <li><Link to="/" className="lnk">home</Link></li>
                            <li><Link to="/chats" className="lnk">Chats</Link></li>
                            <li><Link to="/posts" className="lnk">Posts</Link></li>
                            <li><Link to="/aboutme" className="lnk">About Me</Link></li>
                            <li><Link to="/login"><button className="btn-2">Login</button></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar
