import React from 'react'
import { Link } from 'react-router-dom'
import HeadingText from '../component/HeadingText'
function Stay_in_touch() {
    return (
        <div className='h-[30vh] mt-20 p-5 flex flex-col items-center justify-center gap-5'>
            <HeadingText Children={'Stay in Touch'} />
            <p className='text-sm text-center md:text-lg '>Feel free to reach out for collaborations or just a chat!</p>
            <div className='flex items-center gap-4 md:gap-3'>
                <a href="https://github.com/shiba-murmu" className='text-sm rounded-4xl  hover:cursor-pointer  hover:border-[white] hover:text-white'>
                    <img src="/contact_gitHub.png" alt="" className='bg-white rounded-full h-8 w-8 md:h-9 md:w-9' />
                </a>
                <a href="https://www.linkedin.com/in/shibamurmu/" className='text-sm rounded-4xl  hover:cursor-pointer  hover:border-[white] hover:text-white'>
                    <img src="/LinkedIn.png" alt="" className='h-8 w-8 md:h-9 md:w-9' />
                </a>
                <a href="" className='text-sm rounded-4xl  hover:cursor-pointer  hover:border-[white] hover:text-white'>
                    <Link to={'/contact'}>
                        <img src="/gmail.png" alt="" className=' h-8.5 w-8.5  md:h-10.5 md:w-10.5' />
                    </Link>
                </a>
            </div>
        </div>
    )
}

export default Stay_in_touch