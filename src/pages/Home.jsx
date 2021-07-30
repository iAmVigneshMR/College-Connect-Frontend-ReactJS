import React, { Fragment } from 'react'
import Cards from '../components/navbar/home/maincontents/Cards'
import MainMenu from '../components/navbar/home/MainMenu'
import SvgContainer from '../components/navbar/home/svgcnt/SvgContainer'
import "./pages.css"

const Home = () => {
    return (
        <Fragment>
            <div id="img-bac">
                <img src="./bac.jpg" alt="img" />
            </div>
            <MainMenu />
            <Cards />
            <SvgContainer />
        </Fragment>
    )
}

export default Home
