import React from "react";
import './Profile.css'
import {roundNumber} from '../../utils/math'

function Profile(props) {

    return (
        <div className="profile">
            <img className="avatar" alt="avatar" src={props.users.avatar_url} />
            <p className="username">{props.users.name}</p>
            <a href={props.users.html_url} target="_blank" className="login">{props.users.login}</a>
            <div className="follow">
                <div className="followers">
                    <img src={props.followers} alt="followers" width="22" height="14"/>
                    <span>{roundNumber(props.users.followers)}</span> followers
                </div>
                <div className="following">
                    <img src={props.following} alt="following" width="16" height="16"/>
                    <span>{roundNumber(props.users.following)}</span> following
                </div>
            </div>
        </div>
    )
}

export default Profile;