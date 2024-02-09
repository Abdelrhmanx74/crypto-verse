import { Anchor, Stack } from '@twilio-paste/core'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-full rounded-2xl mt-10 bg-black text-blue-200 text-3xl font-semibold py-14 flex flex-col gap-4 items-center justify-center text-center'>
            <h1>Crypto Verse<br />All Rights Reserved</h1>
            <Stack orientation={'horizontal'} spacing='space50'>
                <Anchor variant='inverse' href='/'>
                    Home
                </Anchor>
                <Anchor variant='inverse' href='news'>
                    News
                </Anchor>
            </Stack>
        </div>
    )
}

export default Footer