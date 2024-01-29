import React from 'react';
import logo from './logo.svg';
import Break from './components/Break';
import './Pomodoro.css';

function Pomodoro() {
  return (
    <div className="pomodoro">
      <Break />
      <div className="button-container">
        <div className="start-button-container">
          <button id="start-button"><span>Start</span></button>
        </div>
        <div className="stop-button-container">
          <button id="stop-button"><span>Stop</span></button>
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
