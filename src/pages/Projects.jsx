import React from 'react'
import Urls from '../component/urls'
import Project_card from '../component/Project_card'

function Projects() {
    return (
        <>
            <div className='h-screen p-5'>
                <div className='flex item-center justify-center'>
                    <span className='text-2xl font-bold md:text-4xl'>My work</span>
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
                        path={Urls.CAREER_LIST_SYSTEM.image}
                        title={Urls.CAREER_LIST_SYSTEM.title}
                        description={Urls.CAREER_LIST_SYSTEM.description}
                        tech={Urls.CAREER_LIST_SYSTEM.tech}
                        github={Urls.CAREER_LIST_SYSTEM.github}
                        liveDemo={Urls.CAREER_LIST_SYSTEM.liveDemo}
                        livebuttonValue="Live Demo"
                    />

                    < Project_card
                        path={Urls.BUYME.image}
                        title={Urls.BUYME.title}
                        description={Urls.BUYME.description}
                        tech={Urls.BUYME.tech}
                        github={Urls.BUYME.github}
                        liveDemo={Urls.BUYME.liveDemo}
                        livebuttonValue="Live Demo"
                    />

                    <Project_card
                        path={Urls.CHATCONNECT.image}
                        title={Urls.CHATCONNECT.title}
                        description={Urls.CHATCONNECT.description}
                        tech={Urls.CHATCONNECT.tech}
                        github={Urls.CHATCONNECT.github}
                        liveDemo={Urls.CHATCONNECT.liveDemo}
                        livebuttonValue="Live Demo"
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
                        <img src="/projects.gif" alt="" className='rounded-2xl' />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Projects