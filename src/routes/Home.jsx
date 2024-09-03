import React from 'react'
import Navbar from './Navbar'
import Input from './FileUpload'
function Home() {
    return (
        <div className=''>
            <Navbar />
            <div className='w-1/2 m-auto my-14'>
                <Input />
            </div>
        </div>
    )
}

export default Home
