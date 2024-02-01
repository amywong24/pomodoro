import React, {useState} from 'react';
import Break from './components/Break';
import Session from './components/Session';
import TimeLeft from './components/TimeLeft';
import './Pomodoro.css';
import './buttons.css';

function Pomodoro() {
  const [sessionLength, setSessionLength] = useState(60*25);
  const [breakLength, setBreakLength] = useState(300);

    const decrementBreakLengthByMinute = () => {
        const newBreakLength = breakLength - 60;

        if (newBreakLength < 0) {
            setBreakLength(0);
        }

        else {
            setBreakLength(newBreakLength);
        }
    };

    const incrementBreakLengthByMinute = () => {
        setBreakLength(breakLength + 60);
    };

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
  return (
    <div className="pomodoro">
      <Break 
        breakLength = {breakLength}
        decrementBreakLengthByMinute = {decrementBreakLengthByMinute}
        incrementBreakLengthByMinute = {incrementBreakLengthByMinute}/>
      <TimeLeft
        breakLength={breakLength}
        sessionLength = {sessionLength}/>
      <Session 
        sessionLength = {sessionLength}
        decrementSessionLengthByMinute = {decrementSessionLengthByMinute}
        incrementSessionLengthByMinute = {incrementSessionLengthByMinute}/>
    </div>
  );
}

export default Pomodoro;
