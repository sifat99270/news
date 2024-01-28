import Popular from "../components/news/popular";

async function getData() {
    const res = await fetch(`${process.env.HOST}/api/news_list/type?type=Popular`)
    const data = await res.json();
    return data;
}


export default async function page() {
    const datas = await getData();
    return (
        <div>
            <Popular datas={datas['data']} />
        </div>
    )
}
