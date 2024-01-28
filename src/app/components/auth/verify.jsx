import Input from "@/app/utility/input";

const Verify = () => {
    return (
        <div className=' w-full flex flex-col justify-center items-center  flex-shrink-0 md:w-10/12 lg:w-1/2 mx-auto rounded-md shadow-md bg-gray-200 p-2 gap-4'>
            <p className='w-full text-lg font-bold text-center text-violet-700 p-2'>Verification Code</p>
            <Input type="number" placeholder="enter code" className={`bi bi-phone`} />
            <button className='  bg-emerald-500 w-10/12 py-2 font-bold text-white rounded-lg shadow-md' >SUBMIT</button>
        </div>
    )
}
export default Verify;