import React, { useState } from "react";
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { useEffect } from "react";

const TimeLeft = ({breakLength, sessionLength }) => {
    const [timeLeft, setTimeLeft] = useState(sessionLength);
    const [intervalID, setIntervalID] = useState(null);
    const [currentSessionType, setCurrentSessionType] = useState('Session');

    useEffect(() => {
        setTimeLeft(sessionLength);
    }, [sessionLength]);

    const isStart = intervalID != null;

    const handleStartStopClick = () => {
        if (isStart) {
            // on start
            clearInterval(intervalID);
            setIntervalID(null);
        }
        else {
            // on stop
            const newIntervalID = setInterval(() => {
                setTimeLeft(prevTimeLeft => {
                    const newTimeLeft = prevTimeLeft - 1;
                    if (newTimeLeft >= 0) {
                        return prevTimeLeft - 1;
                    }

                    if(currentSessionType == 'Session') {
                        setCurrentSessionType('Break');
                        setTimeLeft(breakLength);
                    }

                    else if(currentSessionType == 'Break') {
                        setCurrentSessionType('Session');
                        setTimeLeft(sessionLength);
                    }
                    return prevTimeLeft;
                });
            }, 1000);
            setIntervalID(newIntervalID);
        }
    }

    const formatTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });
    return (
        <>
        <p>{currentSessionType}</p>
        <p>{formatTimeLeft}</p>
        <button id="start-stop-button" onClick={handleStartStopClick}><span>{isStart ? 'Stop' : 'Start'}</span></button></>
    )
}

export default TimeLeft;