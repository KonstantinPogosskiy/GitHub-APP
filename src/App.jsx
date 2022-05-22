import React, {useState} from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {URL} from "./constants/constants";
import gitLogo from './assets/frame.svg';
import glass from './assets/glass.svg';
import reposIsEmpty from './assets/repos_empty.svg';
import usersIsEmpty from './assets/users_empty.svg';
import followers from './assets/followers.svg';
import following from './assets/following.svg';
import './App.css';

const App = () => {

    const [data, setData] = useState({user: [], repo: []});
    const [isFetching, setIsFetching] = useState(false);

    const requestUsers = (userName) => {

        setIsFetching(true)

        Promise.all([
            fetch(`${URL}${userName}`).then(r => r.json()),
            fetch(`${URL}${userName}/repos?page=0&per_page=100`).then(r => r.json()),
        ])
            .then(data => {
                setData({user: data[0], repo: data[1]})
                setIsFetching(false)
            })
    }
    return (
        <div className="App">
            <Header
                logo={gitLogo}
                find={glass}
                getUser={requestUsers}
            />
            <Main
                reposIsEmpty={reposIsEmpty}
                usersIsEmpty={usersIsEmpty}
                find={glass}
                isFetching={isFetching}
                users={data.user}
                repos={data.repo}
                followers={followers}
                following={following}
            />
        </div>
    );
}

export default App;
