import { Spinner } from '@twilio-paste/core'
import React from 'react'

const Loading = () => {
    return (
        <div className='w-6 h-6'>
            <Spinner decorative={false} title='loading' />
        </div>
    )
}

export default Loading