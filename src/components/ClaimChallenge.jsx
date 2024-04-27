import React from 'react'
import badge from '../images/badge.png'

function ClaimChallenge({isClaimChallenge,setIsClaimChallenge}) {
  return (
    <div className='bg-[#FCC201] font-secondary text-white flex flex-col justify-center items-center overflow-auto pb-6 z-[99999] h-[800px] w-[600px] rounded-lg shadow-md'>
    <p onClick={()=> setIsClaimChallenge(!isClaimChallenge)} className='flex justify-center pt-1 cursor-pointer hover:underline'>Close</p>
  <img src={badge} alt="" className='' />
  <p className='font-bold text-[30px]'>Congrats !</p>
  <p className='text-[22px]'>You just completed your first challenge !</p>
  <p className='font-extralight w-[400px] text-center py-[20px]'>This badge is a symbol of your commitment to yourself. Keep going and earn more badges along the way.</p>
  <div>
    <button className='w-[250px] bg-white text-black py-[10px] my-[20px] rounded-lg hover:border hover:border-black'>Claim 20 Points!</button>
  </div>
</div>
  )
}

export default ClaimChallenge
