import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary text-gray-300'>
            <div>
                <img src={logo} alt="Logo" style={{ width: '80px' }} />
            </div>


            {/* Menu */}
            <div className='hidden md:flex'>
                <ul className='flex'>
                    <li>
                        <Link activeClass="active" to="home" smooth={true} duration={500} >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="about" smooth={true} duration={500} >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="skills" smooth={true} duration={500} >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="work" smooth={true} duration={500} >
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="contact" smooth={true} duration={500} >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>



            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>


            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} activeClass="active" to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} activeClass="active" to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} activeClass="active" to="skills" smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} activeClass="active" to="work" smooth={true} duration={500} >
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} activeClass="active" to="contact" smooth={true} duration={500} >
                    Contact
                </Link>
                </li>
            </ul>




            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a href="/" className='flex justify-between items-center w-full text-gray-300' >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a href="/" className='flex justify-between items-center w-full text-gray-300' >
                            Github<FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a href="/" className='flex justify-between items-center w-full text-gray-100' >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a href="/" className='flex justify-between items-center w-full text-gray-300' >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar