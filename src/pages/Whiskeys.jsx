import React, { useContext } from "react";
import { GlobalWhiskeyContext } from "../hooks/GlobalWhiskey";
import { Link } from "react-router-dom";
import { RetrieveWhiskeyFromApi } from "../axios/RetrieveWhiskeyFromApi";

function Whiskeys() {
  const { whiskeys } = useContext(GlobalWhiskeyContext);

  return (
    <>
      <RetrieveWhiskeyFromApi />
      <div className="bg-hero bg-scroll bg-cover bg-centre">
        <h1 className="text-white text-6xl text-bold p-2">Whiskies:</h1>
        <div className='lg:flex-nowrap h-full lg:h-[100vh] flex flex-wrap items-center justify-center text-white gap-8'>
        {whiskeys.map(whiskey => ( 
          <div className='bg-black/30 backdrop-blur-sm w-[400px] h-[250px] shadow-xl rounded-xl shadow-black flex flex-row hover:scale-110'>
            <div className="text-center basis-1/2">
              <div className="text-3xl mb-4">{whiskey.name}</div>
              <div>{whiskey.age === 0 ? "No Statement" : `${whiskey.age} years`}</div>
              <div>Price Range: {whiskey.price}</div>
              <div>rating</div>
            </div>
            <div className="flex">
              <img src={whiskey.image} 
                className='h-full w-full rounded-r-xl'
              />
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  );
}

export default Whiskeys;

