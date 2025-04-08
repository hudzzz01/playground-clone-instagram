import React from 'react'
import StoryAvatar from './StoryAvatar'
import ProfileCard from './ProfileCard'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'

export default function Coment(props:any) {
    const {isLike, message} = props
  return (
    <div className='flex items-center'>
        <ProfileCard image="/ayunda2.jpeg" dontShowName={true} dontShowBtn={true} />
        <p>{message}</p>
        {
            isLike && <div className='w-5/10 flex justify-end'>
            <FcLike />
            

        </div> ||
         <div className='w-5/10 flex justify-end'>
             <FcLikePlaceholder />

         </div>

        }
    </div>
  )
}
