import React from 'react';
import './ReposNotFound.css';

const ReposNotFound = (props) => {
    return (
        <div className = "wrapper">
            <div className = "content">
                <img src={props.reposIsEmpty} alt="empty"/>
                <p>Repository list is empty</p>
            </div>
        </div>
    )
}

export default ReposNotFound