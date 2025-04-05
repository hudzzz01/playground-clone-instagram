import SideBarNav from "./components/SideBarNav";
import { faAirbnb, faFacebookMessenger, faInstagram, faInternetExplorer, faThreads } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faCompass, faFilm, faGhost, faHeart, faHouse, faList, faMagnifyingGlass, faSquare, faSquarePlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import SideBarNavSmall from "./components/SideBarNavSmall";

export default function DashboardLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const menus = [
        {
            name: <Image alt='instagram-text' width={1000} height={1000} className=' w-32 px-3' src='/instagram-text-dark.png' />,
            icon: <FontAwesomeIcon size="xl" icon={faInstagram} />
        },
        {
            name: "Home",
            icon: <FontAwesomeIcon size="xl" icon={faHouse} />
        },
        {
            name: "Search",
            icon: <FontAwesomeIcon size="xl" icon={faMagnifyingGlass} />
        },
        {
            name: "Explore",
            icon: <FontAwesomeIcon size="xl" icon={faCompass} />
        },
        {
            name: "Reels",
            icon: <FontAwesomeIcon size="xl" icon={faFilm} />
        },
        {
            name: "Message",
            icon: <FontAwesomeIcon size="xl" icon={faFacebookMessenger} />
        },
        {
            name: "Notifications",
            icon: <FontAwesomeIcon size="xl" icon={faHeart} />
        },

        {
            name: "Create",
            icon: <FontAwesomeIcon size="xl" icon={faSquarePlus} />
        },

        {
            name: "Profile",
            icon: <FontAwesomeIcon size="xl" icon={faUser} />
        },

        {
            name: "AI Studio",
            icon: <FontAwesomeIcon size="xl" icon={faGhost} />
        },

        {
            name: "Threads",
            icon: <FontAwesomeIcon size="xl" icon={faThreads} />
        },

        {
            name: "More",
            icon: <FontAwesomeIcon size="xl" icon={faList} />
        },


    ]

    return (
        <div>
            <div className="grid grid-cols-12 h-screen">
                <div className="col-span-1 xl:col-span-2 border border-gray-200 hidden md:block">
                    <SideBarNav menus = {menus} />
                </div>



                <div className="col-span-12 md:col-span-10">
                    <div className="hidden md:block">
                        
                         {children}
                    </div>
{/* 
                    //sm navbar handle */}
                    <div className="col-span-12 block md:hidden">
                         <SideBarNavSmall menus = {menus} children = {children}/>
                    </div>
                </div>
               

            </div>

        </div>
    )
}