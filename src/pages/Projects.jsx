import React from 'react'
import Urls from '../component/urls'
import Project_card from '../component/Project_card'
import Animate_box from '../component/animate/Animate_box'
function Projects() {
    return (
        <>
            <div className='p-5'>
                <div className='flex my-10 item-center justify-Start'>
                    <span className='text-2xl md:text-4xl text-white font-bold border-l-1 px-4 py-2 rounded-r-md bg-[#6806ed]'>My work</span>
                </div>
                <div className='grid mt-5  grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10'>
                    < Project_card
                        path={Urls.CHICHAT_WEB_APP.image}
                        title={Urls.CHICHAT_WEB_APP.title}
                        description={Urls.CHICHAT_WEB_APP.description}
                        tech={Urls.CHICHAT_WEB_APP.tech}
                        github={Urls.CHICHAT_WEB_APP.github}
                        liveDemo={Urls.CHICHAT_WEB_APP.liveDemo}
                        livebuttonValue="Live Demo"
                    />
                    {/* <p className='text-lg md:text-2xl'>Here are some of my recent projects:</p> */}
                    < Project_card
                        path={Urls.CAREER_LIFT_SYSTEM.image}
                        title={Urls.CAREER_LIFT_SYSTEM.title}
                        description={Urls.CAREER_LIFT_SYSTEM.description}
                        tech={Urls.CAREER_LIFT_SYSTEM.tech}
                        github={Urls.CAREER_LIFT_SYSTEM.github}
                        liveDemo={Urls.CAREER_LIFT_SYSTEM.liveDemo}
                        livebuttonValue="Live Demo"
                    />

                    < Project_card
                        path={Urls.BUYME.image}
                        title={Urls.BUYME.title}
                        description={Urls.BUYME.description}
                        tech={Urls.BUYME.tech}
                        github={Urls.BUYME.github}
                        liveDemo={Urls.BUYME.liveDemo}
                        livebuttonValue="Not live"
                    />

                    <Project_card
                        path={Urls.CHATCONNECT.image}
                        title={Urls.CHATCONNECT.title}
                        description={Urls.CHATCONNECT.description}
                        tech={Urls.CHATCONNECT.tech}
                        github={Urls.CHATCONNECT.github}
                        liveDemo={Urls.CHATCONNECT.liveDemo}
                        livebuttonValue="Not live"
                    />

                    <Project_card
                        path={Urls.CALCULATOR.image}
                        title={Urls.CALCULATOR.title}
                        description={Urls.CALCULATOR.description}
                        tech={Urls.CALCULATOR.tech}
                        github={Urls.CALCULATOR.github}
                        liveDemo={Urls.CALCULATOR.liveDemo}
                        livebuttonValue="Live Demo"
                    />

                   
                    <div className=' px-5 py-5 rounded-2xl flex flex-col items-center justify-center gap-5 hover:translate-y-[-0.5rem]  transition-all duration-300'>
                        <img src="/projects.gif" alt="" className='rounded-2xl ' />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Projects