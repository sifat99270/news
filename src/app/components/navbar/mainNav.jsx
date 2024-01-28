
import { cookies } from "next/headers";
import Navbar from "./navbar";


async function getData() {
    const res = await fetch(`${process.env.HOST}/api/categories/get`)
    const data = await res.json();
    return data;
}
export default async function MainNav() {
    const data = await getData()
    const token = cookies().get('token')
    return (
        <div>
            <Navbar cat={data['data']} login={token} />
        </div>
    )
}
