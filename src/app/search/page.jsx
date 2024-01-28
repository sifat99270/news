import Latest from "../components/news/latest";

async function getData(name) {
    const res = await fetch(`${process.env.HOST}/api/news_list/search?name=${name}`, {
        cache: "no-store",
    });
    const data = await res.json();
    return data;
}

export default async function Page({ searchParams }) {
    const name = searchParams['name'];
    const datas = await getData(name);
    return (
        <Latest data={datas['data']} name='search result' />
    )
}
