"use client"
import Image from 'next/image'
import React, { use, useRef } from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { TbPhotoVideo } from 'react-icons/tb'

export default function AddPost() {
    const refInput = useRef<HTMLInputElement | null>(null)
    const [isImage, setIsImage] = React.useState(false)
    const [files, setFiles] = React.useState<FileList | null>(null)

    const [isAddDescription, setIsAddDescription] = React.useState(false)

    const handleClickUpload = () => {
        refInput.current?.click()
    }

    const handleChangeImage = (files: FileList | null) => {
        if (files && files[0]) {
            const file = files[0]
            setIsImage(true)
            setFiles(files)
        }
    }

    const handleClickNext = () => {
        if(isAddDescription){
            console.log("submitting file ....", files);
            
            return
        }
        setIsAddDescription(true)
    }

    const handleClickBack = () => {
        setIsAddDescription(false)
    }

    const DescriptionCompont = () => {
        return (
            <div className='w-200 mx-5'>
                Insert Description
                <input className='border border-gray-300 rounded h-8 w-full' type="text" placeholder='Description' />
            </div>
        )
    }



    return (
        <div className='grid grid-cols-12 bg-slate-100  h-full rounded'>
            <div className='col-span-12 text-center h-10 pt-2 border-b border-gray-300'>
                <div className={`flex ${isImage ? "justify-between" : "justify-center"} mx-10 items-center gap-2`}>
                    <button className={`${isImage ? "" : "hidden"}`} onClick={handleClickBack}> <FaLongArrowAltLeft /> </button>
                    <p className='font-bold text-xl text-gray-900'>Create new post</p>
                    <button className={`text-blue-500 hover:text-blue-700 font-bold text-lg ${isImage ? "" : "hidden"}`} onClick={handleClickNext} > next </button>

                </div>
               
            </div>

            <div className='col-span-12 bg-white h-200 flex flex-col justify-center align-center'>
                {isImage &&
                    <div className='w-full flex flex-row justify-center items-center gap-2 mt-40'>
                        <div className='flex align-center justify-center'>
                        <Image  alt='avatar' width={1000} height={1000} className={`rounded h-full`} src={URL.createObjectURL(files![0])} />
                        
                        {
                            isAddDescription &&
                                DescriptionCompont()
                        }

                        </div>

                    </div>

                    ||

                    <div className='w-full flex flex-col justify-center items-center gap-2'>
                        <TbPhotoVideo size={100} />
                        <button onClick={handleClickUpload} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' >Select From Computer</button>
                        <input onChange={(e) => handleChangeImage(e.target.files)} ref={refInput} type="file" className='hidden' />
                    </div>

                }

            </div>
        </div>
    )
}
