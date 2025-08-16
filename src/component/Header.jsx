import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <>
            <div className='md:flex md:h-[5rem] h-[3rem] pt-5 md:pt-0 flex items-center justify-center md:gap-0 gap-x-35'>
                <div className='md:w-1/2'>
                    <div className='flex items-center justify-start ml-1 md:ml-15'>
                        {/* <div>W</div> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color='#6806ed' className="size-10 m-0 md:size-15">
                            <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div className='hidden md:w-1/2 md:flex gap-3 items-center justify-end mr-10'>
                    <div>Web developer</div>
                    <Link to={'/contact'}>
                        <span className='text-md border rounded-4xl p-1.5 md:px-6 hover:cursor-pointer hover:bg-[#6806ed] hover:border-[white] hover:text-white'>Say Hello</span>
                    </Link>
                </div>
                <div>
                    <Link to={'/contact'} className='md:hidden'>
                        <span className='border md:hidden text-sm rounded-4xl p-2 px-5 hover:cursor-pointer hover:bg-[#6806ed] hover:border-[white] hover:text-white'>Say hello</span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header