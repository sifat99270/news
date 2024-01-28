"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import Search from "../news/search";

function Navbar({ cat }) {
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    const [search, setSearch] = useState(false);
    const slideRef = useRef();
    function onchange(value) {
        setInput(value);
    }
    useEffect(() => {
        setData(cat);
    }, [cat]);

    function come() {
        slideRef.current.classList.replace("left-full", "left-0");
    }
    function back() {
        slideRef.current.classList.replace("left-0", "left-full");
    }
    return (
        <>
            <div className=" z-50 w-full flex h-16 bg-green-200 shadow-xl rounded-md fixed top-0 ">
                <div onClick={come} className=" p-2 mt-1 cursor-pointer">
                    <i className="bi bi-list  font-extrabold text-emerald-500 text-3xl "></i>
                </div>
                <div
                    ref={slideRef}
                    className=" left-full gap-2 items-center bg-green-200 p-4 absolute top-0 w-56 rounded-md shadow-md "
                >
                    <div className="flex mb-4  w-full ">
                        <Image
                            className="  w-20 "
                            src="/images/logo.svg"
                            width={60}
                            height={60}
                            alt="pic"
                        />
                        <div onClick={back} className="flex ml-auto">
                            <i className="bi bi-x-lg cursor-pointer text-xl"></i>
                        </div>
                    </div>
                    {data.map((item) => {
                        return (
                            <Link
                                className=" font-extrabold text-sm  text-emerald-500  w-full"
                                key={item["id"]}
                                href={`${item["name"]}?id=${item["id"]}&name=${item["name"]}`}
                            >
                                <div className=" bg-gray-500 mb-2 p-2 rounded-lg">
                                    {" "}
                                    {item["name"]}
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {search ? (
                    <Search search={search} setSearch={setSearch} />
                ) : (
                    <>
                        <div className="flex gap-3 justify-center items-center md:ml-8  ">
                            <Image
                                className=" w-3/4 h-1/2 object-cover"
                                src="/images/logo.svg"
                                width={60}
                                height={60}
                                alt="pic"
                            />
                            <Link href="/" className=" text-sm text-slate-50 ml-2">
                                HOME
                            </Link>
                        </div>
                        <div className="flex ml-auto items-center justify-center h-full mt-auto mb-auto gap-4 cursor-pointer">
                            <div className=" text-2xl md:hidden">
                                <i
                                    onClick={() => {
                                        if (search) {
                                            setSearch(false);
                                        }
                                        if (!search) {
                                            setSearch(true);
                                        }
                                    }}
                                    className="bi bi-search"
                                ></i>
                            </div>
                            <div className="h-10 hidden  rounded-md relative md:flex items-center justify-center">
                                <input
                                    value={input}
                                    onChange={(e) => {
                                        onchange(e.target.value);
                                    }}
                                    type="text"
                                    placeholder="search..."
                                    className=" w-64 h-full outline-none border border-gray-400 rounded-l hover:border-emerald-500  p-3"
                                />
                                <Link href={`/search?name=${input}`}>
                                    <button className=" w-16 h-10 bg-cyan-300 rounded-r-md">
                                        <i className="bi bi-search"></i>
                                    </button>
                                </Link>
                            </div>
                            <Link
                                href="/login"
                                className=" border text-pink-500 hover:text-white hover:bg-pink-500 border-pink-500 p-1 h-10  leading-8 rounded-md mr-6"
                            >
                                LOGIN
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default Navbar;
