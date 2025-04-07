import Image from 'next/image'
import React from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { FaPlus } from 'react-icons/fa'
import { GoPlus } from 'react-icons/go'

export default function StoryAvatar(promp:any) {
const {isAdd} = promp

  if(isAdd){
    return(
      <div>
      <div className=' flex flex-col w-30 h-30 gap-2 justify-center items-center hover:opacity-80'>
          <div className={` border border-gray-300 rounded-full p-0`} >
          <GoPlus className='p-3 text-gray-300 text-7xl bg-gray-100 m-2 rounded-full ' />
          </div>
         <p>New</p>
      </div>
  </div>
      
    )
  }
  return (
    <div>
        <div className='flex flex-col w-30 h-30 gap-2 justify-center items-center hover:opacity-80'>
            <div className={`bg-[url('/asset/gradient.jpg')] rounded-full p-1`} >
                <Image style={{ objectFit: 'cover' }} objectFit='cover' alt='avatar' width={500} height={500} className=' w-16 h-16 rounded-full bg-white p-1' src='/ayunda2.jpeg' />
            </div>
            <p>Ayunda</p>
        </div>
    </div>
  )
}
