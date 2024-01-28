import React from 'react'

const Email = () => {
    return (
        <div className='w-1/2  bg-gray-200 rounded-md shadow-md relative flex flex-col items-center my-4 p-2'>
            <div className=' w-10/12 font-bold text-2xl bg-black p-2 rounded-md shadow-md text-white text-center my-4'>SUBSCRIBE</div>
            <div className='w-10/12 mx-auto flex justify-center items-center flex-col rounded-md shadow-md shadow-gray-400 bg-slate-200 mb-2'>
                <i className="bi bi-envelope text-slate-950 font-extrabold text-5xl mt-2"></i>
                <p className=' text-black font-mono font-bold'>News Letter</p>
                <input className=' w-9/12 outline-none border text-black p-2 border-green-500 rounded-md pl-2 focus:border-rose-600 mt-2' type='email' placeholder='enter email' />
                <button className=' bg-cyan-500 py-1 w-40 mt-6 mb-10 rounded-lg font-bold' >SUBMIT</button>
            </div>
        </div>
    )
}

export default Email;