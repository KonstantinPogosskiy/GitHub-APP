import React, {useState} from "react";
import './SearchingForm.css';

const SearchingForm = (props) => {

    const [searchValue, setSearchValue] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.getUser(searchValue);
        setSearchValue('')
    }


    return (
        <form onSubmit={handleSubmit}>
            <img
                src='/images/Handglass.svg'
                alt='handglass'
                width="14"
                height="14"/>
            <input
                className="input"
                placeholder="Enter GitHub username"
                onChange={handleChange}
                value={searchValue}
            >
            </input>
        </form>
    )
}

export default SearchingForm;