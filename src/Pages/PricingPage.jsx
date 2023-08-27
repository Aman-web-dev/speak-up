import React from 'react';



function PricingPage() {
  return (
    <div className="bg-white text-black  overflow-hidden ">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 w-[80vw] my-[10vh]  m-auto ">
        {/* Card 1 */}
        <div className="p-8 bg-black text-white rounded-lg shadow-lg relative z-10 transform hover:-translate-y-2 transition-transform">
        <h2 className="text-2xl  font-semibold mb-4">Basic Plan</h2>
        <p className="text-gray-500 mb-6">Perfect for beginners</p>
        <div className="text-3xl font-semibold mb-8">₹9.99/month</div>


        <div className="p-6">
            <ol className="list-inside">
              <li className="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Unlimited
                updates
              </li>
              <li className="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Git
                repository
              </li>
              <li className="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>npm
                installation
              </li>
            </ol>
          </div>
          
          <button className="bg-blue-500 w-[90%] m-auto text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
            Get Started
          </button>
        </div>

        

        {/* Card 2 */}
        <div className="p-8 bg-black rounded-lg  text-white shadow-lg relative z-20 transform hover:-translate-y-2 transition-transform">
         
          <h2 className="text-2xl font-semibold mb-4">Pro Plan</h2>
          <p className="text-gray-500 mb-6">For those who want more</p>
          <div className="text-3xl font-semibold mb-8">₹19.99/month</div>
          
          
          <div className="p-6">
            <ol className="list-inside">
              <li className="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Unlimited
                updates
              </li>
              <li className="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Git
                repository
              </li>
              <li className="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>npm
                installation
              </li>
            </ol>
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
            Get Started
          </button>
        </div>

        {/* Card 3 */}
        <div className="p-8 bg-black rounded-lg text-white shadow-lg relative z-30 transform hover:-translate-y-2 transition-transform">
         
          <h2 className="text-2xl font-semibold mb-4">Premium Plan</h2>
          <p className="text-gray-500 mb-6">For power users</p>
          <div className="text-3xl m-auto font-semibold mb-8">₹29.99/month</div>
          <div className="p-6">
            <ol className="list-inside">
              <li className="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Unlimited
                updates
              </li>
              <li className="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Git
                repository
              </li>
              <li className="mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>npm
                installation
              </li>
            </ol>
          </div>        
          <button className="bg-blue-500 w-[90%]  text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
            Get Started
          </button>
        </div>
      </div>

      <div className="absolute top-0 bottom-0 left-0 right-0 h-[100] w-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 left-0 right-0 h-[100] w-full bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 left-0 right-0 h-[100] w-full bg-gradient-to-r from-transparent to-blue-500 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 left-0 right-0 h-[100] w-full bg-gradient-to-b from-transparent to-blue-500 pointer-events-none"></div>

     
    </div>
  );
}

export default PricingPage;
