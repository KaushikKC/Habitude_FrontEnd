import React from 'react'
import male from '../images/man.png'
import female from '../images/woman.png'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'


function Profile2() {
  return (
    <div className=' bg-blue-50 h-[100vh]'>
      <Navbar />
      <div className='flex flex-col justify-center items-center my-[30px]'>
        <p className='font-secondary font-bold text-[50px]'>Create Account</p>
        <div className='pt-[30px]'>
            <p className='font-semibold font-secondary text-[25px]'>Choose your Gender</p>
            <div className='grid grid-col-2 grid-flow-col gap-5 py-[10px]'>
                <div className='bg-white w-[180px] h-[180px] rounded-xl flex flex-col items-center hover:border-2 border-[#3843FF]'>
                    <p className='font-secondary py-[25px] text-[25px]'>Male</p>
                    <img src={male} alt="" className='h-[50px] w-[50px]' />
                </div>
                <div className='bg-white w-[180px] h-[180px] rounded-xl flex flex-col items-center hover:border-2 border-[#3843FF]'>
                    <p className='font-secondary py-[25px] text-[25px]'>Female</p>
                    <img src={female} alt="" className='h-[50px] w-[50px]' />
                </div>
            </div>
        </div>
      <Link to='/add' className='p-[25px]'>
         <button className='bg-[#3843FF] text-white w-[350px] rounded-3xl p-[10px] hover:font-extrabold'>Next</button>
      </Link>
    </div>
    </div>
  )
}

export default Profile2
