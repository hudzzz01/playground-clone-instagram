import Image from 'next/image'
import React from 'react'

export default function PostPage() {
  return (
    <div>
        <div className='grid grid-cols-12'>
            <div className='col-span-8 bg-green-300 w-full h-full'>
                <Image className='w-full h-full' style={{ objectFit: 'cover' }}  alt='avatar' width={500} height={500} className='rounded w-full h-full' src={'/ayunda2.jpeg'} />
            </div>
            <div className='col-span-4 bg-red-300 w-full h-200'>
                <div>
                    {/* coment section */}
                    
                </div>
            </div>

        </div>
    </div>
  )
}
