import React from "react";
import SearchingForm from "../UI/SearchingForm/SearchingForm";
import './Header.css';

function Header(props) {
    return (
        <div className="header">
            <div className="container _header">
                <img src={props.logo} alt="git" className="logo"/>
                <SearchingForm
                    getUser={props.getUser}
                />
            </div>
        </div>
    )
}

export default Header;