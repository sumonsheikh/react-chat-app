import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="22095367-729e-4e95-a0fd-eeeb64ffee7d
      "
      userName="sumonshekh"
      userSecret="123456"
      renderChatFeed={(chatAppProps) => {<ChatFeed {...chatAppProps} />}}

    />
  )
}

export default App

