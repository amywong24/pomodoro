import React from "react";
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup (moment);

function TimeLeft({ timerLabel, handleStartStopClick, startStopButtonLabel, timeLeft }) {
    const formatTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });
    return (
        <>
            <p id="timer-label">{timerLabel}</p>
            <p>{formatTimeLeft}</p>
            <button id="start-stop-button" onClick={handleStartStopClick}><span>{startStopButtonLabel}</span></button></>
    );
}

export default TimeLeft;