import React from "react";
import SearchingForm from "../UI/SearchingForm/SearchingForm";
import style from './Header.module.css';

function Header(props) {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <img
                    src={props.logo}
                    alt="git"
                    className={style.logo}
                />
                <SearchingForm
                    getUser={props.getUser}
                    find={props.find}
                />
            </div>
        </div>
    )
}

export default Header;