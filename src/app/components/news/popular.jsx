import Image from 'next/image'
import Link from 'next/link';
async function getData() {
    const res = await fetch(`${process.env.HOST}/api/news_list/type?type=Popular`)
    const data = await res.json();
    return data;
}


async function Popular() {
    const datas = await getData();
    return (
        <div className=' w-full  p-2 md:w-80 shadow-md rounded-md shadow-gray-600 ml-auto '>
            <div className='  w-full text-center md:text-white md:bg-slate-950 text-black p-3 font-extrabold text-lg rounded-md mb-2 ' >POPULAR</div>
            <div className='w-full flex justify-center items-center flex-col gap-2' >
                {!datas || datas.length === 0 || !datas instanceof Array ? <p className=' font-extrabold text-rose-950'>no data here</p> : datas['data'].map((item) => {
                    return (
                        <Link key={item['id']} href={`/details?id=${item['id']}`} >
                            <div className='flex flex-col justify-center items-center md:flex-row cursor-pointer w-full md:h-28 rounded-md shadow-md shadow-gray-400 gap-1 p-4 md:p-0'><Image className='w-11/12 h-52 rounded-md md:w-32 md:h-28 object-cover' src={item['img1']} width={50} height={50} alt='popular' />
                                <p className=' font-extrabold text-xl md:text-xs flex justify-center items-center md:font-bold'>{item['title']}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>

    )
}

export default Popular