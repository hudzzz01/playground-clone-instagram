import React from 'react'
import ProfileCard from './ProfileCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'
import Image from 'next/image'
import { faCommentDots as farCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { RiTelegramLine } from 'react-icons/ri'
import { FaRegBookmark } from 'react-icons/fa'
import { CiBookmark } from 'react-icons/ci'

export default function PostCard(props:any) {
    const {image} = props
    return (
        <div className='w-115 h-full mb-10 rounded'>
            <div className='w-full h-15 bg-white grid grid-cols-12 pt-2'>
                <div className='h-10 col-span-11 flex items-center'>
                    <div>
                        <ProfileCard sizeAvatar={10} dontShowBtn={true} dontShowName={true} image={'/ayunda2.jpeg'} />
                    </div>
                    <div>
                        <div className='flex justify-center items-center gap-1 mb-2'>
                            <p className='font-bold text-gray-500 text-center text-3xl font-bold'>.</p>
                            <p className='font-bold text-gray-500 text-center pt-2 text-md font-bold'>1h</p>
                            {/* <p className='font-bold text-gray-500 text-center text-3xl font-bold'>.</p> */}
                        </div>
                    </div>
                </div>

                <div className='w-full flex justify-end'>
                    <p><FontAwesomeIcon size="xl" icon={faEllipsis} /></p>
                </div>
            </div>

            <div>
                <Image objectFit='object-position' alt='avatar' width={500} height={500} className='rounded w-full h-full' src={image || '/ayunda2.jpeg'} />
            </div>

            <div className='w-full grid grid-cols-12 h-10 bg-white pt-1'>
                {/* panel section */}
                <div className='col-span-11 flex items-center gap-3 ps-0'>
                    <FontAwesomeIcon size="xl" icon={faHeart} />
                    <FontAwesomeIcon size="xl" icon={farCommentDots} />
                    <RiTelegramLine size={30}className='inline-block' />
                </div>
                <div className='col-span-1 className flex justify-center items-center'>
                    <CiBookmark size={29} />
                </div>
            </div>
            <div className='w-full h-10 bg-white grid grid-cols-12'>
                <div className='col-span-1 flex items-center'>
                     <Image style={{ objectFit: 'cover' }} alt='avatar' width={500} height={500} className={` w-${5} h-${5} rounded-full bg-white `} src='/ayunda2.jpeg' />
                     <Image style={{ objectFit: 'cover' }} alt='avatar' width={500} height={500} className={` w-${5} h-${5} rounded-full bg-white`} src='/ayunda2.png' />
                     <Image style={{ objectFit: 'cover' }} alt='avatar' width={500} height={500} className={` w-${5} h-${5} rounded-full bg-white`} src='/ayunda_demon.png' />
                </div>
                <div className='col-span-11 flex items-center'>
                    <p className='font-bold ms-2'>21,783 likes</p>
                </div>
                <div className='col-span-12 flex items-center'>
                <p className='mt-1'>
                        ANAK TEKNIK PLAYBOY? <span className='font-italic text-blue-500' >#YTTA</span>
                    </p>
                </div>
            </div>
                <p className='font-light text-gray-500 text-s'> Add a comment ...</p>
                <hr className='rounded border-gray-400' />
        </div>
    )
}
