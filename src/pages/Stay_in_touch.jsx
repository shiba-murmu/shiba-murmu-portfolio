import React from 'react'

function Stay_in_touch() {
    return (
        <div className='bg-[#1e0545] h-[50vh] mt-20 p-5 rounded-2xl flex flex-col items-center justify-center gap-5'>
            <h2 className='text-5xl font-bold text-[#98197c]'>Stay in Touch</h2>
            <p className='text-sm md:text-lg '>Feel free to reach out for collaborations or just a chat!</p>
            <div className='flex gap-3'>
                <a  href="https://github.com/shiba-murmu"  className='text-sm rounded-4xl  hover:cursor-pointer hover:bg-[#98197c] hover:border-[white] hover:text-white'>
                    <img src="/contact_gitHub.png" alt="" className='bg-white rounded-full h-13 w-13' />
                </a>
                <a href="https://www.linkedin.com/in/shiba-murmu/" className='text-sm border rounded-4xl p-2 px-5 hover:cursor-pointer hover:bg-[#98197c] hover:border-[white] hover:text-white h-10 w-10'>
                    <img src="/LinkedIn.png" alt="" className='w-5 h-5' />
                </a>
            </div>
        </div>
    )
}

export default Stay_in_touch