import Image from "next/image";
import Comment from "../utility/comment";

async function getData(id) {
    const res = await fetch(`${process.env.HOST}/api/news_list/details?id=${id}`, {
        cache: "no-store",
    });
    const com = await fetch(`${process.env.HOST}/api/comments/news?postID=${id}`, {
        cache: "no-store",
    });
    const comment = await com.json();
    const data = await res.json();
    return {
        details: data,
        comments: comment
    }
}

export default async function Page({ searchParams }) {
    const id = searchParams['id'];
    const datas = await getData(id);
    return (
        <div className="w-full p-4 h-screen overflow-scroll">
            <div className="flex flex-col justify-center ">
                <p className=" text-red-950 font-extrabold shadow-md p-3 rounded-md">
                    {datas['details']["data"]["title"]}
                </p>
                <Image
                    className="w-full md:w-11/12 lg:w-11/12 rounded-lg shadow-lg mt-2 object-cover"
                    src={datas['details']["data"]["img1"]}
                    width={50}
                    height={50}
                    alt="img"
                />
            </div>
            <div>
                <p className=" font-extrabold p-3">
                    <span className=" text-green-500 p-2">{datas['comments']['count']}</span>comments
                </p>
                <Comment id={datas['details']["data"]["id"]} />
                {datas['comments']['data'].map((item) => {

                    return (
                        <div key={item['id']} className="flex mb-3">
                            <Image
                                src="/images/profile.png"
                                className=" w-12 h-12 object-cover rounded-full"
                                width={50}
                                height={50}
                                alt="svg"
                            />
                            <div className=" w-full text-xs md:w-10/12 lg:w-10/12 ">
                                <div className=" font-bold text-teal-600 pl-2 mt-2">
                                    {item['users']['firstName']}
                                </div>
                                <div className=" font-bold text-black pl-2 mt-1">
                                    {item['descriptions']}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
