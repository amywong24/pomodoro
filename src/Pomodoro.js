import React, { useState, useEffect, useRef } from 'react';
import Break from './components/Break';
import Session from './components/Session';
import TimeLeft from './components/TimeLeft';
import './Pomodoro.css';
import './buttons.css';

function Pomodoro() {
  const [sessionLength, setSessionLength] = useState(60 * 25);
  const [breakLength, setBreakLength] = useState(300);
  const [intervalID, setIntervalID] = useState(null);
  const [currentSessionType, setCurrentSessionType] = useState('Session');
  const [timeLeft, setTimeLeft] = useState(sessionLength);
  const audioElement = useRef(null);

  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  useEffect (() => {
    if (timeLeft === 0) {
      audioElement.current.play();
      if (currentSessionType === 'Session') {
        setCurrentSessionType('Break');
        setTimeLeft(breakLength);
      }
      
      else if (currentSessionType === 'Break') {
        setCurrentSessionType('Session');
        setTimeLeft(sessionLength);
      }
    }
  }, [timeLeft, breakLength, currentSessionType, sessionLength]);

  const decrementBreakLengthByMinute = () => {
    const newBreakLength = breakLength - 60;
    if (newBreakLength > 0) {
      setBreakLength(newBreakLength);
    }
  };

  const incrementBreakLengthByMinute = () => {
    const newBreakLength = breakLength +60;
    if (newBreakLength <= 60*60) {
      setBreakLength(newBreakLength);
    }
  };

  const decrementSessionLengthByMinute = () => {
    const newSessionLength = sessionLength - 60;

    if (newSessionLength > 0) {
      setSessionLength(newSessionLength);
    }
  };

  const incrementSessionLengthByMinute = () => {
    const newSessionLength = sessionLength + 60;
    if (newSessionLength <= 60*60) {
      setSessionLength(sessionLength+60);
    }
  };

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
        setTimeLeft(prevTimeLeft => prevTimeLeft -1 );
      }, 1000);
      setIntervalID(newIntervalID);
    }
  }

  //resets timer
  const handleResetButtonClick = () => {
    audioElement.current.load();
    clearInterval(intervalID);
    setIntervalID(null);
    setCurrentSessionType('Session');
    setSessionLength(60*25);
    setBreakLength(60*5);
    setTimeLeft(60*25); // resets the timer to 25 minutes
  }

  return (
    <div className="pomodoro">
      <Break
        breakLength={breakLength}
        decrementBreakLengthByMinute={decrementBreakLengthByMinute}
        incrementBreakLengthByMinute={incrementBreakLengthByMinute} />
      <TimeLeft
        timerLabel={currentSessionType}
        handleStartStopClick={handleStartStopClick}
        startStopButtonLabel={isStart ? 'Stop' : 'Start'}
        timeLeft={timeLeft}
         />
      <Session
        sessionLength={sessionLength}
        decrementSessionLengthByMinute={decrementSessionLengthByMinute}
        incrementSessionLengthByMinute={incrementSessionLengthByMinute} />
        <button id="reset-button" onClick={handleResetButtonClick}><span>Reset</span></button>
        <audio id="sound" ref={audioElement}>
          <source src="https://onlineclock.net/audio/options/harp-strumming.mp3" type="audio/mpeg" />
        </audio>
    </div>
  );
}

export default Pomodoro;
