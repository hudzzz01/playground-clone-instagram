import React from 'react'

export default function DashboardPage() {
  return (
    <div className='w-full bg-green-400 grid grid-cols-12'>
            <div className='col-span-7 bg-red-400 flex flex-col'>
                <div>story item</div>
                <div>fees item</div>
            </div>
          
            <div>
                support item
            </div>
    </div>
  )
}
