import React from 'react';

//import './buttons.css'

const StopStartButtons = () => {
    return (
        <div className='section'>
            <div className="button-container">
                <div className="start-button-container">
                    <button id="start-button">
                        <span>
                            Start
                        </span>
                    </button>
                </div>
                <div className="stop-button-container">
                    <button id="stop-button">
                        <span>
                            Stop
                        </span>
                    </button>
                </div>
            </div>
        </div>
  );
};
export default StopStartButtons;