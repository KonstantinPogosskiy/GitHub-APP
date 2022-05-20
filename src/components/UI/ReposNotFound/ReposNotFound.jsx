import React from 'react';
import style from './ReposNotFound.css';

const ReposNotFound = (props) => {
    return (
        <div className = {style.wrapper}>
            <div className = {style.content}>
                <img src={props.repoIsEmpty} alt="empty"/>
                <p>Repository list is empty</p>
            </div>
        </div>
    )
}

export default ReposNotFound