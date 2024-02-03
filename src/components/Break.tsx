import React from 'react';
import moment from 'moment';

const Break: React.FC<Props> = ({breakLength, decrementBreakLengthByMinute, incrementBreakLengthByMinute}) => {
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

type Props = {
    breakLength: number
    decrementBreakLengthByMinute: () => void
    incrementBreakLengthByMinute: () => void
}

export default Break;