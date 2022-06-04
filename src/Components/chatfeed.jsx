import React from "react";
import MessageForm from "./message-form";
import TheirMessage from "./TheirMessage";
import MyMessage from "./MyMessage";

const ChatFeed = (props) => {
    const {chats, activeChat, userName, messages} = props;

    const chat = chats && chats[activeChat];
    const renderMessages = () => {
        const keys = Object.keys(messages);
        return keys.map((key, index) => {
            const message = messages[keys];
            const lastMessagesKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.username;

            return(
                <div key={`msg_${{ index }}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {
                            isMyMessage
                            ? <MyMessage message={message} />
                            : <TheirMessage message={message} lastMessage={messages[lastMessagesKey]} />
                        }
                    </div>
                    <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}></div>
                </div>
            )
        })
    }

    if (! chat) return 'Loading...';
        
    return(
        <div className="chat__feed">
            <div className="chat__title__container">
                <div className="chat___title">{chat.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => `${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{ height: '100px' }} />
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    )
}

export default ChatFeed;