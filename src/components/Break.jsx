import React, { useState } from 'react';
import moment from 'moment';

const Break = () => {
    const [breakLength, setBreakLength] = useState(300);

    const decrementBreakLengthByMinute = () => {
        const newBreakLength = breakLength - 60;

        if (newBreakLength < 0) {
            setBreakLength(0);
        }

        else {
            setBreakLength(newBreakLength);
        }
    };

    const incrementBreakLengthByMinute = () => {
        setBreakLength(breakLength + 60);
    };

    const breakLengthinMins = moment.duration(breakLength, 's').minutes();

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