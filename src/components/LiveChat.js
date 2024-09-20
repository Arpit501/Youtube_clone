import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {

    const [liveMessage,setLiveMessage]=useState("")
    const dispatch=useDispatch();
    const chatMessages=useSelector(store=>store.chat.messages);

    useEffect(()=>{
        
    const i=setInterval(()=>{

        dispatch(addMessage({
            name:generateRandomName(),
            message:makeRandomMessage(20),
        }))
        },1500)

        return ()=>{
            clearInterval(i);
        }
    },[])

  return (
      <div className='ml-10'>
        <h1 className='text-center border border-black w-[390px] mb-1 ml-3 bg-[#F0F0F0]'><i className='font-bold text-lg'>Live Chat</i></h1>
    <div className='w-[400px] h-[380px] ml-2 p-2 border border-black bg-white overflow-y-scroll flex flex-col-reverse rounded-lg'>
        
        {chatMessages.map((c,index)=>(<ChatMessage key={index} name={c.name} message={c.message} />))}
        
    </div>

        <form className='bg-[#F0F0F0] mt-1 p-2 ml-2 w-full rounded-lg' onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessage({
                name:"Arpit singhal",
                message:liveMessage,
            }))
            
            setLiveMessage("")
        }}>

            <input type="text" className='w-80 h-12 border border-black p-2' value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}} /> 
            <button className=' ml-2 p-2 w-16 rounded-lg h-12 bg-green-400'>send</button>

        </form>

    </div>
  )
}

export default LiveChat;