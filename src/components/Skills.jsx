import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-primary text-blue-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-300  '>Skills</p>
                    <p className='py-4'>Technologies I currently am proficient with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={HTML} className='w-20 mx-auto' alt="HTML Icon" />
                        <span>HTML</span>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={CSS} className='w-20 mx-auto' alt="HTML Icon" />
                        <span>CSS</span>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={JavaScript} className='w-20 mx-auto' alt="HTML Icon" />
                        <span>Javascript</span>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={ReactImg} className='w-20 mx-auto' alt="HTML Icon" />
                        <span>React.js</span>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Node} className='w-20 mx-auto' alt="HTML Icon" />
                        <span>Node.js</span>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Mongo} className='w-20 mx-auto' alt="HTML Icon" />
                        <span>MongoDB</span>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Tailwind} className='w-20 mx-auto' alt="HTML Icon" />
                        <span>TailwindCSS</span>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={GitHub} className='w-20 mx-auto' alt="HTML Icon" />
                        <span>Git/Github</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills