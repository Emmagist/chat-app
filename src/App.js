import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import LoginForm from './Components/Login.component';
import ChatFeed from './Components/chatfeed';

const App = () => {

  if (!localStorage.getItem('username')) return <LoginForm />
  return (
    // <div className="App">
      
    // </div>
    <ChatEngine height="100vh" 
    projectID="2b897963-85f4-40a6-8046-0dc888ad3512" 
    userName={localStorage.getItem('username')} 
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
