import React from "react";
import RepositoryArea from "../RepositoryArea/RepositoryArea";
import ProfileArea from "../ProfileArea/ProfileArea";
import './Main.css';
import UserNotFound from "../UI/UserNotFound/UserNotFound";

const Main = (props) => {
    return (
        !props.users.hasOwnProperty('id')
            ?
            <UserNotFound usersIsEmpty={props.usersIsEmpty}/>
            :
            <div className="main">
                <div className="container">
                    <ProfileArea
                        users={props.users}
                        followers={props.followers}
                        following={props.following}
                    />
                    <RepositoryArea
                        repos={props.repos}
                        repoIsEmpty={props.repoIsEmpty}
                    />
                </div>
            </div>

    )


}

export default Main;