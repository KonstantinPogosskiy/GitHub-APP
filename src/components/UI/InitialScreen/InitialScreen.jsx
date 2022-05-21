import React from "react";
import style from "./InitialScreen.module.css";

function InitialScreen (props) {
    return (
    <div className={style.main}>
        <div className={style.container}>
            <div className={style.initialScreen}>
                <img src={props.find} alt="find" className={style.find}/>
                <div className={style.text}>
                    <p>Start with searching a GitHub user</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default InitialScreen;