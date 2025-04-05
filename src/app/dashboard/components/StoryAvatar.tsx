import Image from 'next/image'
import React from 'react'

export default function StoryAvatar() {
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
