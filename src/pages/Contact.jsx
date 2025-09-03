import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import { useState } from 'react'
import { toast } from 'react-toastify';
function Contact() {
    const [buttonDisable , setButtonDisable] = useState(false);
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();

        setButtonDisable(true);

        try {
            await emailjs.sendForm(
                'service_937fhxn',     // replace with your actual Service ID
                'template_r9c6ket',    // replace with your actual Template ID
                form.current,
                'QoDbsUGWlLCaqvqjS'      // replace with your actual Public Key

            );
            toast.success('Message sent successfully')
            form.current.reset();
        } catch (error) {
            console.error('Error sending email:', error);
            toast.error('Failed to send message. Please try again later.');
        } finally {
            setButtonDisable(false);
        }
    };
    return (
        <>
            <div>
                <div className='flex justify-end items-center p-3'>
                    <Link to={'/'} className='hover:cursor-pointer hover:text-[var(--bg-color)]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" color='var(--bg-color)' strokeWidth="1.5" stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </Link>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='w-[80%] md:w-[50%] '>
                        <form action="" ref={form} onSubmit={sendEmail} className='flex flex-col gap-2 md:p-10'>
                            <label htmlFor="name" className='font-bold'>Your name</label>
                            <input type="text" name='name' className='border border-[#8f8d8d] p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-[#8f8d8d]' required placeholder="Your Name" />
                            <label htmlFor="email" className='font-bold'>Email address</label>
                            <input type="email" name='email' className='border border-[#8f8d8d] focus:outline-none focus:ring-2 focus:ring-[#8f8d8d] p-2 rounded w-full' required placeholder="Your Email" />
                            <label htmlFor="message" className='font-bold'>Message</label>
                            <textarea name='message' className='border border-[#8f8d8d] p-2 rounded w-full h-40 focus:outline-none focus:ring-2 focus:ring-[#8f8d8d]' required placeholder="Your Message"></textarea>
                            <button type="submit" disabled={buttonDisable} className='bg-[var(--bg-color)] mt-5 focus:cursor-pointer hover:cursor-pointer text-white py-2 px-4 rounded-0'>{
                                buttonDisable ? "Sending..." : "Send message"
                            }</button>
                        </form>
                    </div>
                    <div className=' my-5 flex justify-center items-center w-[80%] md:w-[50%]'>
                        <img src="/contacts.gif" alt="" className='w-[30rem] h-auto rounded-xl' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact