import React from "react";

function Card1({username,bnttext="please click"})// yaha () iske andar props hota hai fir props.username karoge to vahi milega iss liye isko aise likh diye short form me baat ek hi hai aur click default value hai
{
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        alt="Airmax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username} </h1>

        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>

        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {bnttext} 
        </button>
      </div>
    </div>
  );
}

export default Card1;