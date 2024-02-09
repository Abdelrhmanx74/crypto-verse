import Link from 'next/link'
import React from 'react'

interface TitleLinkProps {
    title: string;
    href: string;
    linkLabel: string;
}

const TitleLink = ({ title, href, linkLabel }: TitleLinkProps) => {
    return (
        <div className='w-full h-full flex items-center justify-between gap-4'>
            <h1 className='text-3xl text-black font-bold'>
                {title}
            </h1>
            <Link className='text-blue-300 no-underline text-xl font-bold' href={href}>{linkLabel}</Link>
        </div>
    )
}

export default TitleLink