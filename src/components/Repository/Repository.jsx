import React from "react";
import './Repository.css';

function Repository(props) {
    return (
        <div className="repository">
            <a
                href={props.repos.html_url}
                target="_blank"
                rel="noreferrer"
            >
                {props.repos.name}
            </a>
            <p>
                {props.repos.description ?
                    props.repos.description :
                    "This repository has no description"}
            </p>
        </div>
    )
}

export default Repository;