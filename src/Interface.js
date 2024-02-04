import React from 'react';

//import StopStartButtons from './components/startButtons';
//import BreakButtons from './components/breakButtons';

import Pomodoro from './Pomodoro';

import './components/test1.css'
import './Pomodoro.css'

function Interface() {
  return (
    <div className="interface">
        <div className="header">
        <div className="navigation">
            <ul>
            <li>Home</li>
            </ul>
        </div>
        <div className="search-bar">Search Bar</div>
        </div>
    <div className="main-body">
        <div className="left-left-div-container" style={{margin:'10px'}}>
          <div className="body-container"></div>
        </div>


        <div className="left-div-container">
        <div className="left-div">
            
            
            <div className="pomodoro">
              <div className='container'>
                  <Pomodoro />
              </div>
            </div>
        </div>


        </div>
        <div className="right-div-container">
            <div className="right-div">
            <div className="chat">

<div className="title-container">
            <p className="cbzZrz">Next Task: <span></span></p>
            <p className="jLvOdI ezNtJL">
            <span style={{padding: '10px'}}>
                Task
                </span>
            </p>
            </div>

            <div className="body-container">
            <div className="" style={{height:'100%'}}>
                text
                </div>
                </div>
            <div className="conclusion-container">
            <div style={{display:'flex'}}>
            <textarea
                className="gWqzmh ljZvO jcNyzj"
                maxLength="50"
                placeholder="Make a Task">
            </textarea>
              <div className="kBtJDm">
                <button className="gmCwLG">
                    <div className="bFxzAY">Task</div>
                </button>
              </div>


              
              </div>
              </div>
        </div>
        </div>
        </div>
        </div>
      <div className="footer">
        <div className="terms-policies">Terms of Service and Privacy Policy</div>
      </div>
    </div>
  );
}

export default Interface;
