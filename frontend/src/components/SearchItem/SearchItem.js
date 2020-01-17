import React from 'react';
import Link from '@material-ui/core/Link';

import './SearchItem.css';

const searchItem = ( props ) => {
    return (
        <div className="search-item">
            <Link href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</Link>
        </div>
    );
};

export default searchItem;