import React from "react";
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

//@ts-ignore
momentDurationFormatSetup(moment);

const TimeLeft: React.FC<Props> = ({ timerLabel, handleStartStopClick, startStopButtonLabel, timeLeft, handleResetButtonClick }) => {
    const formatTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });
    return (
        <div className="timeLeft-container animatable">
            <svg>
                <circle cx="50%" cy="50%" r="150" />
                <circle cx="50%" cy="50%" r="150" pathLength="1" />
                <text x="250" y="250" text-anchor="middle" id="timer-label">{timerLabel}</text>
                <text x="250" y="170" text-anchor="middle"><tspan id="timer-time">{formatTimeLeft}</tspan></text>
            </svg>
            <div className="button-container">
                <button id="start-stop-button" onClick={handleStartStopClick}><span>{startStopButtonLabel}</span></button>
                <button id="reset-button" onClick={handleResetButtonClick}><span>Reset</span></button>
            </div>
        </div>
    );
}

type Props = {
    timerLabel: string
    handleStartStopClick: () => void
    startStopButtonLabel: string
    timeLeft: number
    handleResetButtonClick: () => void
}

export default TimeLeft;