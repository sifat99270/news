"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function Search({ setSearch, search }) {
    const [input, setInput] = useState('')
    function onchange(value) {
        setInput(value);
    }
    return (
        <div className='w-11/12 h-10 md:hidden rounded-md  items-center justify-center flex mt-4   '>
            <div onClick={() => {
                if (search) {
                    setSearch(false)
                }
                if (!search) {
                    setSearch(true)
                }
            }} className='  mr-2'><i className="bi bi-arrow-left-short text-5xl"></i></div>
            <input value={input} onChange={(e) => {
                onchange(e.target.value);
            }} type='text' placeholder='search...' className=' w-7/12 h-full outline-none border border-gray-400 rounded-l hover:border-emerald-500  p-3' />
            <Link href={`/search?name=${input}`}>
                <button className=' w-16 h-10 bg-cyan-300 rounded-r-md'><i className="bi bi-search"></i></button>
            </Link>
        </div>
    )
}
