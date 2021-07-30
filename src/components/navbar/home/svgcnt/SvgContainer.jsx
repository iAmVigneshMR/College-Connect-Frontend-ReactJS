import React, { Fragment } from 'react'
import Icon1 from './Icon1'
import Icon2 from './Icon2';
import Icon3 from './Icon3';
import "./svg.css";

const SvgContainer = () => {
    return (
        <Fragment>
            <div className="svg-container">
                <div className="svg-contents">
                    <div className="img-svg">
                        <Icon1 />
                    </div>
                    <div className="con-contents">
                        <h1>Find Friends Online</h1>
                        <p>Find new friends based on common college, location, age and more. ... Events to Virtual Experiences,
                             mingle with people from around the world online.</p>
                        <h3>Quotes for Internet friends</h3>
                        <p>
“I do have friends. Maybe they live hundreds of miles away from me, and maybe I can only talk to them through a screen, but they're still my friends.” “The coolest thing about 
fandom is the friendships made along the way with people who share your passions.”</p>
                    </div>
                </div>
                <div className="svg-contents">
                    <div className="img-svg">
                        <Icon2 />
                    </div>
                    <div className="con-contents">
                        <h1>Group Chat</h1>
                        <p>Online Group chat rooms and private chatting. 
                            One click later they are in their private chat room waiting for ..</p>
                        <h3>Start Chattting</h3>
                        <p>Sometimes conversations are best in message 
                            board forma. Our forums are a great way to start 
                            long conversations without needing to online at the same time. Simply pick a topic,
                             and decide to post a message, emoji or participate in a discussion. You can also like messages 
                            to show your support. Liking a message will also save it so you can read later. 
</p>
                    </div>
                </div>
                <div className="svg-contents">
                    <div className="img-svg">
                        <Icon3 />
                    </div>
                    <div className="con-contents">
                        <h1>Explore Posts</h1>
                        <p>Posts your memories with friends, explore the posts and see what your friends are upto</p>
                        <h3>Posts your memories</h3>
                        <p>Posts what you are upto ,share the posts, jokes,and much more</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SvgContainer
