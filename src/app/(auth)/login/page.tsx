"use client"
import LinkFooter from '@/app/dashboard/components/LinkFooter'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")


  const handleSubmit = (e: any) => {
    e.preventDefault()
    const email : string = e.currentTarget.email.value
    const password : string = e.currentTarget.password.value

    console.log(email, password);
    
  }

  const handleClickSignUp = () => {
    router.push("/signup")
    console.log("sign up");
  }




  return (
    <div className='h-screen'>
      <div className='grid grid-cols-12 gap-4 h-9/10'>
        <div className='col-span-12 hidden md:flex md:col-span-7 bg-white' >
          {/* kiri */}
          <div className='flex w-full '>
            <div className='flex flex-row justify-end items-center w-full'>
              {/* thumbler */}
              <Image className='rounded-xl px-10' unoptimized = {false} src="/cover-jumbo.webp" alt="Vercel Logo" width={800} height={1000} />
            </div>
          </div>

        </div>
        <div className='col-span-12 mt-20 md:mt-0 md:col-span-5 bg-white-400 md:flex'>
          {/* kanan */}
          <div className=' flex '>
            <div className='flex flex-col justify-center items-center w-full'>
              <div className=''>
                <Image alt='instagram-text' width={1000} height={1000} className=' w-full h-15' src='/instagram-text-dark.png' />
              </div>
              <form onSubmit={(e)=> handleSubmit(e)} className='flex flex-col gap-5 mt-10'>
                <div className='flex flex-col gap-3'>
                  <input name='email' placeholder='Phone number, username, or email' value={email} onChange={(e) => setEmail(e.target.value)} className=' rounded-sm w-70 h-10 bg-gray-100 px-3' type="text" />
                  <input name='password' placeholder='Password' className=' rounded-sm w-70 h-10 bg-gray-100 px-3' onChange={(e) => setPassword(e.target.value)} value={password} type="password" />
                </div>
                <button type={`${email && password != "" ? 'submit' : 'button'}`} className={`text-center text-white ${email && password != "" ? 'bg-blue-400 cursor-pointer' : 'bg-blue-300 cursor-not-allowed'} rounded-xl h-9 pt-1 font-bold `}>
                  Log In
                </button>
                <div className='flex flex-row'>

                  <hr className='w-28 mt-2 me-3 text-gray-400'></hr>
                  <p className='text-gray-500 text-bold'>OR</p>
                  <hr className='w-28 mt-2 ms-3 text-gray-400'></hr>

                </div>
                <div className='flex flex-row gap-2 justify-center'>
                  <Image className='w-8' alt='logo-fb' width={1000} height={1000} src='/fb_logo.webp' />
                  <p className='mt-1 text-blue-500 font-bold'>Log in with Facebook</p>
                </div>
                <div className='text-center'>
                  <p>Forgot password?</p>
                </div>
                <div className='text-center mt-10 mb-8'>
                  <p>Don't have an account? <span onClick={handleClickSignUp} className='font-bold text-blue-400 cursor-pointer'>Sign up</span></p>
                </div>
                <div className='text-center'>
                  <p>Get the app.</p>
                </div>
                <div className='flex flex-row gap-2 justify-center'>
                  <Image className='w-32' alt='logo-app-store' width={1000} height={1000} src='/asset/appstorelogo.png' />
                  <Image className='w-32' alt='logo-play-store' width={1000} height={1000} src='/asset/playstorelogo.png' />
                </div>
              </form>
            </div>

          </div>
        </div>


      </div>
      <div className=' grid grid-cols-12 gap-4 w-screen justify-center h-1/10'>
        <div className='col-span-12'>
          <div className='w-ful flex justify-center'>
          <LinkFooter/>
          </div>
         
        </div>
        <div className='mb-10 col-span-12 flex justify-center text-gray-400'>
          <div>
            English 
          </div>
          <div className=''>
          © 2025 Hudzaifah Assyahid
          </div>
        </div>
      </div>
  

    </div>

  )
}
