import React from "react";
import './Main.css';
import InitialScreen from "../InitialScreen/InitialScreen";
import RepositoryArea from "../RepositoryArea/RepositoryArea";
import ProfileArea from "../ProfileArea/ProfileArea";

const Main = (props) => {
    if (props.users.hasOwnProperty('id')) {
        return (
            <div className="main">
                <div className="container">
                    <ProfileArea
                        users={props.users}
                        followers={props.followers}
                        following={props.following}
                    />
                    <RepositoryArea repos={props.repos} />
                </div>
            </div>
        )
    }
    return (
        <InitialScreen find={props.find}/>
    )
}

export default Main;