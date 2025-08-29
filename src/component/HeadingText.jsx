import React from 'react'

function HeadingText({Children}) {
  return (
    <>
    <span className='text-3xl text-black md:text-4xl font-bold '>{Children}</span>
    </>
  )
}

export default HeadingText