"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const Salider = () => {
    const [data, setData] = useState([1, 1, 1]);
    const allRef = useRef();
    const checkedRef = useRef();
    let index = 0;
    useEffect(() => {
        allRef.current.childNodes.forEach((item, i) => {
            return item.style.left = `${allRef.current.clientWidth * i}px`;
        })
        checkedRef.current.childNodes[0]['checked'] = true;
    }, [])
    function right() {
        const length = data.length;
        index++;
        if (length === index) {
            index = 0
            checkedRef.current.childNodes[index]['checked'] = true;
            allRef.current.scrollLeft = allRef.current.clientWidth * index;
        }
        checkedRef.current.childNodes[index]['checked'] = true;
        allRef.current.scrollLeft = allRef.current.clientWidth * index;
    }
    function left() {
        const length = data.length;
        index--;
        if (index === -1) {
            index = length - 1;
            checkedRef.current.childNodes[index]['checked'] = true;
            allRef.current.scrollLeft = allRef.current.clientWidth * index;
        }
        checkedRef.current.childNodes[index]['checked'] = true;
        allRef.current.scrollLeft = allRef.current.clientWidth * index;
    }
    function radio(i) {
        index = i;
        checkedRef.current.childNodes[index]['checked'] = true;
        allRef.current.scrollLeft = allRef.current.clientWidth * index;

    }
    return (
        <div className="flex w-1/2 h-80 rounded-lg relative ml-auto mr-auto">
            <div ref={allRef} className=" flex w-full rounded-lg overflow-hidden relative" >
                {data.map((item, i) => {
                    return (
                        <div key={i} className="w-full rounded-lg absolute h-full ">
                            <Image className=' rounded-lg w-full h-full object-cover ' width={50} height={50} src="https://photo.teamrabbil.com/images/2024/01/01/3.png" alt='image' />
                            <div className=" absolute left-14 bottom-10 flex justify-center items-center flex-col">
                                <p className=" font-bold text-emerald-500 text-center">sample News headline orders parsial</p>
                                <p className=" font-bold text-emerald-200 text-center text-xs w-3/4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae dolorem accusantium repellat at voluptatibus consequatur.</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <i onClick={() => {
                left();
            }} className="bi bi-arrow-left-circle absolute left-5 top-1/2   text-2xl text-purple-600 cursor-pointer"></i>
            <i onClick={() => {
                right();
            }} className="bi bi-arrow-right-circle absolute right-5 top-1/2  text-2xl text-purple-600 cursor-pointer"></i>
            <div ref={checkedRef} className="absolute flex gap-3 bottom-3 left-1/2">
                {data.map((item, i) => {
                    return (
                        <input className=" accent-rose-600 cursor-pointer" onClick={() => {
                            radio(i)
                        }} key={i} type="radio" name="round" />
                    )
                })}
            </div>
        </div>
    )
}

export default Salider;