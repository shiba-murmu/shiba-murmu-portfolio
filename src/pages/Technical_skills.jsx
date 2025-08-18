import React from 'react'
import Urls from '../component/urls'
function Technical_skills() {
    return (
        <>
            <div className='md:h-[70vh]  p-5'>
                <div className='mt-20 mb-5 md:my-15'>
                    <span className='text-2xl md:text-4xl text-white font-bold border-l-1 px-4 py-2 rounded-r-md bg-[#6806ed]'>Technical skills</span>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-x-1 gap-y-3'>
                    <div className=' rounded-xl h-[3rem] flex justify-start md:justify-center items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 md:size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                        </svg>
                        <span className='font-bold text-2xl text-[#6806ed]'>
                            Language
                        </span>
                    </div>
                    <div className='md:hidden pl-10'>
                        {/* for mobile view */}
                        <ul className=' text-lg'>
                            <li>
                                <img src={Urls.PYTHON} alt="" className='inline-block w-6 h-6 mr-2' />
                                Python
                            </li>
                            <li>
                                <img src={Urls.JAVASCRIPT} alt="" className='inline-block w-6 h-6 mr-2' />JavaScript</li>
                            <li>
                                <img src={Urls.JAVA} alt="" className='inline-block w-6 h-6 mr-2' />Java</li>
                            <li>
                                <img src={Urls.C} alt="" className='inline-block w-6 h-6 mr-2' />C</li>
                        </ul>
                    </div>
                    <div className='rounded-xl h-[3rem] flex justify-start md:justify-center items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 md:size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                        </svg>

                        <span className='font-bold text-2xl text-[#6806ed]'>
                            Framework & Library
                        </span>
                    </div>
                    <div className='md:hidden pl-10'>
                        {/* for mobile view */}
                        <ul className=' text-lg'>
                            <li>
                                <img src={Urls.DJANGO} alt="" className='inline-block w-6 h-6 mr-2' />Django</li>
                            <li>
                                <img src={Urls.REACT} alt="" className='inline-block w-6 h-6 mr-2' />React</li>
                            <li>
                                <img src={Urls.TAILWIND_CSS} alt="" className='inline-block w-6 h-4 mr-2' />Tailwind CSS</li>
                            <li>
                                <img src={Urls.BOOTSTRAP} alt="" className='inline-block w-6 h-6 mr-2' />Bootstrap</li>
                        </ul>
                    </div>

                    <div className=' rounded-xl h-[3rem] flex justify-start md:justify-center items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 md:size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                        <span className='font-bold text-2xl text-[#6806ed]'>
                            Database
                        </span>
                    </div>
                    <div className='md:hidden pl-10'>
                        {/* for mobile view */}
                        <ul className=' text-lg'>
                            <li>
                                <img src={Urls.MYSQL} alt="" className='inline-block w-6 h-6 mr-2' />MySQL</li>
                        </ul>
                    </div>
                    <div className=' rounded-xl h-[3rem] flex justify-start md:justify-center items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 md:size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                        </svg>

                        <span className='font-bold text-2xl text-[#6806ed]'>
                            Tools
                        </span>
                    </div>
                    <div className='md:hidden pl-10'>
                        {/* for mobile view */}
                        <ul className=' text-lg'>
                            <li>
                                <img src={Urls.GIT} alt="" className='inline-block w-6 h-6 mr-2' />Git</li>
                            <li>
                                <img src={Urls.GITHUB} alt="" className='inline-block w-6 h-6 mr-2' />GitHub</li>
                            <li>
                                <img src={Urls.VSCODE} alt="" className='inline-block w-6 h-6 mr-2' />VS Code</li>
                            <li>
                                <img src={Urls.POSTMAN} alt="" className='inline-block w-6 h-6 mr-2' />Postman</li>
                        </ul>
                    </div>
                    {/* for desktop view */}
                    <div className='hidden rounded-xl md:flex justify-center items-center gap-3'>
                        {/* language part */}
                        <ul className=' text-lg'>
                            <li>
                                <img src={Urls.PYTHON} alt="" className='inline-block w-6 h-6 mr-2' />
                                Python
                            </li>
                            <li>
                                <img src={Urls.JAVASCRIPT} alt="" className='inline-block w-6 h-6 mr-2' />JavaScript</li>
                            <li>
                                <img src={Urls.JAVA} alt="" className='inline-block w-6 h-6 mr-2' />Java</li>
                            <li>
                                <img src={Urls.C} alt="" className='inline-block w-6 h-6 mr-2' />C</li>
                        </ul>
                    </div>
                    <div className='hidden md:flex justify-center items-center gap-3 rounded-xl'>
                        <ul className=' text-lg'>
                            <li>
                                <img src={Urls.DJANGO} alt="" className='inline-block w-6 h-6 mr-2' />Django</li>
                            <li>
                                <img src={Urls.REACT} alt="" className='inline-block w-6 h-6 mr-2' />React</li>
                            <li>
                                <img src={Urls.TAILWIND_CSS} alt="" className='inline-block w-6 h-4 mr-2' />Tailwind CSS</li>
                            <li>
                                <img src={Urls.BOOTSTRAP} alt="" className='inline-block w-6 h-6 mr-2' />Bootstrap</li>
                        </ul>
                    </div>
                    <div className='hidden md:flex justify-center items-start gap-3 rounded-xl'>
                        <ul className=' text-lg'>
                            <li>
                                <img src={Urls.MYSQL} alt="" className='inline-block w-6 h-6 mr-2' />MySQL</li>
                        </ul>
                    </div>
                    <div className='hidden md:flex justify-center items-center gap-3 rounded-xl'>
                        <ul className=' text-lg'>
                            <li>
                                <img src={Urls.GIT} alt="" className='inline-block w-6 h-6 mr-2' />Git</li>
                            <li>
                                <img src={Urls.GITHUB} alt="" className='inline-block w-6 h-6 mr-2' />GitHub</li>
                            <li>
                                <img src={Urls.VSCODE} alt="" className='inline-block w-6 h-6 mr-2' />VS Code</li>
                            <li>
                                <img src={Urls.POSTMAN} alt="" className='inline-block w-6 h-6 mr-2' />Postman</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Technical_skills