"use client"

const Input = ({ type, className, placeholder, value, setObj, name
}) => {
    function handleChange(name, value) {
        setObj((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }
    return (
        <div className=" w-10/12 relative  flex justify-center items-center shadow-md ">
            <input onChange={(e) => {
                handleChange(name, e.target.value)
            }} value={value} className=" w-full outline-none border border-gray-400 px-3 py-3 rounded-lg focus:border-emerald-500" type={type} placeholder={placeholder} />
            <i className={`${className} absolute right-4 text-lg`}></i>
        </div>
    )
}
export default Input;
