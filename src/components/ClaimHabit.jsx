import React from 'react'
import badge from '../images/badge.png'
import { contract, provider } from '../utils/contract';

function ClaimHabit({isClaim,setIsClaim}) {

  const ClaimHabitfunc = async () => {
    const signer = provider.getSigner();
    try{

    const transaction = await contract.connect(signer).completeHabit("Cycling",{
      gasLimit: 300000,
  });

    await transaction.wait();

    const transaction2 = await await contract.connect(signer).claimPointsForHabit("Cycling",{
      gasLimit: 300000,
  });

  await transaction2.wait();


  setIsClaim(!isClaim)
    } catch (error) {
      console.log(error,"error")

    }
  }
  return (
    <div className='bg-[#FCC201] font-secondary text-white flex flex-col justify-center items-center overflow-auto pb-6 z-[99999] h-[800px] w-[600px] rounded-lg shadow-md'>
        <p onClick={()=> setIsClaim(!isClaim)} className='flex justify-center pt-1 cursor-pointer hover:underline'>Close</p>
      <img src={badge} alt="" className='' />
      <p className='font-bold text-[30px]'>Congrats !</p>
      <p className='text-[22px]'>You just reached your first habit goal !</p>
      <p className='font-extralight w-[400px] text-center py-[20px]'>This badge is a symbol of your commitment to yourself. Keep going and earn more badges along the way.</p>
      <div>
        <button onClick={()=> ClaimHabitfunc()} className='w-[250px] bg-white text-black py-[10px] my-[20px] rounded-lg hover:border hover:border-black'>Claim 20 Points!</button>
      </div>
    </div>
  )
}

export default ClaimHabit
