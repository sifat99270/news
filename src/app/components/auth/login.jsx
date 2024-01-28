import ClickHandle from "@/app/utility/clickHandle";
import Input from "@/app/utility/input";
import { error, success } from "@/app/utility/toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
    const [ani, setAni] = useState(false);
    const [obj, setObj] = useState({
        email: "",
        password: "",
    });
    const router = useRouter();
    async function submit() {
        setAni(true)
        const res = await fetch('/api/users/login', {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "content-type": 'application/json'
            },
            cache: "no-store"
        },)
        const data = await res.json();
        if (data['status'] === 'success') {
            success('login successful')
            router.replace('/');
        } else {
            error('login fail')
        }
        setAni(false)
    }
    return (
        <div className=" w-full flex flex-col justify-center items-center  flex-shrink-0 md:w-10/12 lg:w-1/2 mx-auto rounded-md shadow-md bg-gray-200 p-2 gap-4">
            <p className="w-full text-lg font-bold text-center text-violet-700 p-2">
                LOGIN
            </p>
            <Input
                type="email"
                placeholder="enter email"
                className={`bi bi-envelope-fill`}
                value={obj['email']}
                setObj={setObj}
                name='email'
            />
            <Input
                type="password"
                placeholder="enter passowrd"
                className={`bi bi-lock-fill`}
                value={obj.password}
                setObj={setObj}
                name='password'
            />
            {ani ? <ClickHandle /> : <button onClick={submit} className="  bg-emerald-500 w-10/12 py-2 font-bold text-white rounded-lg shadow-md mb-3">
                SUBMIT
            </button>}

            <div className="flex gap-2">
                <Link className=" font-bold text-emerald-500" href="/sign">
                    SIGN UP
                </Link>
                ?
                <Link href="#" className=" font-bold text-teal-500">
                    FORGET PASSWORD
                </Link>
            </div>
        </div>
    );
};
export default Login;
