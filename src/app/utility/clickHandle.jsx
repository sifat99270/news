import React from 'react'

export default function ClickHandle() {
    return (
        <button className="  bg-emerald-500 w-10/12 py-2 font-bold text-white rounded-lg shadow-md mb-3 flex justify-center items-center">
            <div className=' bg-white rounded-full w-10 h-10 relative animate-spin'>
                <div className='bg-emerald-500  rounded-full w-8 h-8 absolute inset-1'></div>
                <div className=' absolute w-4 h-4 bg-emerald-500 rounded-full'></div>
            </div>
        </button>
    )
}
