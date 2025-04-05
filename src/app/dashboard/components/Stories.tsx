"use client"
import React, { useRef } from 'react'
import StoryAvatar from './StoryAvatar'
import "./componets.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';

export default function Stories() {
    const stories = [{
        id: 1,
        name: "ayunda",
        image: "/ayunda2.jpeg"
    },
    {
        id: 2,
        name: "ayunda",
        image: "/ayunda2.jpeg"
    },
    {
        id: 4,
        name: "ayunda",
        image: "/ayunda2.jpeg"
    }
        ,
    {
        id: 5,
        name: "ayunda",
        image: "/ayunda2.jpeg"
    }
        ,
    {
        id: 6,
        name: "ayunda",
        image: "/ayunda2.jpeg"
    }
        ,
    {
        id: 7,
        name: "ayunda",
        image: "/ayunda2.jpeg"
    }
        ,
    {
        id: 8,
        name: "ayunda",
        image: "/ayunda2.jpeg"
    },
    {
        id: 9,
        name: "ayunda",
        image: "/ayunda2.jpeg"
    },
    {
        id: 10,
        name: "ayunda",
        image: "/ayunda2.jpeg"
    },
    ,
    {
        id: 10,
        name: "ayunda",
        image: "/ayunda2.jpeg"
    }
    ]

    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: string) => {
        const container = scrollRef.current;
        const scrollAmount = 300;

        if (container !== null) {
            container.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            })
        }



    }

    return (
        <div className=''>
            <div className='relative right-0 top-20 align-center' onClick={() => scroll("left")}> <span className='rounded-full   px-2 text-gray-500 hover:text-gray-800'> <FontAwesomeIcon size="xl" icon={faBackward} /> </span></div>
            <div className='relative w-10 left-9/10 top-14 ps-2 align-center' onClick={() => scroll("right")}> <span className='rounded  -full px-2 text-gray-500 hover:text-gray-800' ><FontAwesomeIcon size="xl" icon={faForward} /> </span> </div>

            <div className='ms-10'>

                <div ref={scrollRef} className='stories w-9/10 h-33 flex'>


                    {stories.map((story: any, idx: number) => (
                        <div key={idx}>

                            <StoryAvatar />
                        </div>
                    ))}

                </div>


            </div>




        </div>
    )
}
