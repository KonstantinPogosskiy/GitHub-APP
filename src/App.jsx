import React, {useState} from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {URL} from "./constants/constants";
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
                logo={'/images/Frame.svg'}
                find={'/images/glass.svg'}
                getUser={requestUsers}
            />
            <Main
                reposIsEmpty={'/images/repos_empty.svg'}
                usersIsEmpty={'/images/users_empty.svg'}
                find={'/images/glass.svg'}
                isFetching={isFetching}
                users={data.user}
                repos={data.repo}
                followers={'/images/followers.svg'}
                following={'/images/following.svg'}
            />
        </div>
    );
}

export default App;
