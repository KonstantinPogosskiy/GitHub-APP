import React from "react";
import "./InitialScreen.css";

function InitialScreen (props) {
    return (
    <div className="main">
        <div className="container _main">
            <div className="initialScreen">
                <img src={props.find} alt="Handglass" className="handglass"/>
                <div className="text">
                    <p>Start with searching a GitHub user</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default InitialScreen;