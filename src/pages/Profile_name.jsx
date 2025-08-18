import React from 'react'
import Urls from '../component/urls'

function Profile_name() {
    // profile name and description content.
    return (
        <>
            <div className='flex flex-col justify-start items-center gap-5 h-[90vh] md:h-[100vh]'>
                <div className='mt-30'>
                    <img src={Urls.PROFILE_PIC} alt="user image"
                        className='h-[10rem] w-[10rem] md:h-[12rem] md:w-[12rem]  object-cover rounded-full '
                    />
                </div>
                <div className='flex flex-col items-center justify-center gap-2 text-center'>
                    <h1 className='text-4xl font-bold md:text-6xl'>Shiba Murmu</h1>
                    <h2 className='text-md md:text-lg text-[#6806ed]'>Web developer</h2>
                    <p>Turning ideas into clean, user-friendly, and impactful code.</p>
                </div>
                <div className='flex gap-5'>
                    <a href="/resume.pdf" download={'Shiba_Murmu_Resume.pdf'} className='border-b-2 bg-[#6806ed] text-white py-2 px-4 rounded'>Download resume</a>
                </div>
            </div>
        </>
    )
}

export default Profile_name