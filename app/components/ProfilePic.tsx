import React from 'react'
import Image from 'next/image'

const ProfilePic = () => {
    return (
        <section className='w-full '>
            <Image
            className='border-4 border-black dark:border-slate-500 drop-shadow-xl rounded-full mx-auto mt-8 '
                src="/images/profile_pic.jpeg"
                width={200}
                height={200}
                alt='Steve Jose'
                priority={true}
            />
        </section>
    )
}

export default ProfilePic