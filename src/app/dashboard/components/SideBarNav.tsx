"use client"
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function SideBarNav(props : any) {
    const {menus, isDirect} = props




    const nav = useRouter()

    const handleClickButton = (url:string)=>{
        nav.push(url)
    }
   
    return (
        <div className='bg-white '>
            {
                menus.map((menu:any,idx : number)=>(
                    <div onClick={() => handleClickButton(menu.url)}  key={idx} className={` flex items-center  ${idx === 9 && "mt-50 xl:mt-60"} ${idx === 0 && "mb-10 mt-5 xl:mb-10"}`} >
                        <div className={`px-4 flex justify-center w-full  pe-2 py-3  rounded hover:bg-gray-100 cursor-pointer xl:w-15 xl:ms-2 xxl:justify-center ${idx == 0 && " xl:hidden"}`}>{menu.icon}</div>
                            <div className={`text-sm font-semibold hidden  ${idx=== 0 && "flex justify-center w-full "}  ${isDirect ? "xl:hidden" : "xl:flex" }`}>
                                {menu.name}
                            </div>
                    
                    </div>
                ))
            }
        </div>
    )
}
