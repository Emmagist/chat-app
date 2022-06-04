import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './Components/chatfeed';

const App = () => {
  return (
    // <div className="App">
      
    // </div>
    <ChatEngine height="100vh" 
    projectID="2b897963-85f4-40a6-8046-0dc888ad3512" 
    userName="Emmagist" 
    userSecret="Emma1994204" 
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
