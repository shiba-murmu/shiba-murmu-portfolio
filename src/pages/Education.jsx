import React from 'react'
import HeadingText from '../component/HeadingText'

function CardForEducation({ Course, University, Year, College }) {
    return (
        <>
            <div className='p-5 md:w-6/7 mx-2 md:mx-0 md:h-full border border-gray-400 shadow md:shadow-2xl'>
                <div className='flex justify-center items-center md:h-full text-center flex-col gap-2 '>
                    <div>
                        <span className='font-bold text-2xl md:text-4xl text-[#175c8b]'>{Course}</span>
                    </div>
                    <div>
                        <span className='font-semibold text-[var(--smallText-color)]'>{University}</span>
                    </div>
                    <div>
                        <span className='font-light text-[var(--smallText-color)]'>{Year}</span>
                    </div>
                    <div>
                        <span className='font-semibold text-[var(--smallText-color)]'>{College}</span>
                    </div>
                </div>
            </div>
        </>
    )
}


function Education() {
    return (
        <>
            <div>
                <div className='flex mb-5 md:mb-20 justify-center items-center'>
                    <HeadingText Children={'Education'} />
                </div>


                <div className='flex justify-center items-center flex-col gap-10 md:gap-20'>
                    <div className='md:w-full md:h-[50vh]  flex animate__animated animate__bounceInRight'>
                        <div className='md:w-1/2'>

                        </div>
                        <div className='md:w-1/2'>
                            <CardForEducation
                            className={' flex animate__animated animate__bounceInRight'}
                                Course={'Bachelor Of Technology'}
                                University={'Jharkhand University of Technology'}
                                Year={'2021 - 2025'}
                                College={'Maryland Institute Of Technology And Management, Jamshedpur'}
                            />
                        </div>
                    </div>


                    <div className='md:w-full md:h-[50vh]  flex'>
                        <div className='md:w-1/2 md:flex md:justify-center md:items-center'>
                            <CardForEducation
                                Course={'Intermediate'}
                                University={'Central Board Of Secondary Education (CBSE)'}
                                Year={'2019 - 2020'}
                                College={'Baldwin Farm Area High School, Kadma'}
                            />
                        </div>
                        <div className='md:w-1/2'>

                        </div>
                    </div>


                    <div className='md:w-full md:h-[50vh]  flex'>
                        <div className='md:w-1/2'>
                        </div>
                        <div className='md:w-1/2'>

                            <CardForEducation
                                Course={'Matriculation'}
                                University={'Central Board Of Secondary Education (CBSE)'}
                                Year={"2009 - 2019"}
                                College={'B.M D.A.V. Residential Public School, Ranchi'}
                            />
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Education