import logo from './logo.svg';
import './Pomodoro.css';

function Pomodoro() {
  return (
    <div className="pomodoro">
      <header className="pomodoro-header">
        <div className="button-container">
          <div className="start-button-container">
            <button className="start-button"><span>Start</span></button>
          </div>
          <div className="stop-button-container">
            <button className="stop-button"><span>Stop</span></button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Pomodoro;
