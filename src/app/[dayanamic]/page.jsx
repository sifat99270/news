import Latest from "../components/news/latest";


const getData = async (id) => {

    const res = await fetch(`${process.env.HOST}/api/news_list/category?catId=${id}`, {
        cache: 'no-store'
    })
    const data = await res.json();
    return data;

}
export default async function Page({ searchParams }) {

    const id = searchParams['id']
    const name = searchParams['name']
    const datas = await getData(id);
    return (

        <Latest name={name} data={datas['data']} />

    )
}
