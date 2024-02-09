import React from 'react'

const Divider = () => {
    return (
        <div className="relative w-full h-2">
            <div className="absolute inset-0 m-auto h-[2px] bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        </div>
    )
}

export default Divider