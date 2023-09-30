import React from 'react'

const HeroSection = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-[40vh]'>
            <h1 className='text-2xl md:text-5xl text-center mb-2 font-mono text-slate-200'>Take Control of Your Browsing Experience</h1>
            <p className='text-xl  w-2/3 text-center text-slate-100'>Take charge of your Chrome browsing experience with TabStacker and enjoy a more organized and efficient digital workspace.</p>
            <button className='mt-4 rounded-md text-center bg-blue-600  text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 
  font-medium tracking-wide 
  inline-flex items-center no-underline
  disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
     gap-4 text-lg py-3 px-6'>Download Extension for Free</button>
        </div>
    )
}

export default HeroSection
