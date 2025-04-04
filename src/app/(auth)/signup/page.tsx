"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export default function SignUpPage() {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        fullname: "",
        username: "",
    })

    const onChangeValue = (key: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    return (
        <div className='h-screen'>
            <div className='grid grid-cols-12'>
                <div className='col-span-12 flex flex-col justify-center items-center mt-5'>
                    <div className='flex flex-col justify-center items-center outline outline-gray-300 w-100 gap-5 p-10'>

                        <div className='mt-10'>
                            <Image alt='instagram-text' width={1000} height={1000} className=' w-full h-15' src='/instagram-text-dark.png' />
                        </div>

                        <p
                            className='
                        text-center
                        text-xl
                        font-semibold
                        text-gray-500
                        '
                        >Sign up to see photos and videos from your friends.</p>

                        <button type={"button"} className={`text-center text-white bg-blue-400 w-full rounded-xl h-9 pt-1 font-bold flex items-center justify-center gap-2`}>
                            <Image alt='facebook-icon' width={100} height={100} className=' w-5 h-5' src='/fb_logo_white.png' /> Log In with Facebook
                        </button>

                        <div className='flex flex-row'>

                            <hr className='w-28 mt-2 me-3 text-gray-400'></hr>
                            <p className='text-gray-500 text-bold'>OR</p>
                            <hr className='w-28 mt-2 ms-3 text-gray-400'></hr>

                        </div>

                        <div className='flex flex-col gap-3'>
                            <input name='email' placeholder='Mobile Number or email' value={formData.email} onChange={(e) => onChangeValue("email", e.target.value)} className=' rounded-sm w-70 h-10 bg-gray-100 px-3' type="text" />
                            <input name='password' placeholder='Password' className=' rounded-sm w-70 h-10 bg-gray-100 px-3' onChange={(e) => onChangeValue("password", e.target.value)} value={formData.password} type="password" />
                            <input name='fullname' placeholder='Full Name' className=' rounded-sm w-70 h-10 bg-gray-100 px-3' onChange={(e) => onChangeValue("fullname", e.target.value)} value={formData.fullname} type="text" />
                            <input name='username' placeholder='Username' className=' rounded-sm w-70 h-10 bg-gray-100 px-3' onChange={(e) => onChangeValue("username", e.target.value)} value={formData.password} type="text" />

                        </div>

                        <div className='w-full px-4 flex flex-col gap-5 text-gray-500'>

                            <p className='text-center text-sm'>
                                People who use our service may have uploaded your contact information to Instagram. <span className='text-blue-800'> Learn More </span>
                            </p>

                            <p className='text-center text-sm'>
                                By signing up, you agree to our Terms , <span className='text-blue-800' > Privacy Policy </span> and <span className='text-blue-800' > Cookies Policy </span>.
                            </p>




                        </div>

                        <button className={`text-center bg-blue-400 text-white cursor-pointer rounded-xl h-9 pt-1 font-bold w-full `}>
                            Sign Up
                        </button>



                    </div>
                </div>
            </div>

            <div className='grid grid-cols-12'>
                <div className='col-span-12 flex flex-col justify-center items-center mt-5'>
                    <div className='flex flex-col justify-center items-center  outline outline-gray-300 w-100 gap-0 py-4 mb-5'>
                        <p>Have an account?</p>
                        <Link href={"/login"} className='text-blue-400 font-bold' > Log in </Link>
                    </div>
                    <div className='text-center mb-2'>
                        <p>Get the app.</p>
                    </div>
                    <div className='flex flex-row gap-2 justify-center'>
                        <Image className='w-32' alt='logo-app-store' width={1000} height={1000} src='/asset/appstorelogo.png' />
                        <Image className='w-32' alt='logo-play-store' width={1000} height={1000} src='/asset/playstorelogo.png' />
                    </div>
                </div>
            </div>

        </div>
    )
}
