import React from 'react';
import './taskManager.css';

const TaskBar = () => {
  return (
<div className="Layout-sc-1xcs6mc-0 fhQiFC chat-room__content">
  <div className="Layout-sc-1xcs6mc-0 cxokur">
    <div data-test-selector="header-content" className="Layout-sc-1xcs6mc-0 capulb highlight__header">
      <div className="simplebar-content">
        <div className="Layout-sc-1xcs6mc-0 cwtKyw">
          <div className="Layout-sc-1xcs6mc-0 hUvqSk">
            <div className="Layout-sc-1xcs6mc-0 jHJCzz pinned-chat__pinned-by">
              <p className="CoreText-sc-1txzju1-0 cbzZrz">Pinned by <span>flaemyy</span></p>
            </div>
            <p className="CoreText-sc-1txzju1-0 ScTitleText-sc-d9mj2s-0 jLvOdI ezNtJL InjectLayout-sc-1i43xsx-0 pinned-chat__message tw-title">
              <span className="text-fragment" data-a-target="chat-message-text">I Try 14.2's Reworked Karthus 3 (Still Broken) </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div tabIndex="0" aria-label="Chat messages" aria-describedby="Exit-chat-container" className="Layout-sc-1xcs6mc-0 InjectLayout-sc-1i43xsx-0 chat-list--default font-scale--default iClcoJ"></div>
  <div className="Layout-sc-1xcs6mc-0 kILIqT chat-input">
    <div className="InjectLayout-sc-1i43xsx-0 blcfev">
      <div className="Layout-sc-1xcs6mc-0 cyDLBs">
        <div className="Layout-sc-1xcs6mc-0 dsMzFl">
          <div className="Layout-sc-1xcs6mc-0 cwtKyw">
            <div className="Layout-sc-1xcs6mc-0 cafndC chat-input__textarea">
              <div className="InjectLayout-sc-1i43xsx-0 bTAXM">
                <div className="Layout-sc-1xcs6mc-0 gGTkSL font-scale--default">
                  <div className="ScInputContainer-sc-vu7u7d-3 eoboxF">
                    <textarea
                      data-a-target="chat-input"
                      data-test-selector="chat-input"
                      aria-label="Send a message"
                      className="textarea-a gWqzmh ljZvO jcNyzj"
                      autoComplete="twitch-chat"
                      maxLength="500"
                      placeholder="Send a message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="Layout-sc-1xcs6mc-0 bNeotz chat-input__badge-carousel"></div>
            </div>
          </div>
        </div>
        <div className="Layout-sc-1xcs6mc-0 eWfUfi chat-input__buttons-container" data-test-selector="chat-input-buttons-container">
          <div className="Layout-sc-1xcs6mc-0 kEPLoI">
            <div className="Layout-sc-1xcs6mc-0 jOVwMQ">
              <div className="InjectLayout-sc-1i43xsx-0 kBtJDm">
                <button data-a-target="chat-send-button" aria-label="Send Chat" className="ScCoreButton-sc-ocjdkq-0 ScCoreButtonPrimary-sc-ocjdkq-1 bTXTVH gmCwLG">
                  <div className="ScCoreButtonLabel-sc-s7h2b7-0 gPDjGr">
                    <div data-a-target="tw-core-button-label-text" className="Layout-sc-1xcs6mc-0 bFxzAY">Chat</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default TaskBar;