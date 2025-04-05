import React from 'react'
import Stories from './components/Stories'

export default function DashboardPage() {
  return (
    <div className='w-full  grid grid-cols-12'>

            <div className='col-span-12 flex flex-col xl:col-span-9'>
                <div>
                    <Stories/>

                </div>
                <div>fees item</div>
            </div>
          
            <div className='col-span-3 hidden xl:block'>
                support item
            </div>
    </div>
  )
}
