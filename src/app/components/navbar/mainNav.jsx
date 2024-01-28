import Navbar from "./navbar";

async function getData() {
    const res = await fetch(`${process.env.HOST}/api/categories/get`)
    const data = await res.json();
    return data;
}
export default async function MainNav() {
    const data = await getData()
    return (
        <div>
            <Navbar cat={data['data']} />
        </div>
    )
}
