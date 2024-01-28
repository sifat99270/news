import React from 'react'

function Footer() {
    return (
        <div className='mb-32 gap-y-4 flex justify-start items-center flex-wrap bg-black rounded-md shadow-md text-white p-6'>
            <div className='w-72 lg:w-1/4 p-2'>
                <p className=' font-bold mb-3'>ABOUT</p>
                <div className=' text-xs text-gray-400'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quas ratione esse veritatis molestiae iure.</p>
                    <div className=' font-bold text-lg mt-3 '>
                        <i className="bi bi-facebook p-2"></i>
                        <i className="bi bi-youtube p-2 "></i>
                        <i className="bi bi-twitter p-2"></i>
                        <i className="bi bi-linkedin p-2"></i>
                    </div>
                </div>
            </div>
            <div className='w-72 pt-2 lg:w-1/4' >
                <p className=' font-bold flex flex-col'>RECOMMENDED</p>
                <a href='#' className=' text-sm'>Art</a><br />
                <a href='#' className=' text-sm'>Economy</a><br />
                <a href='#' className=' text-sm'>Environment</a><br />
                <a href='#' className=' text-sm'>Health</a>
            </div>
            <div className='w-72 pb-10 lg:w-1/4'>
                <p className=' font-bold flex flex-col'>LEGAL</p>
                <a href='#' className='text-sm'>Privacy Policy</a><br />
                <a href='#' className='text-sm'>Terms & conditions</a>

            </div>
            <div className='w-72 lg:w-1/4 bg-white flex justify-center items-center flex-col rounded-md shadow-lg'>
                <i className="bi bi-envelope text-slate-950 font-extrabold text-4xl mt-1"></i>
                <p className=' text-black font-mono font-bold'>News Letter</p>
                <input className=' outline-none border text-black p-1 border-green-500 rounded-md pl-2 focus:border-rose-600 mt-2' type='email' placeholder='enter email' />
                <button className=' bg-cyan-500 py-1 w-40 mt-6 mb-10 rounded-lg font-bold' >SUBMIT</button>
            </div>
        </div>
    )
}

export default Footer