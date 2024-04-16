import React from 'react';
import moment from 'moment';

const Break = ({ breakLength, decrementBreakLengthByMinute, incrementBreakLengthByMinute }) => {
    const breakLengthinMins = moment.duration(breakLength, 's').asMinutes();

    return (
        <div className="break-container">
            <p id="break-label">Break</p>
            <p id="break-length">{breakLengthinMins}</p>
            <button id="break-decrease" onClick={decrementBreakLengthByMinute}><span>-</span></button>
            <button id="break-increase" onClick={incrementBreakLengthByMinute}><span>+</span></button>
        </div>
    );
};

export default Break;
