import React, { Fragment } from 'react'
import Aboutmesvg from './Aboutmesvg'
import "./aboutme.css"

const AboutUs = () => {
    return (
        <Fragment>
            <div id="abt-container">
                <div className="abt-contents">
                    <div className="abt-con">
                    <img src="./svg/vignesh-min.png" alt="vignesh" />
                    <Aboutmesvg />
                    </div>
                    <div className="right-con">
                        <h1>Vignesh M R.</h1>
                        <p>I am a Developer ,who lives in Bangalore ,India.
I am a BCA graduate who is interested in creating ,virtual reality n learning a lot</p>
                        <div id="social-links">
                            <ul>
                            <li>
                                <a target="_blank" href="https://vigneshmr06.000webhostapp.com/">
                                <i class="far fa-address-book"></i>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://github.com/its-GoH">
                                <i class="fab fa-github"></i>
                                </a>
                                </li>
                            <li>
                                <a target="_blank" href="https://www.linkedin.com/in/vigneshmr06/">
                                <i class="fab fa-linkedin-in"></i>
                                </a>
                                
                            </li>
                            <li>
                                <a target="_blank" href="https://codepen.io/its-goh">
                                <i class="fab fa-codepen"></i>
                                </a> 
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AboutUs
