import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

 function Player (){

  const videoUrl =  sessionStorage.getItem('videoUrl')

  const [subscribed, setSubscribed] = useState(false);


  const handleSubscribe = () => {
    setSubscribed(true);
  };




  return (


    <div className="mx-auto w-[100vw] h-[90vh] mt-[3.5625rem] flex max-w-[73.375rem] flex-col items-center justify-center px-4 md:flex-row-reverse md:justify-between md:gap-16 md:px-8">
      <div className="width-fill-available banner-1 flex-[1.08]">
        {!subscribed ? (
          <video
            className="rounded-lg shadow-md  top-0 left-0 w-full h-full object-cover"

          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <video
            className="rounded-lg shadow-md  top-0 left-0 w-full h-full object-cover"
            controls
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}


      </div>

      <div className="flex flex-1 flex-col gap-[1.625rem] text-center md:text-left">
        <h1 className="mt-8 text-[1.5rem] font-[500] leading-[1.05] text-very-dark-blue md:mt-0 md:text-[3rem]">
          Subscribe To the Course
        </h1>
        <p className="text-very-dark-blue/50 md:text-normal">
          Discover a fun way to learn French with this video! Simplified lessons and engaging content make language learning enjoyable and effective. Start your French journey today
        </p>
        <div className="mt-8 flex flex-col justify-center gap-[0.75rem] md:my-[0.5625rem] md:flex-row md:justify-start">


          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleSubscribe}>Subscribe</button>



          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              See Prices
            </span>
          </button>
        </div>
      </div>
    </div>





  )
}

export default Player
