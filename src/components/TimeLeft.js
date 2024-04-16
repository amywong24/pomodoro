import React from "react";
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

const TimeLeft = ({ timerLabel, handleStartStopClick, startStopButtonLabel, timeLeft, handleResetButtonClick }) => {
    const formatTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });
    return (
        <div className="timeLeft-container animatable">
            <svg>
                <circle cx="50%" cy="50%" r="150" />
                <circle cx="50%" cy="50%" r="150" pathLength="1" />
                <text x="250" y="250" textAnchor="middle" id="timer-label">{timerLabel}</text>
                <text x="250" y="170" textAnchor="middle"><tspan id="timer-time">{formatTimeLeft}</tspan></text>
            </svg>
            <div className="button-container">
                <button id="start-stop-button" onClick={handleStartStopClick}><span>{startStopButtonLabel}</span></button>
                <button id="reset-button" onClick={handleResetButtonClick}><span>Reset</span></button>
            </div>
        </div>
    );
}

export default TimeLeft;