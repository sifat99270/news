"use client"
import Image from "next/image";
import { useState } from "react";
import { error, success } from "./toast";
import ClickHandle from "./clickHandle";

export default function Comment({ id }) {
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    function onchange(value) {
        setInput(value);
    }
    async function submit() {
        setLoading(true)
        const res = await fetch('/api/comments/manage', {
            method: "POST",
            body: JSON.stringify({
                descriptions: input,
                postID: id,
            }),
            headers: {
                "content-type": "application/json"
            },
            cache: "no-store"
        })
        const data = await res.json();
        if (data['status'] === 'success') {
            setInput('')
            success('comment successfully create')

        } else {
            error("there was a problem")
        }
        setLoading(false);
    }
    return (
        <div className="w-full md:w-3/4 mb-2">
            <div className="flex flex-shrink-0 w-full md:full gap-3 p-2">
                <Image
                    src="/images/profile.png"
                    className=" w-12 h-12 object-cover rounded-full"
                    width={50}
                    height={50}
                    alt="svg"
                />
                <input value={input} onChange={(e) => {
                    onchange(e.target.value)
                }} className=" border-2 outline-none border-green-600 rounded-lg w-11/12 pl-4 font-semibold" type="text" placeholder="add a comment" />

            </div>
            {loading ? <ClickHandle /> : <button onClick={submit} className=" flex ml-auto mr-5 text-white font-extrabold bg-rose-600 px-2 py-1 rounded-md shadow-md">SUBMIT</button>}
        </div>
    );
}
