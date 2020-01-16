import React from 'react';

import './HistoryItem.css';

const historyItem = ( props ) => {
    return (
        <div className="HistoryItem">
            <p onClick={() => props.click(props.historySearch)}>{props.historySearch}</p>
        </div>
    );
};

export default historyItem;

