import Image from 'next/image'
import React from 'react'

export default function ProfileCard(props: any) {
  const {sizeAvatar = 10, buttonName, image, dontShowName, dontShowBtn } = props
  return (
    <div className='flex gap-3'>
      <Image style={{ objectFit: 'cover' }} alt='avatar' width={500} height={500} className={` w-${sizeAvatar} h-${sizeAvatar} rounded-full bg-white`} src={image} />
      <div className='flex flex-col justify-center items-start px-2'>
        <div className='font-bold'> ayunda.Mod99</div>
        {!dontShowName && <div> Asmodeus Ayunda</div>}
      </div>
      {!dontShowBtn &&
        <div className='text-blue-500 font-bold flex justify-center items-center ms-10' >
          <div>{buttonName}</div>
        </div>
      }
    </div>
  )
}
