import React from 'react';
import moment from 'moment';

const Session = ({ sessionLength, incrementSessionLengthByMinute, decrementSessionLengthByMinute }) => {
    const sessionLengthinMins = moment.duration(sessionLength, 's').minutes();

    return (
        <div className="session-container">
            <p id="session-label">Session</p>
            <p id="session-length">{sessionLengthinMins}</p>
            <button id="session-decrease" onClick={decrementSessionLengthByMinute}><span>-</span></button>
            <button id="session-increase" onClick={incrementSessionLengthByMinute}><span>+</span></button>
        </div>
    );

};

export default Session;