import React from 'react'
import Navbar from './Navbar'
import Input from './FileUpload'
import Generate from './Buttons/Generate'
function Home() {
    return (
        <div className=''>
            <Navbar />
            <div className='w-1/2 m-auto my-14'>
                <Input />
            </div>
            <Generate />
        </div>
    )
}

export default Home
