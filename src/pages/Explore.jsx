import React, { useState } from 'react'
import water from '../images/waterdrop.png'
import books from '../images/books.png'
import meditate from '../images/meditate.png'
import joggers from '../images/run.png'
import dance from '../images/dance.png'
import travel from '../images/travel.png'
import sleep from '../images/sleep.png'
import study from '../images/study.png'
import clock from '../images/clock.png'
import fit from '../images/food.png'
import CreateHabit from '../components/CreateHabit'
import Navbar from '../components/Navbar'
import CreateChallenge from '../components/CreateChallenge'
import JoinChallenge from '../components/JoinChallenge'

function Explore() {
  const [habbitOpen, setHabbitOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isJoin, setIsJoin] = useState(false)
  return (
    <div className='flex flex-col justify-center items-center bg-blue-50'>
      {
        habbitOpen && 
        (
          <div className='fixed inset-0 h-full w-[100vw] flex justify-center items-center overflow-hidden'>
            <div className='bg-[rgba(0,0,0,0.7)]/70 z-[9999] absolute backdrop-blur-md inset-0'></div>
            <CreateHabit habbitOpen={habbitOpen} setHabbitOpen={setHabbitOpen}/>
          </div>
        )
      }
       {isOpen && (
        <div className='fixed inset-0  w-[100vw] flex justify-center items-center overflow-hidden'>
        <div className='bg-[rgba(0,0,0,0.7)]/70 z-[9999] absolute backdrop-blur-md inset-0'></div>
          <CreateChallenge setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
    )}
    {isJoin && (
        <div className='fixed inset-0  w-[100vw] flex justify-center items-center overflow-hidden'>
        <div className='bg-[rgba(0,0,0,0.7)]/70 z-[9999] absolute backdrop-blur-md inset-0'></div>
          <JoinChallenge setIsJoin={setIsJoin} isJoin={isJoin} />
        </div>
    )}
    <Navbar />
      <div className='pt-[30px]'>
        <div className='flex flex-row justify-between'>
          <p className='font-semibold font-secondary text-[25px]'>Suggested for you</p>
          <div className='flex items-center justify-center space-x-3 text-[#3843FF] cursor-pointer'>
            <p onClick={()=> setHabbitOpen(!habbitOpen)} className='text-xl'>+</p>
          <p className=' font-secondary text-[20px]'>VIEW ALL</p>
          </div>
        </div>
          <div className='grid grid-rows-2 grid-flow-col gap-5 py-[10px]'>
              <div className='bg-orange-200 w-[150px] h-[150px] rounded-xl flex flex-col items-center hover:border-2 border-[#3843FF]'>
                  <p className='font-secondary py-[25px] text-[18px]'>Drink Water</p>
                  <img src={water} alt="" className='h-[42px] w-[42px]' />
              </div>
              <div className='bg-pink-200 w-[150px] h-[150px] rounded-xl flex flex-col items-center hover:border-2 border-[#3843FF]'>
                  <p className='font-secondary py-[25px] text-[18px]'>Read Books</p>
                  <img src={books} alt="" className='h-[42px] w-[42px]' />
              </div>
              <div className='bg-green-200 w-[150px] h-[150px] rounded-xl flex flex-col items-center hover:border-2 border-[#3843FF]'>
                  <p className='font-secondary py-[25px] text-[18px]'>Meditate</p>
                  <img src={meditate} alt="" className='h-[42px] w-[42px]' />
              </div>
              <div className='bg-blue-200 w-[150px] h-[150px] rounded-xl flex flex-col items-center hover:border-2 border-[#3843FF]'>
                  <p className='font-secondary py-[25px] text-[18px]'>Sleep</p>
                  <img src={sleep} alt="" className='h-[42px] w-[42px]' />
              </div>
              <div className='bg-gray-300 w-[150px] h-[150px] rounded-xl flex flex-col items-center hover:border-2 border-[#3843FF]'>
                  <p className='font-secondary py-[25px] text-[18px]'>Study</p>
                  <img src={study} alt="" className='h-[42px] w-[42px]' />
              </div>
          </div>
      </div>
      <div className='pt-[30px]'>
        <div className='flex flex-row justify-between'>
          <p className='font-semibold font-secondary text-[25px]'>Challenges</p>
          <div className='flex items-center space-x-3 text-[#3843FF] cursor-pointer'>
            <p onClick={()=> setIsOpen(!isOpen)} className='text-xl'>+</p>
          <p className=' font-secondary text-[20px] '>VIEW ALL</p>
          </div>
        </div>
          <div className='grid grid-rows-2 grid-flow-col gap-5 py-[10px]'>
              <div onClick={()=> setIsJoin(!isJoin)} className='w-[250px] h-[150px] rounded-xl bg-[#3843FF] flex flex-col items-center hover:border-2 border-black'>
                  <p className='font-secondary py-[25px] text-[18px] text-white'>Best Coders !</p>
                  <div className='flex flex-row items-center'>
                    <img src={clock} alt="" className='h-[38px] w-[38px]' />
                    <p className='font-secondary font-extralight text-[18px] text-white px-[10px]'>1 week Challenge</p>
                  </div>
              </div>
              <div onClick={()=> setIsJoin(!isJoin)} className='w-[250px] h-[150px] rounded-xl flex flex-col bg-[#3843FF] items-center hover:border-2 border-black'>
                  <p className='font-secondary py-[25px] text-[18px] text-white'>Night Owls !</p>
                  <div className='flex flex-row items-center'>
                    <img src={clock} alt="" className='h-[38px] w-[38px]' />
                    <p className='font-secondary font-extralight text-[18px] text-white px-[10px]'>2 weeks Challenge</p>
                  </div>
              </div>
              <div onClick={()=> setIsJoin(!isJoin)} className='w-[250px] h-[150px] bg-[#3843FF] rounded-xl flex flex-col items-center hover:border-2 border-black'>
                  <p className='font-secondary py-[25px] text-[18px] text-white'>Gym Stakers</p>
                  <div className='flex flex-row items-center'>
                    <img src={clock} alt="" className='h-[38px] w-[38px]' />
                    <p className='font-secondary font-extralight text-[18px] text-white px-[10px]'>21 days Challenge</p>
                  </div>
              </div>
          </div>
      </div>
    
      <div className='pt-[30px]'>
        <div className='flex flex-row justify-between'>
          <p className='font-semibold font-secondary text-[25px]'>Habit Clubs</p>
          <p className=' font-secondary text-[20px] text-[#3843FF] cursor-pointer'>VIEW ALL</p>
        </div>
          <div className='grid grid-rows-2 grid-flow-col gap-5 py-[10px]'>
              <div className='bg-white w-[150px] h-[150px] rounded-xl flex flex-col items-center hover:border-2 border-[#3843FF]'>
                  <p className='font-secondary py-[25px] text-[18px]'>Dancers</p>
                  <img src={dance} alt="" className='h-[42px] w-[42px]' />
              </div>
              <div className='bg-white w-[150px] h-[150px] rounded-xl flex flex-col items-center hover:border-2 border-[#3843FF]'>
                  <p className='font-secondary py-[25px] text-[18px]'>Travellers</p>
                  <img src={travel} alt="" className='h-[42px] w-[42px]' />
              </div>
              <div className='bg-white w-[150px] h-[150px] rounded-xl flex flex-col items-center hover:border-2 border-[#3843FF]'>
                  <p className='font-secondary py-[25px] text-[18px]'>Fitness</p>
                  <img src={fit} alt="" className='h-[42px] w-[42px]' />
              </div>
              <div className='bg-white w-[150px] h-[150px] rounded-xl flex flex-col items-center hover:border-2 border-[#3843FF]'>
                  <p className='font-secondary py-[25px] text-[18px]'>Joggers</p>
                  <img src={joggers} alt="" className='h-[42px] w-[42px]' />
              </div>
              <div className='bg-white w-[150px] h-[150px] rounded-xl flex flex-col items-center hover:border-2 border-[#3843FF]'>
                  <p className='font-secondary py-[25px] text-[18px]'>Joggers</p>
                  <img src={joggers} alt="" className='h-[42px] w-[42px]' />
              </div>
          </div>
      </div>
  </div>
  )
}

export default Explore
