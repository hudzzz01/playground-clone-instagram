import React from 'react'
import ProfileCard from './ProfileCard'
import LinkFooter from './LinkFooter'

export default function SupportBar() {
  return (
    <div className='mt-18 flex flex-col gap-4'>
        <ProfileCard buttonName="Switch" image="/ayunda2.jpeg" />
        <div className='flex justify-between items-center w-72 my-2'>
            <p className='font-bold text-gray-500'>Suggested for you</p>
            <p className='text-gray-800 font-bold'>See all</p>
        </div>
        <ProfileCard buttonName="Folow" image="/ayunda2.jpeg" />
        <ProfileCard buttonName="Folow" image="/ayunda2.jpeg" />
        <ProfileCard buttonName="Folow" image="/ayunda2.jpeg" />
        <ProfileCard buttonName="Folow" image="/ayunda2.jpeg" />
        <ProfileCard buttonName="Folow" image="/ayunda2.jpeg" />
        <ProfileCard buttonName="Folow" image="/ayunda2.jpeg" />
        <div className='w-80 mt-2'>
             <LinkFooter/>
        </div>
    </div>
  )
}
