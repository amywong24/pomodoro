import React from 'react';
import moment from 'moment';

const Session: React.FC<Props> = ({ sessionLength, incrementSessionLengthByMinute, decrementSessionLengthByMinute }) => {
    const sessionLengthinMins = moment.duration(sessionLength, 's').asMinutes();

    return (
        <div className="session-container">
            <p id="session-label">Session</p>
            <p id="session-length">{sessionLengthinMins}</p>
            <button id="session-decrease" onClick={decrementSessionLengthByMinute}><span>-</span></button>
            <button id="session-increase" onClick={incrementSessionLengthByMinute}><span>+</span></button>
        </div>
    );

};

type Props = {
    sessionLength: number
    incrementSessionLengthByMinute: () => void
    decrementSessionLengthByMinute: () => void
}

export default Session;