import React from 'react'

function Project_card({path, title, description, tech, github, liveDemo , livebuttonValue}) {
    return (
        <>
            <div className='bg-[#e1e1e1] px-5 py-5 rounded-2xl flex flex-col items-center justify-center gap-5 hover:translate-y-[-0.5rem]  transition-all duration-300'>
                <img src={path} alt="" className='rounded-2xl md:h-[17rem]' />
                <div className=' w-full'>
                    <p className='font-bold text-[#6806ed]'>{title}</p>
                    <p className='text-sm '>{description}</p>
                    <p className='text-sm'><strong className='font-bold text-[#6806ed]'>Technologies:</strong> {tech.join(", ")}</p>
                </div>
                <div className='flex justify-evenly w-full gap-3'>
                    <a href={github} className=' rounded-2xl bg-[#6806ed] text-white py-1 px-5'>GitHub</a>
                    <a href={liveDemo} className=' rounded-2xl bg-[#6806ed] text-white py-1 px-5'>{livebuttonValue}</a>
                </div>
            </div>
        </>
    )
}

export default Project_card