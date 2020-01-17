import React from 'react';
import Link from '@material-ui/core/Link';

import './HistoryItem.css';

const historyItem = ( props ) => {
    return (
        <div className="history-item">
            <Link onClick={() => props.click(props.historySearch)}>{props.historySearch}</Link>
        </div>
    );
};

export default historyItem;

