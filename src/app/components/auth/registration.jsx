"use client";
import ClickHandle from "@/app/utility/clickHandle";
import Input from "@/app/utility/input";
import { error, success } from "@/app/utility/toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Registration = () => {
    const [obj, setObj] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cPassword: "",
        mobile: "",
    });
    const [load, setLoad] = useState(false)
    const router = useRouter();
    async function submit(e) {
        e.preventDefault();
        setLoad(true)
        const res = await fetch('/api/users/registration', {
            method: "POST",
            body: JSON.stringify({
                firstName: obj['firstName'],
                lastName: obj['lastName'],
                email: obj['email'],
                password: obj['password'],
                mobile: obj['mobile'],
            }),
            headers: {
                "content-type": "application/json"
            },
            cache: "no-store"
        })

        const data = await res.json()
        if (data['status'] === 'success') {
            success("registration success")
            router.replace('/login');
        } else {
            error("there was an error")
        }
        setLoad(false)
    }

    return (
        <div className=" w-full flex flex-col justify-center  flex-shrink-0 md:w-10/12 lg:w-1/2 mx-auto rounded-md shadow-md bg-gray-200 p-2">
            <p className="w-full text-lg font-bold text-center text-violet-700 p-2">
                SIGN IN
            </p>
            <form onSubmit={submit} className="flex justify-center items-center flex-col gap-4 mb-3">
                <Input
                    value={obj["firstName"]}
                    setObj={setObj}
                    name="firstName"
                    type="text"
                    placeholder="first name"
                    className={`bi bi-person-fill`}
                />
                <Input
                    value={obj["lastName"]}
                    setObj={setObj}
                    name="lastName"
                    type="text"
                    placeholder="last name"
                    className={`bi bi-person-fill`}
                />
                <Input
                    name="mobile"
                    value={obj["mobile"]}
                    setObj={setObj}
                    type="number"
                    placeholder="mobile number"
                    className={`bi bi-phone`}
                />
                <Input
                    name="email"
                    value={obj["email"]}
                    setObj={setObj}
                    type="email"
                    placeholder="enter email"
                    className={`bi bi-envelope-fill`}
                />
                <Input
                    name="password"
                    value={obj["password"]}
                    setObj={setObj}
                    type="password"
                    placeholder="enter passowrd"
                    className={`bi bi-lock-fill`}
                />
                <Input
                    name="cPassword"
                    value={obj["cPassword"]}
                    setObj={setObj}
                    type="password"
                    placeholder="confrim passowrd"
                    className={`bi bi-lock-fill`}
                />
                {load ? <ClickHandle /> : <button className="  bg-emerald-500 w-10/12 py-2 font-bold text-white rounded-lg shadow-md">
                    SUBMIT
                </button>}
                <div className="flex gap-2">
                    <Link className=" font-bold text-emerald-500" href="/login">
                        LOGIN
                    </Link>
                    ?
                    <Link href="/login" className=" font-bold text-teal-500">
                        FORGET PASSWORD
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Registration;
