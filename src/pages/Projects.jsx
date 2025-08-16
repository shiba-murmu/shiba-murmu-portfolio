import React from 'react'
import Urls from '../component/urls'

function Projects() {
  return (
   <>
        <div className='h-screen p-5'>
            <div className='flex item-center justify-center'>
                <span className='text-2xl font-bold md:text-4xl'>My work</span>
            </div>
            <div className='grid mt-5  grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10'>
                {/* <p className='text-lg md:text-2xl'>Here are some of my recent projects:</p> */}
                <div className='bg-gray-300 px-5 py-5 rounded-2xl flex flex-col items-center justify-center gap-5 hover:translate-y-[-0.5rem]  transition-all duration-300'>
                    <img src={Urls.CHICHAT_WEB_APP.image} alt="" className='rounded-2xl' />
                    <div className=' w-full'>
                        <p className='font-bold text-[#6806ed]'>{Urls.CHICHAT_WEB_APP.title}</p>
                        <p className='text-sm '>{Urls.CHICHAT_WEB_APP.description}</p>
                        <p className='text-sm'><strong className='font-bold text-[#6806ed]'>Technologies:</strong> {Urls.CHICHAT_WEB_APP.tech.join(", ")}</p>
                    </div>
                    <div className='flex justify-evenly w-full gap-3'>
                        <a href={Urls.CHICHAT_WEB_APP.github} className='border rounded-2xl bg-[#6806ed] text-white py-1 px-3'>GitHub</a>
                        <a href={Urls.CHICHAT_WEB_APP.liveDemo} className='border rounded-2xl bg-[#6806ed] text-white py-1 px-3'>Live Demo</a>
                    </div>
                </div>

                <div className='bg-gray-300 px-5 py-5 rounded-2xl flex flex-col items-center justify-center gap-5 hover:translate-y-[-0.5rem]  transition-all duration-300'>
                    <img src={Urls.CAREER_LIST_SYSTEM.image} alt="" className='rounded-2xl' />
                    <div className=' w-full'>
                        <p className='font-bold text-[#6806ed]'>{Urls.CAREER_LIST_SYSTEM.title}</p>
                        <p className='text-sm'>{Urls.CAREER_LIST_SYSTEM.description}</p>
                        <p className='text-sm'><strong className='font-bold text-[#6806ed]'>Technologies:</strong> {Urls.CAREER_LIST_SYSTEM.tech.join(", ")}</p>
                    </div>
                    <div className='flex justify-evenly w-full gap-3'>
                        <a href={Urls.CAREER_LIST_SYSTEM.github} className='border rounded-2xl bg-[#6806ed] text-white py-1 px-3'>GitHub</a>
                        <a href={Urls.CAREER_LIST_SYSTEM.liveDemo} className='border rounded-2xl bg-[#6806ed] text-white py-1 px-3'>Live Demo</a>
                    </div>
                </div>

                <div className='bg-gray-300 px-5 py-5 rounded-2xl flex flex-col items-center justify-center gap-5 hover:translate-y-[-0.5rem]  transition-all duration-300'>
                    <img src={Urls.BUYME.image} alt="" className='rounded-2xl' />
                    <div className=' w-full'>
                        <p className='font-bold text-[#6806ed]'>{Urls.BUYME.title}</p>
                        <p className='text-sm'>{Urls.BUYME.description}</p>
                        <p className='text-sm'><strong className='font-bold text-[#6806ed]'>Technologies:</strong> {Urls.BUYME.tech.join(", ")}</p>
                    </div>
                    <div className='flex justify-evenly w-full gap-3'>
                        <a href={Urls.BUYME.github} className='border rounded-2xl bg-[#6806ed] text-white py-1 px-3'>GitHub</a>
                        <a href='/' className='border rounded-2xl bg-[#6806ed] text-white py-1 px-3'>Not live</a>
                    </div>
                </div>
                
                <div className='bg-gray-300 px-5 py-5 rounded-2xl flex flex-col items-center justify-center gap-5 hover:translate-y-[-0.5rem]  transition-all duration-300'>
                    <img src={Urls.CHATCONNECT.image} alt="" className='rounded-2xl' />
                    <div className=' w-full'>
                        <p className='font-bold text-[#6806ed]'>{Urls.CHATCONNECT.title}</p>
                        <p className='text-sm'>{Urls.CHATCONNECT.description}</p>
                        <p className='text-sm'><strong className='font-bold text-[#6806ed]'>Technologies:</strong> {Urls.CHATCONNECT.tech.join(", ")}</p>
                    </div>
                    <div className='flex justify-evenly w-full gap-3'>
                        <a href={Urls.CHATCONNECT.github} className='border rounded-2xl bg-[#6806ed] text-white py-1 px-3'>GitHub</a>
                        <a href='/' className='border rounded-2xl bg-[#6806ed] text-white py-1 px-3'>Not live</a>
                    </div>
                </div>
                <div className='bg-gray-300 px-5 py-5 rounded-2xl flex flex-col items-center justify-center gap-5 hover:translate-y-[-0.5rem]  transition-all duration-300'>
                    <img src={Urls.CALCULATOR.image} alt="" className='rounded-2xl' />
                    <div className=' w-full'>
                        <p className='font-bold text-[#6806ed]'>{Urls.CALCULATOR.title}</p>
                        <p className='text-sm'>{Urls.CALCULATOR.description}</p>
                        <p className='text-sm'><strong className='font-bold text-[#6806ed]'>Technologies:</strong> {Urls.CALCULATOR.tech.join(", ")}</p>
                    </div>
                    <div className='flex justify-evenly w-full gap-3'>
                        <a href={Urls.CALCULATOR.github} className='border rounded-2xl bg-[#6806ed] text-white py-1 px-3'>GitHub</a>
                        <a href={Urls.CALCULATOR.liveDemo} className='border rounded-2xl bg-[#6806ed] text-white py-1 px-3'>Live Demo</a>
                    </div>
                </div>
                <div className='bg-gray-300 px-5 py-5 rounded-2xl flex flex-col items-center justify-center gap-5 hover:translate-y-[-0.5rem]  transition-all duration-300'>
                    <img src="/projects.gif" alt="" className='rounded-2xl' />
                </div>
                
            </div>
        </div>
   </>
  )
}

export default Projects