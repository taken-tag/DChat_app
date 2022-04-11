import React from 'react'
import {useMoralis} from "react-moralis";

function Msg({msg}) {
    const {user} = useMoralis();

    const isUserMessage = msg.get("ethAddress") === user.get('ethAddress')


  return (
    <div className={`flex items-end space-x-2 relative ${isUserMessage && 'justify-end'}`}>
    <div className={`flex space-x-4 p-3 rounded-lg ${
        isUserMessage? "rounded-br-none bg-pink-300" : 'rounded-bl-none bg-blue-400'
    }`}>
        <p>{msg.get("message")}</p>
        </div>
    </div>
  )
}

export default Msg