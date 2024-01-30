import React from 'react';

import StopStartButtons from './components/startButtons';
import BreakButtons from './components/breakButtons';

function Pomodoro() {
  return (
    <div className="pomodoro">
      <div className='container'>
        <BreakButtons />
        <StopStartButtons />
      </div>
    </div>
  );
}

export default Pomodoro;
