import React from 'react';
import style from './UserNotFound.module.css';

const UserNotFound = (props) => {
    return (
        <div className ={style.wrapper}>
            <div className = {style.content}>
                <img src={props.usersIsEmpty} alt="empty"/>
                <p>User not found</p>
            </div>
        </div>
    )
}

export default UserNotFound