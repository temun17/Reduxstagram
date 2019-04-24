import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = (props) => {
    return (
        <figure className="grid-figure">
            <div className="grid-photo-wrap">
                <Link to={`/view/${props.posts.code}`}>
                    <img src={props.posts.display_src} alt={props.posts.caption} className="grid-photo"/>
                </Link>
                <CSSTransitionGroup transitionName="like"
                                    transitionEnterTimeout={500}
                                    transitionLeaveTimeout={500}>
                                    <span key={props.posts.likes} className="likes-heart">
                                        {props.posts.likes}
                                    </span>
                </CSSTransitionGroup>

            </div>
            <figcaption>
                <p>{props.posts.caption}</p>
                <div className="control-buttons">
                    <button onClick={props.increment.bind(null, props.index)} className="likes">&hearts; {props.posts.likes}</button>
                    <Link className="button" to={`/view/${props.posts.code}`}>
                    <span className="comment-count">
                        <span className="speech-bubble">
                            {props.comments[props.posts.code] ? props.comments[props.posts.code].length : 0}
                        </span>
                    </span>
                    </Link>
                </div>
            </figcaption>
        </figure>
    );
}

export default Photo;