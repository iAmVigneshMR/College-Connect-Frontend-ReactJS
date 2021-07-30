import React, { Fragment } from 'react';
import "./cards.css";

const Cards = () => {
    return (
        <Fragment>
            <div className="letter-container">
                <div className="ltr-contents">
                    <h1>Designed to be used and loved by millions.</h1>
                </div>
            </div>
            <div className="card-container">
                <div className="card-contents">
                    <div className="con-contents">
                    <i class="fas fa-sign-in-alt"></i>
                    <h3>Sign Up</h3>
                    <p>sign in to make friends</p>
                    </div>
                    <div className="con-contents">
                    <i class="fas fa-users"></i>
                    <h3>connect</h3>
                    <p>make friends to chats and to see their posts</p>
                    </div>
                    <div className="con-contents">
                    <i class="far fa-comments"></i>
                    <h3>chats</h3>
                    <p>start chating with your friends</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Cards
