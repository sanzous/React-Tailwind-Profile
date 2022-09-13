import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-primary flex justify-center items-center p-4'>
            <form action="https://getform.io/f/2e83643e-caa7-4b3d-8cde-6f2cef00708a" method="POST" className='flex flex-col max-w-[600px] w-full '>
                <div className='pb-8 b'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-300 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>Submit the form below to send me a message!</p>
                </div>
                <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='my-4 p-2 bg-[#ccd6f6]' name="message" id="" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-blue-300 hover:border-blue-300 px-4 py-3 my-8 mx-auto flex items-center justify-center duration-200 rounded-lg'>Let's Connect!</button>
            </form>
        </div>
    )
}

export default Contact