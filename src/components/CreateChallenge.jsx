import { set } from 'firebase/database'
import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../config/firebase'

function CreateChallenge({isOpen,setIsOpen}) {
  const[name,setName] = useState('')

  const handleSubmit = async () => {
    const docRef = await addDoc(collection(db, "Challenge"), {
      name: name,    
    });

    setIsOpen(!isOpen)
  }
  return (
    <div className='flex flex-col items-center bg-blue-50 h-[100vh] overflow-auto pb-6 z-[99999]'>
      <div className='bg-[#FFC046] w-full'>
      <p onClick={()=> setIsOpen(!isOpen)} className='flex justify-end mr-4 pt-1 cursor-pointer hover:underline'>Close</p>
    <div className=' w-full flex justify-center p-[10px]'>
      <p className='font-secondary font-bold text-[40px] text-white'>Challenge</p>
      </div>
    </div>
      <div className='pt-[20px]'>
        <p className='font-semibold font-secondary text-[40px]'>Create Challenge</p>
        <div className='pt-[20px]'>
            <p className='font-semibold font-secondary text-[25px] pb-[10px]'>NAME</p>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='bg-transparent w-[350px] outline-none border-b-2 border-black' placeholder='Enter Challenge Name' />
        </div>
        <div className='pt-[30px] flex flex-col'>
            <p className='font-semibold font-secondary text-[25px] pb-[10px]'>STAKE</p>
            <input type="number" className='bg-transparent w-[350px] outline-none border-b-2 border-black' placeholder='Enter Staking Amount (in USDT)' />
        </div>
        <div className='pt-[30px] flex flex-col'>
            <p className='font-semibold font-secondary text-[25px] pb-[10px]'>HABIT</p>
            <input type="text" className='bg-transparent w-[350px] outline-none border-b-2 border-black' placeholder='Enter Habit' />
            <button className='bg-[#3843FF] text-white w-[150px] rounded-3xl p-[10px] mt-[10px]'>Add Habit +</button>
        </div>
      </div>
      <Link onClick={()=> handleSubmit()} className='p-[25px] cursor-pointer'>
         <button className='bg-[#3843FF] text-white w-[350px] rounded-3xl p-[10px] hover:font-extrabold'>Create Challenge</button>
      </Link>
  </div>
  )
}

export default CreateChallenge
