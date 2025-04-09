import React from 'react'
import ProfileCard from '../ProfileCard'
import { FaPhoneAlt, FaRegSmile, FaVideo } from 'react-icons/fa'
import { CiCircleAlert, CiFaceSmile, CiImageOn, CiMicrophoneOn } from 'react-icons/ci'
import { LuSticker } from 'react-icons/lu'
import { FcLike } from 'react-icons/fc'
import BubbleChat from './BubbleChat'

export default function ChatContainer() {
  return (
    <div className='h-12/13'>
        <div className='w-full bg-white h-20  items-center'>
            <div className=' flex items-center flex justify-between'>
                <div className='mt-4 '>
                    <ProfileCard image="/ayunda2.jpeg" dontShowname={true} dontShowBtn={true}   />
                </div>
                <div className='flex gap-3 '>
                    <FaPhoneAlt />
                    <FaVideo />
                    <CiCircleAlert />
                </div>
            </div>
            
        </div>

        <div className='w-full h-full bg-white flex flex-col justify-end'>
             <div className='h-20 bg-white w-full h-full' ></div>
            {/* chat section */}
                <div className='px-6 sender mb-2 w-full flex justify-end'>
                    <BubbleChat isSender={true} message="halo" />
                </div>
                <div className='px-6 reciver mb-2 w-full flex justify-start'>
                    <BubbleChat message="halo juga" />
                </div>
                <div className='px-6 sender mb-2 w-full flex justify-end'>
                    <BubbleChat isSender={true} message="kalo aku chat kamu, ada yang marah ga ?" />
                </div>
                <div className='px-6 reciver mb-2 w-full flex justify-start'>
                    <BubbleChat message="emang kenapa marah" />
                </div>



            {/* end chat section */}

             <div className='h-20 bg-white-100 w-full'>

                <div className='h-15 bg-white mt-2 rounded-full mx-2 border border-gray-400'>
                        <CiFaceSmile className=' w-20 text-center h-10 inline-block' />
                        <input className=' w-6/10 h-full rounded text-lg p-2 bg-white focus:outline-none'/>
                        <div className='flex w-2/10 inline-block '>
                            <div className='flex gap-3 justify-end items-center h-10'>
                                 <CiMicrophoneOn size={28} />
                                 <CiImageOn size={28} />
                                 <LuSticker size={28} />
                                 <FcLike size={28} />
                            </div>
                        </div>
                    
                </div>
            
             </div>

        </div>
    </div>
  )
}
