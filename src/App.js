import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>
            +
          </span>
          New Chat
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          <div className="chat-message">
            <div className="chat-message-center">
              <div className="avatar">
                Me
              </div>
              <div className="message">
                hello world
              </div>

            </div>
          </div>
             <div className="chat-message chatgpt">
            <div className="chat-message-center">
              <div className="avatar chatgpt">
                AI
              </div>
              <div className="message">
                i am an ai
              </div>

            </div>
          </div>
        </div>
        <div className="chat-input-holder">
          <textarea className="chat-input-text-area" placeholder="" rows="1">

          </textarea>
        </div>
      </section>
    </div>
  );
}

export default App;
