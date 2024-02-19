
import getFormattedDate from '@/lib/getFormattedDate'
import Link from 'next/link'
import React from 'react'

type Props = {
    post: Meta
}

export default function ListItem({ post }: Props) {
    const { id, title, date, tags } = post

    const formatedDate = getFormattedDate(date)

    return (
        <li className='mt-4 text-2xl dark:text-white'>
            <Link className="underline hover:text-black/70 dark:hover:text-white/70" href={`/posts/${id}`}>
                {title}
            </Link>
            <br />
            <p className='text-sm m-1'>{formatedDate}</p>
        </li>
    )
}