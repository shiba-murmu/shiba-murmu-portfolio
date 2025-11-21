import React from 'react'

function Admin() {
  return (
    <>
        <div className='flex justify-center flex-col items-center gap-4 h-screen'>
            <h1 className='text-3xl font-bold'>Admin Login</h1>
            <button className='bg-blue-500 hover:cursor-pointer text-white px-4 py-2 rounded'>Login with google</button>
        </div>
    </>
  )
}

export default Admin