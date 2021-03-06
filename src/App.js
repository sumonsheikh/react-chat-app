import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import NewChatFeed from './components/NewChatFeed'

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="22095367-729e-4e95-a0fd-eeeb64ffee7d
      "
      userName="sumonshekh"
      userSecret="123456"
      renderChatFeed ={(chatProps)=>{<NewChatFeed {...chatProps}/>}}

    />
  )
}

export default App

