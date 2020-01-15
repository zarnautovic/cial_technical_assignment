import React from 'react';

import './HistoryItem.css';

const historyItem = ( props ) => {
    return (
        <div className="HistoryItem">
            <p>{props.historySearch}</p>
        </div>
    );
};

export default historyItem;

