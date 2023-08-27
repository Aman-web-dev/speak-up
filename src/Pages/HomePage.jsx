import React from 'react';
import image from '../../src/assets/homepageimg.svg';
import logo from '../../src/assets/speakup.jpg';
import { TypeAnimation } from 'react-type-animation';


function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <head>
        <title>Speak-Up</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <main className="flex-grow flex flex-col-reverse lg:flex-row">
        <div className="flex-grow p-8 text-center lg:text-left m-auto">
          <h1 className="font-serif flex flex-row text-4xl lg:text-7xl font-bold text-blue-500 tracking-wide">
            Speak-Up
            <img
              src={logo}
              alt=""
              aria-hidden="true"
              height={80}
              width={80}
              className="mx-auto lg:mx-0"
            />
          </h1>
          <h3 className="font-serif text-back text-2xl lg:text-5xl mt-4">
            A Place Where you Can{' '}
            <strong className="text-blue-900"> Learn </strong>
            your favorite <strong className="m-2">Language</strong>
          </h3>
          <div className="font-mono text-xl lg:text-3xl mt-4">
            <strong className="px-1">
            <TypeAnimation
        sequence={[
          'English "hello"',
          3000,
          'Spanish "Hola"',
          3000,
          'Korean "안녕하세요"',
          3000,
          'Japanese "こんにちは"',
          3000,
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: '2em' }}
      />
            </strong>
          </div>
          <div className="mt-6">
            <button className="relative inline-flex items-center justify-center p-2 text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-500 to-gray-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none shadow-md">
              <span className="relative px-6 py-3 transition-all ease-in-out duration-75 bg-white dark:bg-gray-800 rounded-md group-hover:bg-opacity-0 font-bold">
                Get Started{' '}
                <strong className="font-bold mx-2">&rarr;</strong>
              </span>
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex-grow">
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="w-full h-screen"
          />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
