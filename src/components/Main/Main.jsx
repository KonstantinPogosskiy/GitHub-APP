import React from "react";
import RepositoryArea from "../RepositoryArea/RepositoryArea";
import ProfileArea from "../ProfileArea/ProfileArea";
import style from './Main.module.css';
import UserNotFound from "../UI/UserNotFound/UserNotFound";
import Preloader from "../UI/Preloader/Preloader";
import InitialScreen from "../UI/InitialScreen/InitialScreen";

const Main = (props) => {
    if (props.isFetching === true) {
        return <Preloader/>
    }
    if (props.users.length === 0) {
        return <InitialScreen find={props.find}/>
    }
    if (!props.users.hasOwnProperty('id')) {
        return <UserNotFound usersIsEmpty={props.usersIsEmpty}/>
    }
    return (
        <div className={style.main}>
            <div className={style.container}>
                <ProfileArea
                    users={props.users}
                    followers={props.followers}
                    following={props.following}
                />
                <RepositoryArea
                    offset={props.offset}
                    repos={props.repos}
                    reposIsEmpty={props.reposIsEmpty}
                />
            </div>
        </div>

    )
}

export default Main;