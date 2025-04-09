import React from 'react'

export default function BubbleChat(promp:any) {
    const {message, isSender} = promp
  return (
    <div className={` ${isSender ? 'bg-blue-500 text-white' : 'bg-gray-200'} py-2 px-5 rounded-full`} >{message}</div>
  )
}
