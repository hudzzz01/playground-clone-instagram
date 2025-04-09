"use client"
import SideBarNav from "./components/SideBarNav";
import { faAirbnb, faFacebookMessenger, faInstagram, faInternetExplorer, faThreads } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faCompass, faFilm, faGhost, faHeart, faHouse, faList, faMagnifyingGlass, faSquare, faSquarePlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import SideBarNavSmall from "./components/SideBarNavSmall";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import path from "path";



export default function DashboardLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {



    const [isDirect,setIsDirect] = React.useState(false)

    const pathName = usePathname();
    useEffect(() => {
        if(pathName.includes("direct")) {
            setIsDirect(true)
        }else{
            setIsDirect(false)
        }
        console.log(pathName);
        
    },[pathName])
   

    

    const menus = [
        {
            name: <Image alt='instagram-text' width={1000} height={1000} className=' w-32 px-3' src='/instagram-text-dark.png' />,
            icon: <FontAwesomeIcon size="xl" icon={faInstagram} />,
                url : "/"
        },
        {
            name: "Home",
            icon: <FontAwesomeIcon size="xl" icon={faHouse} />,
                 url : "/dashboard"
        },
        {
            name: "Search",
            icon: <FontAwesomeIcon size="xl" icon={faMagnifyingGlass} />,
                 url : "/"
        },
        {
            name: "Explore",
            icon: <FontAwesomeIcon size="xl" icon={faCompass} />,
                 url : "/"
        },
        {
            name: "Reels",
            icon: <FontAwesomeIcon size="xl" icon={faFilm} />,
                 url : "/"
        },
        {
            name: "Message",
            icon: <FontAwesomeIcon size="xl" icon={faFacebookMessenger} />,
                 url : "/dashboard/direct"
        },
        {
            name: "Notifications",
            icon: <FontAwesomeIcon size="xl" icon={faHeart} />,
                 url : "/"
        },

        {
            name: "Create",
            icon: <FontAwesomeIcon size="xl" icon={faSquarePlus} />,
                 url : "/"
        },

        {
            name: "Profile",
            icon:  <Image style={{ objectFit: 'cover' }} alt='avatar' width={500} height={500} className=' w-10 h-10 rounded-full bg-white p-1' src='/ayunda2.jpeg' />,
                 url : "/dashboard/profile"
        },

        {
            name: "AI Studio",
            icon: <FontAwesomeIcon size="xl" icon={faGhost} />,
                 url : "/"
        },

        {
            name: "Threads",
            icon: <FontAwesomeIcon size="xl" icon={faThreads} />,
                 url : "/"
        },

        {
            name: "More",
            icon: <FontAwesomeIcon size="xl" icon={faList} />,
                 url : "/"
        },


    ]

    return (
        <div>
            <div className="grid grid-cols-12 h-screen">
                <div className={  `col-span-1 border border-gray-200 hidden md:block ${isDirect ? "xl:col-span-1" : "xl:col-span-2"}`}>
                    <div className="fixed">
                         <SideBarNav menus = {menus} isDirect = {isDirect}/>

                    </div>
                </div>

                
                
                <div className="col-span-12 md:col-span-11 xl:col-span-10">
                    
                    <div className="hidden md:block">
                         {children}
                    </div>

                    <div className="col-span-12 block md:hidden">
                         <SideBarNavSmall menus = {menus} children = {children}/>
                    </div>
                </div>
               

            </div>

        </div>
    )
}