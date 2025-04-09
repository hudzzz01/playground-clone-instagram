import React from 'react'
import ProfileCard from '../components/ProfileCard'
import StoryAvatar from '../components/StoryAvatar'
import Stories from '../components/Stories'
import Image from 'next/image';

export default function MessagePage() {
  return (
    <div>
        <div className='w-10/10 flex ' >
            <div className='w-100  bg-white h-screen'>
                <Stories/>
                <div className='flex flex-row justify-between ms-10 gap-3 pe-10 mb-3'>
                    <p className='font-bold text-xl'>Messanges</p>
                    <p className='font-semibold text-md text-gray-500'>Request</p>
                </div>
                <div className='flex flex-col justify-start gap-3 w-full h-11/15 overflow-y-scroll'>
                    <span className='rounded hover:bg-gray-100 px-2 py-2'>
                        <span className='flex ms-10'>
                            <ProfileCard sizeAvatar={10} image={"/ayunda2.png"} subTitle={<p className='text-sm text-gray-500'> Acthive 2h ago</p>} />
                        </span>
                    </span>
                    <span className='rounded hover:bg-gray-100 px-2 py-2'>
                        <span className='flex ms-10'>
                            <ProfileCard sizeAvatar={10} image={"/ayunda2.png"} subTitle={<p className='text-sm text-gray-500'> Acthive 2h ago</p>} />
                        </span>
                    </span>

                    <span className='rounded hover:bg-gray-100 px-2 py-2'>
                        <span className='flex ms-10'>
                            <ProfileCard sizeAvatar={10} image={"/ayunda2.png"} subTitle={<p className='text-sm text-gray-500'> Acthive 2h ago</p>} />
                        </span>
                    </span>
                    <span className='rounded hover:bg-gray-100 px-2 py-2'>
                        <span className='flex ms-10'>
                            <ProfileCard sizeAvatar={10} image={"/ayunda2.png"} subTitle={<p className='text-sm text-gray-500'> Acthive 2h ago</p>} />
                        </span>
                    </span>

                    <span className='rounded hover:bg-gray-100 px-2 py-2'>
                        <span className='flex ms-10'>
                            <ProfileCard sizeAvatar={10} image={"/ayunda2.png"} subTitle={<p className='text-sm text-gray-500'> Acthive 2h ago</p>} />
                        </span>
                    </span>

                    <span className='rounded hover:bg-gray-100 px-2 py-2'>
                        <span className='flex ms-10'>
                            <ProfileCard sizeAvatar={10} image={"/ayunda2.png"} subTitle={<p className='text-sm text-gray-500'> Acthive 2h ago</p>} />
                        </span>
                    </span>

                    <span className='rounded hover:bg-gray-100 px-2 py-2'>
                        <span className='flex ms-10'>
                            <ProfileCard sizeAvatar={10} image={"/ayunda2.png"} subTitle={<p className='text-sm text-gray-500'> Acthive 2h ago</p>} />
                        </span>
                    </span>

                    <span className='rounded hover:bg-gray-100 px-2 py-2'>
                        <span className='flex ms-10'>
                            <ProfileCard sizeAvatar={10} image={"/ayunda2.png"} subTitle={<p className='text-sm text-gray-500'> Acthive 2h ago</p>} />
                        </span>
                    </span>

                    <span className='rounded hover:bg-gray-100 px-2 py-2'>
                        <span className='flex ms-10'>
                            <ProfileCard sizeAvatar={10} image={"/ayunda2.png"} subTitle={<p className='text-sm text-gray-500'> Acthive 2h ago</p>} />
                        </span>
                    </span>

                    <span className='rounded hover:bg-gray-100 px-2 py-2'>
                        <span className='flex ms-10'>
                            <ProfileCard sizeAvatar={10} image={"/ayunda2.png"} subTitle={<p className='text-sm text-gray-500'> Acthive 2h ago</p>} />
                        </span>
                    </span>

                    <span className='rounded hover:bg-gray-100 px-2 py-2'>
                        <span className='flex ms-10'>
                            <ProfileCard sizeAvatar={10} image={"/ayunda2.png"} subTitle={<p className='text-sm text-gray-500'> Acthive 2h ago</p>} />
                        </span>
                    </span>
                    <span className='rounded hover:bg-gray-100 px-2 py-2'>
                        <span className='flex ms-10'>
                            <ProfileCard sizeAvatar={10} image={"/ayunda2.png"} subTitle={<p className='text-sm text-gray-500'> Acthive 2h ago</p>} />
                        </span>
                    </span>

                    <span className='rounded hover:bg-gray-100 px-2 py-2'>
                        <span className='flex ms-10'>
                            <ProfileCard sizeAvatar={10} image={"/ayunda2.png"} subTitle={<p className='text-sm text-gray-500'> Acthive 2h ago</p>} />
                        </span>
                    </span>

                    <span className='rounded hover:bg-gray-100 px-2 py-2'>
                        <span className='flex ms-10'>
                            <ProfileCard sizeAvatar={10} image={"/ayunda2.png"} subTitle={<p className='text-sm text-gray-500'> Acthive 2h ago</p>} />
                        </span>
                    </span>

                    <span className='rounded hover:bg-gray-100 px-2 py-2'>
                        <span className='flex ms-10'>
                            <ProfileCard sizeAvatar={10} image={"/ayunda2.png"} subTitle={<p className='text-sm text-gray-500'> Acthive 2h ago</p>} />
                        </span>
                    </span>

                    <span className='rounded hover:bg-gray-100 px-2 py-2'>
                        <span className='flex ms-10'>
                            <ProfileCard sizeAvatar={10} image={"/ayunda2.png"} subTitle={<p className='text-sm text-gray-500'> Acthive 2h ago</p>} />
                        </span>
                    </span>




                </div>
            </div>
            <div className='w-10/10 bg-green-100 h-screen '></div>       
        </div>
    </div>
  )
}
