import React from 'react'

import Image from 'next/image'
import Button1 from '../components/Button1'
import { BsGearWide } from 'react-icons/bs'
import StoryAvatar from '../components/StoryAvatar'

export default function ProfilePage() {
  return (
    <div className='flex justify-center '>

      <div className=' w-full mt-0 md:w-8/10 md:mt-12 xl:w-6/10'>
        <div className='h-100 pt-12'>
          <div className='grid grid-cols-12-200 h-0'>
            <div className='col-span-4 flex justify-end items-center w-30 pe-0 pb-15 md:pe-0 xl:w-43'>
              <Image style={{ objectFit: 'cover' }} alt='avatar' width={500} height={500} className={` w-20 h-20 md:w-30 md:h-30 xl:w-43 xl:h-43 rounded-full bg-white`} src={'/ayunda2.jpeg'} />
            </div>
            <div className='col-span-8'>
              <div className='flex flex-col w-full  px-5 md:px-5 xl:px-10'>
                <div className='flex flex-row gap-2 justify-start'>
                  <span className='pe-2 text-2xl'>ayunda.Mod99</span>
                  <div className='flex flex-row gap-2 hidden md:flex'>
                     <span className='' > <Button1 text="Edit profile" /> </span>
                     <span className='' ><Button1 text="View archive" /></span>
                  </div>
                 
                  <span className='md:mt-1 md:ms-5' ><BsGearWide size={25} /></span>
                </div>
                <div className='flex flex-row gap-5 justify-start text-xl mt-5 hidden md:flex'>
                  <span className='text-gray-500'> <span className='font-bold text-gray-900' >0</span> Post</span>
                  <span className='text-gray-500'> <span className='font-bold text-gray-900' > 544 </span> followers</span>
                  <span className='text-gray-500'> <span className='font-bold text-gray-900' > 713 </span> following</span>
                </div>
                <div className='mt-10 hidden md:block'>
                  <p className='font-bold'>ayunda.Mod99</p>
                  <p className='font-light'> When Hungry Eat Somethink</p>
                </div>
              </div>
            </div>
            <div className='col-span-12 xl:ms-10 mb-15'>
              <StoryAvatar isAdd={true} />

            </div>
            <div className='col-span-12'>
              <hr className='mx-4 rounded text-gray-300' />
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
