import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-primary'>
            {/* Container */}
            <div className='lg:ml-10 max-w-[1080px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-blue-300'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Leonard Canastra</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Software Developer</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I specialize in building exceptional digital experiences. Currently, I am focused on building responsive full-stack web applications.</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center rounded-md hover:bg-blue-300 hover:border-blue-300 hover:text-[#333333]'>View Work
                        <span className='group-hover:rotate-90 duration-100'>
                            <HiArrowNarrowRight className='ml-4' />
                        </span> </button>
                </div>
            </div>
        </div>
    )
}

export default Home