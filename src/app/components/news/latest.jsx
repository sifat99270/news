
import Image from 'next/image';
import Link from 'next/link';

async function Latest({ name, data }) {

    return (
        <div className=' w-full h-screen overflow-scroll'>
            <div className=' w-full font-extrabold text-emerald-500 p-4 text-lg text-center  mb-3 rounded-md shadow-md'>{name}</div>
            <div className='flex w-full justify-center items-center flex-wrap gap-5 '>
                {!data || !data.length ? <p className=' font-extrabold text-rose-950'>no data here</p> :
                    data.map((item) => {
                        return (
                            <div key={item['id']} className=' w-72 rounded-md shadow-md relative shadow-zinc-400'>
                                <Image className='rounded-md  object-cover w-full h-44 ' width={50} height={50} src={item['img1']} alt='image' />
                                <div>
                                    <p className=' font-bold p-2'>{item['title']}</p>
                                    <p className=' font-light text-slate-400 pb-2 pl-2 text-xs' >{item['short_des']}
                                    </p>
                                    <p className='font-bold text-emerald-500 ml-1 mb-2'><i className="bi bi-alarm"></i> 3 Days Ago</p>
                                    <p className=' relative ml-2 w-32 h-10 p-2 rounded-md border mb-3 border-emerald-500 font-bold text-emerald-500 hover:bg-emerald-500 hover:text-white'><Link href={`/details?id=${item['id']}`} className='absolute left-0 top-0 h-full w-full leading-10 text-center '>Read more</Link></p>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </div>

    )
}

export default Latest;