import React from 'react';
import './test1.css';
import StopStartButtons from './startButtons';
import BreakButtons from './breakButtons';
const TaskBar = () => {
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
        <div className="left-left-div-container">

        </div>
        <div className="left-div-container">
        <div className="left-div">
            <div className="featured-content">Featured Content</div>
                <div className="live-streams">Live Streams</div>
                <div className="stream-information">Stream Information</div>
                <div className="video-player">Video Player</div>
            </div>
            
            <div className="pomodoro">
            <div className='container'>
                <BreakButtons />
                <StopStartButtons />
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
                I Try 14.2's Reworked Karthus 3 (Still Broken) 
                </span>
            </p>
            </div>

            <div className="body-container">
            <div className="" style={{height:'100%',backgroundColor:'lightgray'}}>
                text
                </div>
                </div>
            <div className="conclusion-container">
            <div style={{display:'flex'}}>
            <textarea
                data-a-target="chat-input"
                data-test-selector="chat-input"
                aria-label="Send a message"
                className="gWqzmh ljZvO jcNyzj"
                autoComplete="twitch-chat"
                maxLength="50"
                placeholder="Send a message">
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
};

export default TaskBar;