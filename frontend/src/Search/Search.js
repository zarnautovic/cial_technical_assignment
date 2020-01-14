import React from 'react';

import './Search.css';

const search = (props) => {
    return (
        <div className="Search">
            <input value={props.searchParam} onChange={props.onInputChange}></input>
            <button onClick={props.click}>Search</button>
        </div>
    );
};

export default search;