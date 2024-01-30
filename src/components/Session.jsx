import React, { useState } from 'react';
import moment from 'moment';

const Session = () => {
    const [sessionLength, setSessionLength] = useState(60*25);

    const decrementSessionLengthByMinute = () => {
        const newSessionLength = sessionLength - 60;

        if (newSessionLength < 0) {
            setSessionLength(0);
        }

        else {
            setSessionLength(newSessionLength);
        }
    };

    const incrementSessionLengthByMinute = () => {
        setSessionLength(sessionLength + 60);
    };

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