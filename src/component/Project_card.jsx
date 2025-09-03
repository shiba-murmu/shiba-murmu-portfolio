import React from 'react'
import PopUp_open from './animate/PopUp_open'
import useInView from '../hooks/useInView'
function Project_card({ path, title, description, tech, github, liveDemo, livebuttonValue }) {
    const [ref, isInView] = useInView({ threshold: 0.2 })
    return (
        <>
            <div ref={ref}>
                {
                    isInView ? (
                        <PopUp_open>
                            <div className=' px-5 py-5 flex flex-col items-center justify-center gap-5 hover:translate-y-[-0.5rem]  transition-all duration-300'>
                                <img src={path} alt="" className=' h-40 md:h-[17rem]' />
                                <div className=' w-full'>
                                    <span className='font-bold text-xl md:text-2xl text-[var(--text-level-three-color)]'>{title}</span>
                                    <p className='text-sm '>{description}</p>
                                    <p className='text-sm'><strong className='font-bold text-[var(--text-level-three-color)]'>Technologies:</strong> {tech.join(", ")}</p>
                                </div>
                                <div className='flex justify-evenly w-full gap-3'>
                                    <a href={github} className=' bg-[var(--bg-color)] text-white py-2 px-6'>GitHub</a>
                                    <a href={liveDemo} className='bg-[var(--bg-color)] text-white py-2 px-6'>{livebuttonValue}</a>
                                </div>
                            </div>
                        </PopUp_open>
                    ) : ("")
                }
            </div>
        </>
    )
}

export default Project_card