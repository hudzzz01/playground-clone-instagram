import Image from 'next/image'
import React from 'react'

export default function LoadingInstagram() {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <Image alt='instagram-logo' width={500} height={500} className='rounded w-50 h-50' src='/asset/instagramlogo.jpeg' />
    </div>
  )
}
