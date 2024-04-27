import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import percentage from '../images/Circle - Loader.png'
import clock from '../images/Time Circle.png'
import friends from '../images/Friends_2.png'
import water from '../images/droplevel.png'
import walk from '../images/walklevel.png'
import plants from '../images/plantslevel.png'
import cycle from '../images/cyclelevel.png'
import ClaimHabit from '../components/ClaimHabit'
import tick from '../images/tick.png'
import ClaimChallenge from '../components/ClaimChallenge'

function Dashboard() {
    const [isClaim,setIsClaim]=useState(false)
    const [isClaimChallenge,setIsClaimChallenge]=useState(false)

  return (
    
    <div className='flex flex-col font-secondary items-center bg-blue-50 '>
        {isClaim && (
        <div className='fixed inset-0  w-[100vw] flex justify-center items-center overflow-hidden'>
        <div className='bg-[rgba(0,0,0,0.7)]/70 z-[9999] absolute backdrop-blur-md inset-0'></div>
          <ClaimHabit setIsClaim={setIsClaim} isClaim={isClaim} />
        </div>
    )}
    {isClaimChallenge && (
        <div className='fixed inset-0  w-[100vw] flex justify-center items-center overflow-hidden'>
        <div className='bg-[rgba(0,0,0,0.7)]/70 z-[9999] absolute backdrop-blur-md inset-0'></div>
          <ClaimChallenge setIsClaimChallenge={setIsClaimChallenge} isClaimChallenge={isClaimChallenge} />
        </div>
    )}
        <Navbar />
        <div className='pt-[30px]'>
            <p className='text-[22px]'>Hi, Kaushik 👋</p>
            <p className='text-gray-500'>Let’s make habits together!</p>
        </div>
        <div className='flex flex-row items-center my-[20px] bg-gradient-to-r from-[#3843FF] via-blue-60 to-[#5258ca] rounded-lg w-[450px] p-[15px]'>
            <img src={percentage} alt="" className='h-[50px] w-[50px]' />
            <div className='text-white px-[20px]'>
                <p>Your daily goals almost done! 🔥</p>
                <p className='font-extralight'>1 of 4 completed</p>
            </div>
        </div>

        <div className='flex flex-row justify-between items-center w-[450px] space-x-7 my-[10px]'>
          <p className='font-semibold text-[25px]'>Challenges</p>
          <p className='text-[20px] cursor-pointer'>VIEW ALL</p>
        </div>
        <div className='flex flex-row justify-between bg-white p-[15px] w-[450px] rounded-lg'>
            <div className='flex '>
            <div className='flex items-center'>
                <img src={clock} alt="" className='h-[35px] w-[35px]' />
            </div>
            <div className='px-[15px] flex flex-col justify-start '>
                <p>Daily Fit Challenge! 🏃🏻‍</p>
                <p className='text-gray-500 font-extralight'>5 days left</p>
            </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img src={friends} alt="" className='h-[35px] w-[60px]' />
                <p className='text-gray-500 font-extralight'>4 people joined</p>
            </div>
          </div>
          <div className='flex flex-row justify-between bg-white p-[15px] w-[450px] rounded-lg my-[30px]'>
            <div className='flex '>
            <div className='flex items-center'>
                <img src={tick} onClick={()=>setIsClaimChallenge(!isClaimChallenge)} alt="" className='h-[35px] w-[35px]' />
            </div>
            <div className='px-[15px] flex flex-col justify-start '>
                <p>Cycling Challenge! 🚴</p>
                <p className='text-gray-500 font-extralight'>Completed</p>
            </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img src={friends} alt="" onClick={()=>setIsClaimChallenge(!isClaimChallenge)} className='h-[35px] w-[60px]' />
                <p className='text-gray-500 font-extralight'>10 people joined</p>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center w-[450px] space-x-7 my-[10px]'>
            <p className='font-semibold text-[25px]'>Habits</p>
            <p className='text-[20px] cursor-pointer'>VIEW ALL</p>
        </div>
        <div className='flex flex-row items-center bg-white p-[15px] w-[450px] rounded-lg'>
            <img src={water} alt=""  className='h-[40px] w-[40px]'/>
            <div className='px-[15px] flex flex-col justify-start'>
                <p>Drink Water‍</p>
                <p className='text-gray-500 font-extralight'>500/2000 ML</p>
            </div>
            <div className='flex justify-end ml-auto'>
                <p className='border border-gray-300 rounded-xl w-9 h-9 text-[25px] text-center'>+</p>
            </div>
        </div>
        <div className='flex flex-row items-center justify-start bg-white mt-[30px] p-[15px] w-[450px] rounded-lg'>
            <img src={walk} alt=""  className='h-[40px] w-[40px]'/>
            <div className='px-[15px] flex flex-col justify-start'>
                <p>Walk</p>
                <p className='text-gray-500 font-extralight'>5000/10000 STEPS</p>
            </div>
            <div className='flex justify-end ml-auto'>
                <p className='border border-gray-300 rounded-xl w-9 h-9 text-[25px] text-center'>+</p>
            </div>
        </div>
        <div className='flex flex-row items-center bg-white p-[15px] mt-[30px] w-[450px] rounded-lg'>
            <img src={plants} alt=""  className='h-[40px] w-[40px]'/>
            <div className='px-[15px] flex flex-col '>
                <p>Water‍ Plants</p>
                <p className='text-gray-500 font-extralight'>0/1 TIMES</p>
            </div>
            <div className='flex justify-end ml-auto'>
                <p className='border border-gray-300 rounded-xl w-9 h-9 text-[25px] text-center'>+</p>
            </div>
        </div>
        <div className='flex flex-row items-center bg-white p-[15px] mt-[30px] w-[450px] rounded-lg'>
            <img src={cycle} alt=""  className='h-[40px] w-[40px]'/>
            <div className='px-[15px] flex flex-col '>
                <p>Cycling</p>
                <p className='text-gray-500 font-extralight'>30/30 MIN</p>
            </div>
            <div onClick={()=>setIsClaim(!isClaim)} className='flex justify-end ml-auto cursor-pointer'>
                <p className='border border-gray-300 rounded-xl w-9 h-9 text-[28px] text-center text-green-500'>✓</p>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
