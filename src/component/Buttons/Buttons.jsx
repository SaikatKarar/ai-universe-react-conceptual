import React from 'react'

function Buttons({ children }) {
    return (
        <div className='text-center'>
            <button className='btn bg-orange-500'>{children}</button>
        </div>
    )
}

export default Buttons