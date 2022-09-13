import React from 'react'
import profilepic from '../assets/portfoliopic.jpg'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-primary text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className=' pb-8 '>
                        <p className='text-4xl font-bold inline border-b-4 border-blue-300'>
                            About
                        </p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4'>
                    <div className='sm:text-center text-4xl font-bold '>
                        <p>
                            Hi, I'm Leonard. I am a Full-Stack Software Engineer. Take a look at my work and send me a message!
                        </p>
                    </div>
                    <div>
                        <p>I am a Full Stack Developer focusing on React to develop web apps that can provide value to the world. I have been learning and creating for the past 3 years first as a hobby then as a sidejob and now as part of 100Devs. I love creating new things and learning new technologies to use in creating these new things.  I am also currently learning Elm to widen my options in the development of new web apps and sites.

                        </p>
                    </div>
                    <div >
                        <img className="hidden sm:block rounded-lg h-[300px] mx-auto" src={profilepic} alt="" />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default About