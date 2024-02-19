import Link from 'next/link'
import React from 'react'
import { FaYoutube, FaTwitter, FaGithub, FaLaptop} from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav
            className='sticky top-0 bg-slate-600 p-4 drop-shadow-xl z-10'
        >
            <div className='md:px-6 prose prose-xl mx-auto flex justify-between flex-col sm:flex-row items-center gap-4'>
                <h1 className='text-3xl font-bold my-0 '>
                    <Link
                        className='text-white/90 hover:text-white no-underline'
                        href="/"
                    >
                        Steve Jose
                    </Link>
                </h1>
                <div className="flex flex-row jsutify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-4xl">
                    <Link className='text-white/90 hover:text-white' href="/" >
                        <FaYoutube />
                    </Link>
                    <Link className='text-white/90 hover:text-white' href="/" >
                        <FaTwitter />
                    </Link>
                    <Link className='text-white/90 hover:text-white' href="/" >
                        <FaGithub/>
                    </Link>
                    <Link className='text-white/90 hover:text-white' href="/" >
                        <FaLaptop />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
