import React from 'react'
import Header from '../component/Header'
import Profile_name from '../pages/Profile_name'
import Aboutme from '../pages/Aboutme'
import Technical_skills from '../pages/Technical_skills'
import Projects from '../pages/Projects'

function Container() {
    return (
        <>
            <div className='h-screen'>
                < Header />
                {/* body */}
                < Profile_name />
                < Aboutme />
                < Technical_skills />
                < Projects />
            </div>
        </>
    )
}

export default Container