import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../config/firebase';
import { contract, provider } from '../utils/contract';
import { ethers } from "ethers";

function CreateHabit({habbitOpen,setHabbitOpen}) {
  const [name,setName] = useState('')

  const handleSubmit = async () => {
    const docRef = await addDoc(collection(db, "Habits"), {
      name: name,    
    });
    console.log("provider",provider)
    const signer = provider.getSigner();
    console.log(signer,"signer")
    try{

    const transaction = await contract.connect(signer).createHabit(name.toString(), 100, 8, 1, 20,{
      gasLimit: 300000,
  });

    await transaction.wait();


    setHabbitOpen(!habbitOpen)
    } catch (error) {
      console.log(error,"error")

    }
  }
  return (
    <div className='flex flex-col items-center bg-blue-50 h-[100vh] overflow-auto pb-6 z-[99999]'>
      <div className='bg-[#FFC046] w-full'>
      <p onClick={()=> setHabbitOpen(!habbitOpen)} className='flex justify-end mr-4 pt-1 cursor-pointer hover:underline'>Close</p>
    <div className=' w-full flex justify-center '>
      <p className='font-secondary font-bold text-[40px] text-white'>Habit</p>
      </div>
      
    </div>
      <div className='pt-[20px]'>
        <p className='font-semibold font-secondary text-[40px]'>Create Habit</p>
        <div className='pt-[20px]'>
            <p className='font-semibold font-secondary text-[25px] pb-[10px]'>NAME</p>
            <input value={name} onChange={(e)=> setName(e.target.value)} type="text" className='bg-transparent w-[350px] outline-none border-b-2 border-black' placeholder='Enter Habit Name' />
        </div>
        <div className='pt-[30px] flex flex-col'>
            <p className='font-semibold font-secondary text-[25px] pb-[10px]'>GOAL</p>
            <input type="number" className='bg-transparent w-[350px] outline-none border-b-2 border-black' placeholder='Enter Goals per day' />
            <select name="goal" className='mt-[20px] bg-white border border-black w-[150px] p-[10px] rounded-md'>
                <option value="daily">Daily</option>
                <option value="weekly_once">Weekly once</option>
                <option value="weekly_twice">Weekly twice</option>
                <option value="monthly_once">Monthly once</option>
            </select>
        </div>
        <div className='pt-[30px] flex flex-col'>
            <p className='font-semibold font-secondary text-[25px] pb-[10px]'>TARGET</p>
            <input type="number" className='bg-transparent w-[350px] outline-none border-b-2 border-black' placeholder='Enter Target per day' />
            <select name="goal" className='mt-[20px] bg-white border border-black w-[150px] p-[10px] rounded-md'>
                <option value="daily">Daily</option>
                <option value="weekly_once">Weekly once</option>
                <option value="weekly_twice">Weekly twice</option>
                <option value="monthly_once">Monthly once</option>
            </select>
        </div>
        <div className='pt-[30px] flex flex-col'>
            <p className='font-semibold font-secondary text-[25px] pb-[10px]'>REMAINDER</p>
            <input type="time" className='bg-transparent w-[100px] outline-none border-b-2 border-black' />
            <select name="target" className='my-[20px] bg-white border border-black w-[150px] p-[10px] rounded-md'>
                <option value="never">Never</option>
                <option value="daily">Daily</option>
                <option value="weekly_once">Weekly once</option>
                <option value="weekly_twice">Weekly twice</option>
                <option value="monthly_once">Monthly once</option>
            </select>
        </div>
      </div>
      <Link onClick={()=> handleSubmit()} className='px-[25px]'>
         <button className='bg-[#3843FF] text-white w-[350px] rounded-3xl p-[10px] hover:font-extrabold'>Create Habit</button>
      </Link>
  </div>
  )
}

export default CreateHabit
