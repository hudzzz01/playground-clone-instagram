import React from 'react'

export default function Button1(props: any) {   
    const {text} = props
  return (
    <div className='bg-gray-200 p-1 rounded text-gray-700 font-bold' >{text}</div>
  )
}
