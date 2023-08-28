import React from 'react'
import logo from '../assets/speakup.jpg'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { Link } from 'react-router-dom';

function Navbar() {

  const { isAuthenticated, setIsAuthenticated, name } = useContext(AuthContext);

    const handleDropDown = () => {
        setShow((prevShow) => !prevShow);
    }    

    const handleLogout = async () => {
        try {
            const response = await axios.post('https://edu-tech-api.onrender.com/api/logout', {}, { withCredentials: true });
            if (response.status === 200) {
                document.cookie = 'refreshToken=; expires=' + new Date(0).toUTCString();
                setIsAuthenticated(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
      
<nav className="bg-white relative z-10 my-2 border-white dark:bg-gray-900  w-[90vw] m-auto bg:rounded-full rounded-xl md:rounded-full">
  <div className="max-w-screen-xl   flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" className="flex items-center">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Speak-Up</span>
        <img src={logo} className='h-9' alt="" />
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto " id="navbar-default">
      <ul className="font-medium flex flex-col  md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
          <Link to="/video" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Videos</Link>
        </li>
        <li>
          <Link to="/features" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Features</Link>
        </li>
        <li>
          <Link to="/pricing" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</Link>
        </li>
        <li>
          <Link to="/events" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Events</Link>
        </li>



        <li>


        {/* desktop navigation */}
        {isAuthenticated ? (<div className='flex gap-3 md:gap-5'>
                <button type='button' className='outline_btn' onClick={handleLogout}>
                    Sign out
                </button>

                <div onClick={handleDropDown} className='border border-white px-4 p-1 rounded-3xl flex items-center' ><span className='text-white '>{name.toUpperCase()}</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 bg-white rounded-full ml-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

                </div>

            </div>) : (
                <>{<Link to={'/user-register'} type='button' className='black_btn'>
                Sign in
            </Link>}</>
            )}

        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
