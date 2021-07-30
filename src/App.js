import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './components/aboutus/AboutUs';
import Chats from './components/chats/Chats';
import Login from './components/login/Login';
import Signup from './components/login/Signup';
import Footer from './components/navbar/footer/Footer';
import Navbar from './components/navbar/nav/Navbar'
import Posts from './components/posts/Posts';
import PageNotFound from './pages/404';
import Home from './pages/Home'
import './pages/pages.css'

const App = () => {
    return (
        <Fragment>
            <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/chats" exact>
                    <Chats />
                </Route>
                <Route path="/posts" exact>
                    <Posts />
                </Route>
                <Route path="/aboutme" exact>
                    <AboutUs />
                </Route>
                <Route path="/login" exact>
                    <Login />
                </Route> 
                <Route path="/signup" exact>
                    <Signup />
                </Route> 
                <Route path="*" exact>
                    <PageNotFound />
                </Route>
            </Switch>
            <Footer />
            </Router>
        </Fragment>
    )
}

export default App
