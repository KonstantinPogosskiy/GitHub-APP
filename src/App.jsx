import React, {useState} from "react";
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {URL} from "./constants/constants";

const App = () => {

    const [data, setData] = useState({user: {}, repo: []});

    const requestUsers = (userName) => {
        Promise.all([
            fetch(`${URL}${userName}`).then(r => r.json()),
            fetch(`${URL}${userName}/repos?per_page=100`).then(r => r.json()),
        ])
            .then(data => {
                setData({user:data[0], repo:data[1]})
            })
    }
    return (
        <div className="App">
            <Header
                logo={'/images/Frame.svg'}
                getUser={requestUsers}
            />
            <Main
                find={'/images/Handglass.svg'}
                users={data.user}
                repos={data.repo}
                followers={'/images/Followers.svg'}
                following={'/images/Following.svg'}
            />
        </div>
    );
}

export default App;
