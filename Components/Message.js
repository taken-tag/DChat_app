import React, { useRef } from 'react'
import {ByMoralis, useMoralis, useMoralisQuery} from 'react-moralis';
import Sendmessage from './Sendmessage';
import Msg from './msg';
import Messages from './Messages';
// Only show messages from the last 15 minutes
const MINS_DURATION = 15;

function Message() {
    const {user} = useMoralis();
    const endOfMessagesRef = useRef(null); 
    const {data, loading, error} = useMoralisQuery(
        'Messages', (query)=> query.ascending('createdAt').greaterThan("createdAt", new Date(Date.now() - 1000 * 60 * MINS_DURATION)),
        [],{
            live: true,  
        }
    );
    console.log(data);
    
  return (
    <div className="pb-56">
    <div className="my-5">
        <ByMoralis variant='dark' style={{marginLeft: "auto", marginRight:"auto"}}/>
    </div>

    <div className="space-y-10 p-4">
        {data.map(message =>(
            <Messages key={message.id} message={message}/>
        ))}
    </div>

    <div className='flex justify-center'>
        <Sendmessage endOfMessagesRef={endOfMessagesRef}/>
    </div>

    <div ref={endOfMessagesRef} className='text-center text-gray-400 mt-5'>
        <p>You're up to date {user.getUsername()}</p>
    </div>
    </div>
  )
}

export default Message