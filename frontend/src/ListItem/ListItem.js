import React from 'react';

import './ListItem.css';

const listItem = ( props ) => {
    return (
        <div className="ListItem">
            <a href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</a>
        </div>
    );
};

export default listItem;