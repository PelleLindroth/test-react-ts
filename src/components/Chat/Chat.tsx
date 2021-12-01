import { useState } from 'react'
import ChatIcon from '../../assets/chat-icon.png'

interface IMessage {
  text: string,
  id: string
}

const messageHistory: IMessage[] = [
  {
    text: 'Hey how are you',
    id: '345u5y2uy'
  },
  {
    text: 'Never you mind',
    id: 'kjh6jh74567'
  },
  {
    text: 'ok',
    id: 'jhg324jh'
  }
]

const Chat = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  const addMessage = () => {
    messageHistory.push({text: message, id: String(new Date())})
    setMessage('')
  }

  return (
    <>
      <img 
        alt="chat-icon" 
        src={ChatIcon} 
        onClick={() => setIsExpanded(!isExpanded)}
      />
    {
      isExpanded && (
        <>    
         <ul className="message-history">
          {
            messageHistory.map(message => {
              return (
                <li className="message" key={message.id}>{message.text}</li>
              )
            })
          }
         </ul>
         <form onSubmit={addMessage}>
          <label htmlFor="chat-input">Type your message here</label>
          <input onChange={(e) => setMessage(e.target.value)} value={message} id="chat-input" type="text" />
          <button>Send</button>
         </form>
        </>
      )
    }
      </>
  )
}

export default Chat