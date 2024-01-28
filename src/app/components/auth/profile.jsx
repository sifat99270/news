"use client"
import { error, success } from '@/app/utility/toast'
import Image from 'next/image'
import { useRef } from 'react'


export default function Profile() {
    const ref = useRef()

    function toggle() {
        if (ref.current.classList.contains('left-full')) {
            ref.current.classList.replace('left-full', 'right-1')
        } else {
            ref.current.classList.replace('right-1', 'left-full')
        }
    }
    async function logout() {
        const res = await fetch('/api/users/logout', {
            method: "POST"
        })
        const data = await res.json();
        if (data['status'] === 'success') {
            success("logout succcessful")
            window.location.href = "/";
        } else {
            error("logout fail")
        }
    }
    return (
        <div className=' relative transition flex ml-auto'>
            <Image onClick={toggle} src='/images/profile.png' width={50} height={50} alt='profile' />
            <div ref={ref} className=' w-32 bg-black text-white p-2 rounded-md shadow-md absolute left-full top-12'>
                <div onClick={logout} className=' transition  cursor-pointer bg-gray-400 text-emerald-500 text-center rounded-md shadow-md '><p className=' font-extrabold'>LOGOUT</p></div>
                <hr className=' w-full bg-red-600 h mt-1 mb-2'></hr>
                <div className=' cursor-pointer bg-gray-400 text-emerald-500 text-center rounded-md shadow-md '><p className=' font-extrabold'>PROFILE</p></div>
                <hr className=' w-full bg-red-600 h mt-1 mb-2'></hr>
            </div>
        </div>
    )
}
