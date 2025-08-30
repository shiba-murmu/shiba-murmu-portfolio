import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <>
            <div className='md:flex md:h-[5rem] h-[3rem] pt-5 md:pt-0 flex items-center justify-evenly md:gap-0'>
                <div className='md:w-1/2'>
                    <div className='flex items-center justify-start ml-1 md:ml-15'>
                       <span className='text-2xl md:text-2xl font-bold'> Portfolio </span>
                    </div>
                </div>
                <div className='hidden md:w-1/2 md:flex gap-3 text-lg items-center justify-end mr-10'>
                    <div>Web developer</div>
                    <Link to={'/contact'}>
                        <span className='text-lg rounded-0 bg-[var(--bg-color)] text-white p-1.5 md:p-2 md:px-6 hover:cursor-pointer  hover:border-none hover:text-white'>Say Hello</span>
                    </Link>
                </div>
                <div className='md:hidden flex items-center justify-center'>
                    <Link to={'/contact'} className='md:hidden'>
                        <span className=' md:hidden text-sm rounded-0 bg-[var(--bg-color)] text-white p-2 px-5 hover:cursor-pointer hover:bg-[var(--bg-color)] hover:border-[white] hover:text-white'>Say hello</span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header