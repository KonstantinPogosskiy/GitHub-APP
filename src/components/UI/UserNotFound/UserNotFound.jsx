import React from 'react';
import style from './UserNotFound.css';

const UserNotFound = (props) => {
    return (
        <div className ="wrapper">
            <div className = "content">
                <img src={props.usersIsEmpty} alt="empty"/>
                <p>User not found</p>
            </div>
        </div>
    )
}

export default UserNotFound