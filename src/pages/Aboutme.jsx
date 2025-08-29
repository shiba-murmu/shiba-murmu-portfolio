import React from 'react'
import HeadingText from '../component/HeadingText'
import useInView from './../hooks/useInView'
function Aboutme() {
    const [ref, isInView] = useInView({threshold : 0.2})
  return (
    <>
        <div className='block md:flex justify-center items-center'>
            <div className='hidden md:flex justify-center items-center md:w-1/2 p-5 '>
                <img src="/reading.gif" alt="user image"
                className='rounded-2xl h-[30rem]'/>
            </div>
            <div className='flex flex-col justify-center items-center md:items-start md:w-1/2 p-5'>
                {/* for heading */}
                {/* <span className='text-3xl text-black md:text-4xl font-bold '>About Me</span> */}
                <HeadingText Children={'About me'} />
                    {/* <hr /> */}
                <div ref={ref}>
                    <p className={`${isInView ? "animate__animated animate__fadeInDown mt-4 text-md md:text-lg" : " "}`}>I am a Computer Science graduate (B.Tech, 2025) with strong skills in Python, Django, and React.js. I enjoy building dynamic, user-friendly web applications and have completed several projects combining frontend and backend development. Passionate about problem-solving and eager to learn new technologies.</p>
                    <p className={`${isInView ? "animate__animated animate__fadeInDown delay-500 mt-4 text-md md:text-lg" : ""}`}> My journey in web development began with a curiosity for how websites work, and it has since evolved into a full-fledged career.</p>
                    <p className={`${isInView ? "animate__animated animate__fadeInDown delay-1000 mt-2 text-md md:text-lg" : " "}`}>I enjoy working with the latest technologies and frameworks to build user-friendly interfaces and seamless user experiences. My goal is to continuously learn and grow as a developer while contributing to meaningful projects.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Aboutme