import React, { useState } from 'react'

import './buttons.css'

const BreakButtons = () => {
    const [breakLength, setBreakLength] = useState(300);
    const increBreak = () => {
        const newBreakLength = Math.max(0, breakLength + 30);
        setBreakLength(newBreakLength);
    }
    const decreBreak = () => {
        const newBreakLength = Math.max(0, breakLength - 30);
        setBreakLength(newBreakLength);
    }
    return (
        <div>
            <div className='section'>
                <div className='break-font'>
                {Math.floor(breakLength / 60)}:{String(breakLength % 60).padStart(2, '0')}
                </div>
            </div>
            <dive className='section'>
                <button id="break-decrease" onClick={decreBreak}>
                    <span>
                        -
                    </span>
                </button>
                <button id="break-increase" onClick={increBreak}>
                    <span>
                        +
                    </span>
                </button>
            </dive>
        </div>
    )
};

export default BreakButtons;