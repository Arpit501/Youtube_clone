import React from 'react'
import usericon from '../images/usericon.png'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2 bg-[#F0F0F0]'>
         <img src={usericon} alt="" className='h-8 w-8 mr-3' />
         <span className='font-bold px-2'>{name}</span>
         <span>{message}</span>
    </div>
  )
}

export default ChatMessage