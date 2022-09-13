import React from 'react'
import TailwindSite from '../assets/TailwindTemplate.png'
import BootStrapSite from '../assets/BootstrapTemplate.png'

const Work = () => {
    return (
        <div name='work' className='bg-primary text-gray-300 w-full md:h-screen'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-300'>Work</p>
                    <p className='pt-4'>Check out some of my recently done work.</p>
                </div>
                {/* Grid Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Card Container */}
                    <div style={{ backgroundImage: `url(${TailwindSite})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* Hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 duration-300'>
                            <span className='text-center rounded-lg px-4 py-3 m-2 bg-blue-100 text-[#333333] font-bold text-lg'>
                                Business Landing Page

                            </span>
                            <div className='pt-8 text-center flex flex-row justify-evenly'>
                                <a href="/" className='text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg'>
                                    <button>Demo</button>
                                </a>
                                <a href="/" className='text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg'>
                                    <button>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${BootStrapSite})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* Hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 duration-300'>
                            <span className='text-center rounded-lg px-4 py-3 m-2 bg-blue-100 text-[#333333] font-bold text-lg'>
                                Bootcamp Template Site

                            </span>
                            <div className='pt-8 text-center flex flex-row justify-evenly'>
                                <a href="/" className='text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg'>
                                    <button>Demo</button>
                                </a>
                                <a href="/" className='text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white font-bold text-lg'>
                                    <button>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work