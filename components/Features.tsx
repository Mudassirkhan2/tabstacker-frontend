import React from 'react'
import DarkMode from "../app/assets/darkmode.png"
import setLimitpng from "../app/assets/setLimit.png"
import setTimer from "../app/assets/setTimer.png"
import savedpng from "../app/assets/saved.png"
import currentPng from "../app/assets/current.png"
import analyticsPng from "../app/assets/analytics.png"
import Image from 'next/image'
const Features = () => {
    return (
        <section>

            <p className=' text-xl md:text-4xl mb-4'>
                <span className='bg-yellow-100 text-slate-700 rounded-sm'>Key Features</span>
            </p>

            <div className='flex gap-8 mb-16 items-center'>
                <Image src={currentPng} alt="Dark Mode" className='w-1/2 rounded-2xl shadow-2xl' />
                <div>
                    <h2 className='text-xl md:text-3xl font-bold font-serif mb-4'>Tab Management with Enhanced Functionality</h2>
                    <p className='text-amber-200 font-sans'>Enhance your Chrome tab management experience with visual favicon display, quick navigation, and effortless tab closure. Streamline your browsing, declutter your workspace, and boost productivity.</p>
                </div>
            </div>
            <div className='flex gap-8 mb-16 items-center'>
                <div>
                    <h2 className='text-xl md:text-3xl font-bold font-serif mb-4'>Save Tabs in Folders for Effortless Browsing</h2>
                    <p className='text-amber-200 font-sans'>streamlines your browsing by allowing you to effortlessly categorize your tabs into custom folders. Simplify your digital workspace and enjoy hassle-free tab organization..</p>
                </div>
                <Image src={savedpng} alt="Dark Mode" className='w-1/2 rounded-2xl shadow-2xl' />
            </div>
            <div className='flex gap-8 mb-16 items-center'>
                <Image src={analyticsPng} alt="Dark Mode" className='w-1/2 rounded-2xl shadow-2xl' />
                <div>
                    <h2 className='text-xl md:text-3xl font-bold font-serif mb-4'>Uncover Your Most Visited Tabs</h2>
                    <p className='text-amber-200 font-sans'>Track clicks within your saved folders, compiling vital statistics on your  frequently visited tabs. Not stopping there, we provide an overview of your frequently visited tabs across all folders through interactive bar charts.</p>
                </div>
            </div>
            <div className='flex gap-8 mb-16 items-center'>
                <div>
                    <h2 className='text-xl md:text-3xl font-bold font-serif mb-4'>Master Your Time, Achieve Your Goals</h2>
                    <p className='text-amber-200 font-sans'>Dive deep into efficient time management with our Tab Time Management feature. Say goodbye to endless distractions and hello to laser-focused work sessions.</p>
                </div>
                <Image src={setTimer} alt="Dark Mode" className='w-1/2 rounded-2xl shadow-2xl' />
            </div>
            <div className='flex gap-8 mb-16 items-center'>
                <Image src={setLimitpng} alt="Dark Mode" className='w-1/2 rounded-2xl shadow-2xl' />
                <div>
                    <h2 className='text-xl md:text-3xl font-bold font-serif mb-4'>Take Command of Your Tab Habits</h2>
                    <p className='text-amber-200 font-sans'>Do you find yourself drowning in a sea of open tabs? TabStackers Tab Limit Control is here to rescue you. With the power to set your own browsing boundaries, you can now establish a maximum tab limit that suits your workflow.</p>
                </div>
            </div>
            <div className='flex gap-8 mb-16 items-center'>
                <div>
                    <h2 className='text-xl md:text-3xl font-bold font-serif mb-4'>Empower Your Browsing Experience, Even in the Dark</h2>
                    <p className='text-amber-200 font-sans'>Do you find yourself drowning in a sea of open tabs? TabStackers Tab Limit Control is here to rescue you, day or night. With the power to set your own browsing boundaries, you can now establish a maximum tab limit that suits your workflow, all while enjoying the soothing embrace of dark mode.</p>
                </div>
                <Image src={DarkMode} alt="Dark Mode" className='w-1/2 rounded-2xl shadow-2xl' />
            </div>
        </section>
    )
}

export default Features
