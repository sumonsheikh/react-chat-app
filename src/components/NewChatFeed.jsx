import React from 'react'
import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

const NewChatFeed = (props) => {
    const {chats, activeChat, message, userName } = props
    const chat = chats && chats[activeChat]
    console.log(chat, userName, message)
    return (
        <>
          <MyMessage/>
          <TheirMessage/>
          <MessageForm/>
        </>
    )
}

export default NewChatFeed
