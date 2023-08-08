import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessage, generateRandomName } from '../utils/helper';

const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch();

    const ChatMessages = useSelector(store => store.chat.messages)

    useEffect(() => {
        const i = setInterval(() => {

            console.log("API Polling");

            dispatch(
                addMessage({
                name:generateRandomName(),
                message: generateRandomMessage(25)
            }))
        },1000);

        return () => clearInterval(i);
    }, []);


  return ( 
    <>
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg  overflow-y-scroll flex flex-col-reverse'>
        <div>
          {ChatMessages.map(c =><ChatMessage
           name={c.name}
           message={c.message}
            />)
          }
        </div>

       
    </div>

    <form 
     className='w-full p-2 ml-2 border border-black'
     onSubmit={(e) => {
        e.preventDefault();
        console.log("ÖN Form Submit",liveMessage);
        dispatch(addMessage({
          name:"Pratyush",
          message:liveMessage
        }));
        setLiveMessage("");
     }}>
       <input 
        className="px-2 w-72"
        type="text"
        value={liveMessage}
        onChange={(e) => {
            setLiveMessage(e.target.value);
        }}
        
        />
       <button className='px-2 mx-2 bg-green-100'>Send</button>
    </form>

    </>
  )
}

export default LiveChat