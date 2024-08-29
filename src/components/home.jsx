import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const home = () => {
    const [input, setinput] = useState("");
   const naviagte =  useNavigate()

    const handlejoinroom = ()=>{
        setinput("");
        naviagte(`/room/${input}`)

    }

  return (
    <div className='flex justify-center items-center flex-col pt-6 '>
        <h1>Home page</h1>
       <div className="options mt-6 flex gap-4  ">
       <input value={input} onChange={(e)=> setinput(e.target.value)} className='px-5 w-56  py-1 rounded-2xl border-2 border-cyan-400 text-black ' type="text" placeholder='Enter room code' required />
       <button onClick={handlejoinroom} className='px-3 py-1 rounded-3xl text-white border-none bg-cyan-600 hover:bg-cyan-400 hover:text-black '>start call</button>
       </div>
    </div>
  )
}

export default home