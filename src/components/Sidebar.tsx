import React from 'react'
import { Avatar, Button, Box, Anchor } from "@twilio-paste/core"
import Link from 'next/link'
import Image from 'next/image'

const SideBar = () => {
    return (
        <aside className='lg:w-full h-screen lg:h-[95vh] lg:sticky lg:top-[2%] lg:rounded-2xl bg-black flex flex-col items-center justify-between gap-8 py-8 px-6 '>
            <div className='flex w-full h-fit flex-col gap-8'>
                <div className='w-full h-fit flex flex-col lg:flex-row items-center justify-center gap-4'>
                    <Avatar name='Crypto Verse' size={'sizeIcon110'} variant='user' src='/assets/logos/crypto-verse.svg' />
                    <Link href="/" className='font-bold text-3xl text-center text-blue-200'>Crypto Verse</Link>
                </div>
                <Box rowGap={'space40'} className='w-full h-fit flex flex-col'>
                    <Button variant='secondary' as='a' href='/'>Home</Button>
                    <Button variant='secondary' as='a' href='/cryptocurrencies/'>Cryptocurrencies</Button>
                    <Button variant='secondary' as='a' href='/news'>News</Button>
                </Box>
            </div>
            <Image src={"/assets/logos/cryptocurrency.png"} width={500} height={500} alt='Crypto Currency logo' className='opacity-[.08] max-h-[300px] max-w-[300px]' />
            <div className='flex flex-wrap items-center justify-center gap-4 w-full h-fit'>
                <Anchor variant='inverse' href='/' >privacy</Anchor>
                <Anchor variant='inverse' href='/'>copy-rights</Anchor>
            </div>
        </aside>
    )
}

export default SideBar