"use client"
import { NewsArticles } from '@/components'
import { Divider } from '@/components/UI'
import { Input } from '@twilio-paste/core'
import Image from 'next/image'
import React, { useState } from 'react'

const Page = () => {

    const [searchTerm, setSearchTerm] = useState("")


    return (
        <div className='w-full h-full flex flex-col gap-8 items-center '>
            <div className='w-full h-fit flex items-center justify-between gap-4'>
                <h1 className='text-5xl font-bold'>News</h1>
                <div className='w-fit '>
                    <Input onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder='Search CryptoCurrencies' insertBefore={<Image src={"/assets/designs/magnifire.svg"} alt='magnifire' width={48} height={48} />} type='search' />
                </div>
            </div>
            <Divider />
            <NewsArticles searchTerm={searchTerm} />
        </div>
    )
}

export default Page