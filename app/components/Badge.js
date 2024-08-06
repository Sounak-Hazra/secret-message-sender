import React from "react";

const BadgeShine = () => {
    return (
      <span className=' my-4  inline-flex h-full animate-background-shine cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-3 py-1 text-xs font-medium text-gray-300'>
        <div className='h-16 bg-transparent text-white flex justify-center items-center text-2xl text'>
                    <div className='w-fit flex items-center '><span className='text-5xl text-purple-700 font-normal'><i>&lt;</i></span>
                        <span className='text-purple-700 ' >Message </span>
                        <span className='text-5xl text-blue-700 font-thin'>/</span> <span className='text-green-700'>Secretly</span>
                        <span className=' text-5xl text-green-700 font-normal'><i>&gt;</i></span></div>

                </div>
      </span>
    );
  };
  
  export default BadgeShine;