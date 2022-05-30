import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './Components/chatfeed';

const App = () => {
  return (
    // <div className="App">
      
    // </div>
    <ChatEngine height="100vh" 
    projectID="359c8da4-dc65-4d3e-bfa6-74bff4bade92" 
    userName="javascriptmastery" 
    userSecret="123123" 
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
