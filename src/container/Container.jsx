import React from 'react'
import Header from '../component/Header'
import Profile_name from '../pages/Profile_name'
import Aboutme from '../pages/Aboutme'
import Technical_skills from '../pages/Technical_skills'
import Projects from '../pages/Projects'
import Stay_in_touch from '../pages/Stay_in_touch'

import Education from '../pages/Education'

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
                <Education />
                < Stay_in_touch />
            </div>
        </>
    )
}

export default Container