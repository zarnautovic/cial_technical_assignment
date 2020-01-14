import React from 'react';

import './Sidebar.css';

const sidebar = (props) => {
    console.log(props);

    let previousSearches = null;

    if (props.previousSearches) {
        previousSearches = (
            <div>
            {props.previousSearches.map((previousSearch, index) => {
              return <p key={index}>{previousSearch}</p>
            })}
          </div>
        );
    }

    return (
        <div className="Sidebar">
            <h3>Previous searches:</h3>
            {previousSearches}
        </div>
    );
};

export default sidebar;