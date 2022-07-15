// import React, { useContext } from "react";
// import { GlobalWhiskeyContext } from "../hooks/GlobalWhiskey";
// import { Link } from "react-router-dom";

function Whiskeys() {
  // const { whiskeys, removeWhiskey } = useContext(GlobalWhiskeyContext);
 


  return (
    // returns full page div with bg responsive image
    <div className="bg-hero bg-scroll bg-cover bg-centre">
      <h1 className="text-white text-6xl text-bold p-2">Whiskies:</h1>
      <div className='lg:flex-nowrap h-full lg:h-[100vh] flex flex-wrap items-center justify-center text-white gap-8'>        
        <div className='bg-black/30 backdrop-blur-sm w-[400px] h-[250px] shadow-xl rounded-xl shadow-black flex flex-row hover:scale-110'>
          <div className="text-center basis-1/2">
          {/* // returns a card to be used for the whiskeys */}
            <div className="text-3xl mb-4">Jack Daniels Tennessee Reserve</div>
            <div>age</div>
            <div>price</div>
            <div>rating</div>
          </div>
          <div>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2e46f273971871.5c1bb36f2b32c.jpg' 
              className='h-full w-full rounded-r-xl'
            />
          </div>
        </div>
        <div className='bg-black/30 backdrop-blur-sm w-[400px] h-[250px] shadow-xl rounded-xl shadow-black flex flex-row hover:scale-110'>
          <div className="text-center basis-1/2">
            <div className="text-3xl mb-4">Whiskey</div>
            <div>age: 6 years</div>
            <div>price: average</div>
            <div>rating: 3.8 stars</div>
          </div>
          <div>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2e46f273971871.5c1bb36f2b32c.jpg' 
              className='h-full w-full rounded-r-xl'
            />
          </div>
        </div>
        <div className='bg-black/30 backdrop-blur-sm w-[400px] h-[250px] shadow-xl rounded-xl shadow-black flex flex-row hover:scale-110'>
          <div className="text-center basis-1/2">
            <div className="text-3xl mb-4">Whiskey</div>
            <div>age: 6 years</div>
            <div>price: average</div>
            <div>rating: 3.8 stars</div>
          </div>
          <div>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2e46f273971871.5c1bb36f2b32c.jpg' 
              className='h-full w-full rounded-r-xl'
            />
          </div>
        </div>
      </div>        
        
    </div>
  );
}

export default Whiskeys;
