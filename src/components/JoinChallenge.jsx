import React from 'react'
import friends from'../images/Friends.png'
import run from'../images/run.png'
import meditate from'../images/meditate.png'

function JoinChallenge({isJoin,setIsJoin}) {
  return (
    <div className='bg-gradient-to-r from-[#3843FF] via-blue-60 to-[#5258ca] h-[700px] flex flex-col overflow-auto z-[99999] rounded-lg shadow-md text-white font-secondary'>
        <p onClick={()=> setIsJoin(!isJoin)} className='flex justify-end mr-6 pt-3 cursor-pointer hover:underline'>Close</p>
    <div className='bg-gradient-to-r from-[#3843FF] via-blue-60 to-[#5258ca] text-white font-secondary flex flex-col justify-center items-center h-[100vh]'>
      <p className='text-[40px]'>🌟</p>
      <p className='text-[22px] font-medium py-[10px]'>Daily Fit Routine!</p>
      <p className='text-[20px] font-extralight'>May 15 to May 22</p>
      <img src={friends} alt="" className='h-[30px] w-[140px] my-[30px]'/>
      <p className='font-extralight text-center w-[600px] text-[18px]'>With a focus on holistic wellness, it fosters accountability and motivation. Join us in the journey towards a healthier, more active lifestyle!
      With a user-friendly interface, it provides diverse exercises for all fitness levels. Track progress, set reminders, and join the supportive community.</p>
      <button className='w-[200px] bg-white text-black rounded-lg p-[10px] m-[20px] hover:border border-black'>Join the Challenge</button>
      <div>
      <p className='font-semibold text-[25px]'>Habits</p>
      <div className='bg-white w-[200px] px-[20px] flex flex-row space-x-5 rounded-lg py-[10px]'>
          <img src={run} alt="" className='h-[30px] w-[30px]'/>
          <p className='text-black'>Walk</p>
      </div>
      <div className='bg-white w-[200px] px-[20px] my-[20px] flex flex-row space-x-5 rounded-lg py-[10px]'>
          <img src={meditate} alt="" className='h-[30px] w-[30px]'/>
          <p className='text-black'>Meditate</p>
      </div>
    </div>
    </div>
  </div>
  )
}

export default JoinChallenge
