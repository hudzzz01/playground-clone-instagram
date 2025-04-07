import React from 'react'

import Image from 'next/image'

export default function ProfilePage() {
  return (
    <div>
       <div className=''>
        <div className='grid grid-cols-12 bg-red-200 h-100'>
          <div className='col-span-4 bg-green-100 flex justify-end items-center pe-15 pb-15'>
          <Image style={{ objectFit: 'cover' }} alt='avatar' width={500} height={500} className={` w-43 h-43 rounded-full bg-white`} src={'/ayunda2.jpeg'} />
          </div>
          <div className='col-span-8 bg-blue-100'>
            <div className='flex flex-col w-full h-full px-10 mt-10'>
              <div className='flex flex-row gap-2 justify-start'>
                <span className='pe-2 font-bold'>Username</span>
                <span className='' >Edit profile</span>
                <span className='' >View achive</span>
                <span className='' >setting btn</span>
              </div>
              <div className='flex flex-row gap-5 justify-start'>
                <span>0 Post</span>
                <span>544 followers</span>
                <span>713 following</span>
              </div>
              <div>
                <p className='font-bold'>Username</p>
                Description
              </div>
            </div>
          </div>
          </div>
       </div>

    </div>
  )
}
