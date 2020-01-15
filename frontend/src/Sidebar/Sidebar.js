import React from 'react';

import './Sidebar.css';
import HistoryItem from '../HistoryItem/HistoryItem'; 

const sidebar = (props) => {

    let previousSearches = null;

    if (props.previousSearches) {
        previousSearches = (
            <div>
            {props.previousSearches.map((previousSearch, index) => {
              return <HistoryItem
                historySearch={previousSearch}
                key={index}
              />
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