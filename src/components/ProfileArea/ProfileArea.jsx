import React from "react";
import Profile from "../Profile/Profile";
import './ProfileArea.css';

const ProfileArea = (props) => {
    return (
        <div className="profileArea">
            <Profile
                users={props.users}
                followers={props.followers}
                following={props.following}
            />
        </div>
    )
}

export default ProfileArea;