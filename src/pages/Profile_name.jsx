import React from 'react'
import Urls from '../component/urls'
import PopUp_open from '../component/animate/PopUp_open'
import Click_animation from '../component/animate/Click_animation'
function Profile_name() {
    // profile name and description content.
    return (
        <>
            <div className='flex md:mb-20  flex-col justify-start items-center gap-5 h-[90vh] md:h-[100vh]'>
                <div className='mt-20 md:mt-30'>
                    <PopUp_open>
                        <img src={Urls.PROFILE_PIC} alt="user image"
                            className='h-[13rem] w-[13rem] md:h-[23rem] md:w-[23rem]
                            object-cover rounded-0 rounded-full md:rounded-full '
                        />
                    </PopUp_open>
                </div>
                <div className='flex flex-col items-center justify-center gap-2 text-center'>
                    <h1 className='animate__animated animate__zoomInUp text-4xl font-bold md:text-6xl '>Shiba Murmu</h1>
                    <h2 className='text-md md:text-lg text-[var(--smallText-color)]'>Web developer</h2>
                    <p className='md:text-lg'>Turning ideas into clean, user-friendly, <br /> and impactful code.</p>
                </div>
                <div className='flex gap-5'>
                    <Click_animation>
                        <a href="/resume.pdf" download={'Shiba_Murmu_Resume.pdf'} className=' bg-[var(--bg-color)] text-white py-3 px-4 rounded-0'>Download resume</a>
                    </Click_animation>
                </div>
            </div>
        </>
    )
}

export default Profile_name