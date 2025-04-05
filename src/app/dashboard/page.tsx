import React from 'react'
import Stories from './components/Stories'
import SupportBar from './components/SupportBar'
import PostCard from './components/PostCard'
import Image from 'next/image';

export default function DashboardPage() {
  return (
    <div className='w-full  grid grid-cols-12'>

            <div className='col-span-12 flex flex-col xl:col-span-8'>
                <div>
                    <Stories/>

                </div>
                <div className='flex w-full flex-col justify-center items-center'>
                  <PostCard image="/ghibli.png"/>
                  <PostCard image="/ayunda_figure.jpeg" />
                  <PostCard/>
                </div>
            </div>
          
            <div className='col-span-4 hidden xl:block'>
                <SupportBar/>
            </div>
    </div>
  )
}
