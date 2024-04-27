import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import profilepic from '../images/kaushik.png'
import water from '../images/droplevel.png'
import meditate from '../images/meditatelevel.png'

function ViewProfile() {
    const [username,setUserName] = useState("");
    const [email,setEmail] = useState("");

    useEffect(() => {
      // Fetching data from localStorage
      const storedUsername = localStorage.getItem('username') || '';
      const storedEmail = localStorage.getItem('email') || '';
      

      setUserName(storedUsername);
      setEmail(storedEmail);
  
  }, []);
  return (
    <div className='flex flex-col items-center bg-blue-50 font-secondary h-[100vh]'>
      <Navbar />
      <div className='mt-[30px] flex flex-col justify-center items-center'>
        <p className='text-[40px] font-semibold'>Your Profile</p>
        <div className='flex flex-col justify-center items-center p-4 rounded-2xl'>
        <img src={profilepic} alt='profile' className='h-32 w-32 rounded-full border-4 border-black  mx-auto my-4'/>
        <p className='text-[25px]'>{username}</p>
        <p className=''>{email}</p>
        <p className='text-[25px]'>Total Points: 1000 🌟</p>
        </div>
        <div className='flex flex-row justify-between items-center w-[450px] space-x-7 my-[20px]'>
            <p className='font-semibold text-[25px]'>Favorite Habits</p>
            <p className='text-[20px] cursor-pointer'>VIEW ALL</p>
        </div>
        <div className='flex flex-row items-center bg-white p-[15px] w-[450px] rounded-lg'>
            <img src={meditate} alt=""  className='h-[40px] w-[40px]'/>
            <div className='px-[15px] flex flex-col items-center'>
                <p>Meditate</p>
                <p className='text-gray-500 font-extralight'>30/30 MIN</p>
            </div>
        </div>
        <div className='flex flex-row items-center bg-white p-[15px] mt-[30px] w-[450px] rounded-lg'>
            <img src={water} alt=""  className='h-[40px] w-[40px]'/>
            <div className='px-[15px] flex flex-col items-center justify-start'>
                <p>Drink Water‍</p>
                <p className='text-gray-500 font-extralight'>500/2000 ML</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ViewProfile
