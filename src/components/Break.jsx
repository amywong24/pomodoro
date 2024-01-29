import React, { useState } from 'react';

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

    return (
        <div className="break-container">
            <p id="break-label">Break</p>
            <p id="break-length">{breakLength}</p>
            <button id="break-decrease" onClick={decrementBreakLengthByMinute}><span>-</span></button>
            <button id="break-increase" onClick={incrementBreakLengthByMinute}><span>+</span></button>
        </div>
    );
};

export default Break;