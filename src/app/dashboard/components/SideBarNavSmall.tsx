import React from 'react'

export default function SideBarNavSmall(props: any) {
    const { children, menus } = props;

    const tes: string = menus[0].name

    return (
        <div>
            <div className=' h-12 flex flex-row gap-0 justify-around items-center'>
                {menus.map((menu: any, idx: number) => (
                    <div key={idx} className='' >
                        {idx == 0 &&
                            <div className=''>
                                {menu.name}
                            </div>}

                        {idx == 2 && <div className=' 0'>
                            <input type='text' placeholder={"  " + menu.name} className='w-70 border border-gray-300 h-8 bg-gray-200 rounded-md' />
                        </div>}

                        {idx == 6 &&
                            <div className=' '>
                                {menu.icon}
                            </div>}


                    </div>


                ))}

            </div>
            {children}
            <div className='absolute bottom-0'>

                <div className=' h-12 flex flex-row justify-between w-full items-center ' >

                    {menus.map((menu: any, idx: number) => (
                        <div key={idx} className='' >
                            {idx !== 0 && idx !== 0 && idx !== 2 && idx !== 6 && idx < 9 ?

                                <div className=' hover:bg-gray-100 mx-4 w-10 h-10 flex justify-around items-center cursor-pointer'>
                                    {menu.icon}
                                </div> :
                                <div className='hidden'>

                                </div>
                            }



                        </div>


                    ))}

                </div>

            </div>

        </div>
    )
}
