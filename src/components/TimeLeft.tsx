import React from "react";
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

//@ts-ignore
momentDurationFormatSetup(moment);

const TimeLeft: React.FC<Props> = ({ timerLabel, handleStartStopClick, startStopButtonLabel, timeLeft, handleResetButtonClick }) => {
    const formatTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });
    return (
        <div className="timeLeft-container">
            <p id="timer-label">{timerLabel}</p>
            <p>{formatTimeLeft}</p>
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