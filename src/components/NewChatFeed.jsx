import React from 'react'
import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

const NewChatFeed = (props) => {
    const {chats, activeChat, messages, userName } = props
    const chat = chats && chats[activeChat]
    
    const renderMessage =()=>{
        const keys = Object.keys(messages)
        return keys.map((key, index)=>{
            const message = messages[key]
            const lastMessage = index === 0 ? null : keys[index-0]
            const isMyMessage = userName === message.sender.username
            return(
                <div key={`msg_${index}`} style={{widht:`100%`}}>
                    <div className="message-block">
                        {
                            isMyMessage
                            ?<MyMessage/>
                            :<TheirMessage/>
                        }
                    </div>
                    <div className="read-receipts" style={{marginRight: isMyMessage? '18px' : '0px ',  marginLeft: isMyMessage? '0px' : '68px' }}>
                        read receipts
                    </div>
                </div>
            )
        })
    }

    renderMessage()
    return (
        <div>
            chat feed
        </div>
    )
}

export default NewChatFeed
