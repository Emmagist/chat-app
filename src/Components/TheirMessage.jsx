import React from "react";

const TheirMessage = ({lastMessage, message}) => {
    const isFirstMessageByUser = ! lastMessage || lastMessage.sender.username !== message.sender.username
    return(
        <div>
            Their Message
        </div>
    )
}

export default TheirMessage;