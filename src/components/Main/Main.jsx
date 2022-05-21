import React from "react";
import RepositoryArea from "../RepositoryArea/RepositoryArea";
import ProfileArea from "../ProfileArea/ProfileArea";
import './Main.css';
import UserNotFound from "../UI/UserNotFound/UserNotFound";
import Preloader from "../UI/Preloader/Preloader";

const Main = (props) => {
    if(props.users.hasOwnProperty('id')) {
        return <UserNotFound usersIsEmpty={props.usersIsEmpty}/>
    }
    return (
        (!props.isFetching === true)
            ?
            <Preloader/>
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