import { set } from 'firebase/database'
import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../config/firebase'
import { contract, provider } from '../utils/contract'
import { ethers, parseEther } from "ethers";

function CreateChallenge({isOpen,setIsOpen}) {
  const[name,setName] = useState('')
  const[habits,setHabbits] = useState([])

  const handleInputChange = (e) => {
    const newItem = e.target.value;
    setHabbits([newItem]);
    console.log(habits)
  };

  const handleSubmit = async () => {
    const docRef = await addDoc(collection(db, "Challenge"), {
      name: name,    
    });

    const signer = provider.getSigner();
    try{
    // Call the contract function with a specified gas limit
    const transaction = await contract.connect(signer).createChallenge(name, 20, 5, habits, {
      value: ethers.utils.parseEther("0.000000000000000005",18), // Convert value to ether (wei format)
        gasLimit: 300000,
    });

    // Wait for the transaction to be mined
    await transaction.wait();
    setIsOpen(!isOpen)
  } catch (error) {
    console.log(error,"error")

  }

    
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
            <input type="text" value={name} 
            onChange={(e)=>setName(e.target.value)} 
            className='bg-transparent w-[350px] outline-none border-b-2 border-black' placeholder='Enter Challenge Name' />
        </div>
        <div className='pt-[30px] flex flex-col'>
            <p className='font-semibold font-secondary text-[25px] pb-[10px]'>STAKE</p>
            <input type="number" className='bg-transparent w-[350px] outline-none border-b-2 border-black' placeholder='Enter Staking Amount (in USDT)' />
        </div>
        <div className='pt-[30px] flex flex-col'>
            <p className='font-semibold font-secondary text-[25px] pb-[10px]'>HABIT</p>
            <input onChange={handleInputChange}  type="text" className='bg-transparent w-[350px] outline-none border-b-2 border-black' placeholder='Enter Habit' />
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
