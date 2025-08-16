import React from 'react'
import { Link } from 'react-router-dom'
function Contact() {
    return (
        <>
            <div>
                <div className='flex justify-end items-center p-3'>
                    <Link to={'/'} className='hover:cursor-pointer hover:text-[#6806ed]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" color='#6806ed' strokeWidth="1.5" stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </Link>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='w-[80%] md:w-[50%] '>
                        <form action="" className='flex flex-col gap-2 md:p-10'>
                            <label htmlFor="name" className='font-bold'>Your name</label>
                            <input type="text" className='border p-2 rounded w-full' placeholder="Your Name" />
                            <label htmlFor="email" className='font-bold'>Email address</label>
                            <input type="email" className='border p-2 rounded w-full' placeholder="Your Email" />
                            <label htmlFor="message" className='font-bold'>Message</label>
                            <textarea className='border input-style  p-2 rounded w-full h-40' placeholder="Your Message"></textarea>
                            <button type="submit" className='bg-[#6806ed] focus:cursor-pointer hover:cursor-pointer text-white py-2 px-4 rounded'>Send message</button>
                        </form>
                    </div>
                    <div className='flex justify-center items-center w-[80%] md:w-[50%]'>
                        <img src="/contacts.gif" alt="" className='w-[30rem] h-auto ' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact