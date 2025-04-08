import Image from 'next/image'
import React from 'react'
import ProfileCard from '../../components/ProfileCard'
import { BsThreeDots } from 'react-icons/bs'
import Coment from '../../components/Coment'

export default function PostPage() {
  return (
    <div>
        <div className='grid grid-cols-12'>
            <div className='col-span-8 bg-green-300 w-full h-full'>
                <Image className='w-full h-full' style={{ objectFit: 'cover' }}  alt='avatar' width={500} height={500} src={'/ayunda2.jpeg'} />
            </div>
            <div className='col-span-4 bg-white w-full h-200'>
                <div className='flex align-center justify-between ms-3 mt-3'>
                    <ProfileCard dontShowName={true} dontShowBtn={true} image="/ayunda2.jpeg"/>
                    <BsThreeDots size={25} className='me-3' />
                </div>
                <hr className='mt-2 border-gray-200 mx-3 rounded' />
                <div className='ms-2 flex flex-col gap-4 mt-5'>
                     <Coment isLike={false} message="Like for like"/>
                     <Coment isLike={false} message="Like wuww like"/>
                     <Coment isLike={false} message="Nice try Diddy"/>
                     <Coment isLike={false} message="Nice try Diddy"/>


                </div>
              
            </div>

        </div>
    </div>
  )
}
