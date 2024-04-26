import React from "react";
import illustration from "../images/Illustration.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gradient-to-r from-[#3843FF] via-blue-60 to-[#5258ca] h-[100vh]">
      <div className="bg-white w-full flex justify-end p-[10px]">
          <button className="p-[10px] mx-[40px] border border-black w-[180px] rounded-lg">Connect Wallet</button>
      </div>
      {/* bg-gradient-to-r from-[#3843FF] via-blue-60 to-[#5258ca] */}
      <div className="flex flex-row justify-center items-center py-[90px]">
        <img src={illustration} alt="" className="h-[550px] w-[550px]" />
        {/* <img src={illustration1} alt="" className='h-[300px] w-[400px]'/>
      <img src={circlebg} alt="" className='h-[400px] w-[400px]'/> */}

      <div>
      <div className="m-[25px]">
          <p className="font-secondary font-medium text-[30px] text-white">
            Create Good Habits & Track Your Progress !
          </p>
          <p className="font-secondary font-extralight text-[18px] text-white">
            Change your life by slowly adding new healthy habits and sticking to
            them.
          </p>
          {/* <p className="font-secondary font-medium text-[30px] text-white">
            Track Your Progress
          </p> */}
          <p className="font-secondary font-extralight text-[18px] text-white">
            Everyday you become one step closer to your goal. Don't give up!
          </p>
        </div>
      <p className="font-secondary font-medium text-[30px] text-white m-[25px]">
            Let's get started!🚀
        </p>
      <div className="grid grid-cols-3 gap-5 mx-[25px]">
      <Link to='/create' class="col-start-1 col-end-4 ">
        <button className='bg-white text-black w-[500px] rounded-3xl p-[10px] '>Connect with us!</button>
      </Link>
      </div>
      </div>
    </div>  
    </div>
  );
}

export default Home;
