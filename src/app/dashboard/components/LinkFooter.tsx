import React from 'react'

export default function LinkFooter() {
    const linkFooter = `Meta,About,Blog,Jobs,Help,API,Privacy,Terms,Locations,Instagram Lite,Threads,Contact Uploading & Non-Users,Meta Verified,Meta in Indonesia`
    .split(",")

  // console.log(linkFooter);
  return (
    <div>
        <div className='flex flex-row flex-wrap gap-2 text-sm text-gray-400'>
          {linkFooter.map((text,idx) => (
            <div key={idx} className='text-center'> <p> {text} </p> </div>
          ))}
          </div>
        
          
    </div>
  )
}
