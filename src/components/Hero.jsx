import React, { useState, useEffect } from 'react'
import { HERO_CONTENT } from '../constants'
import profileImage from '../assets/profile.jpg'
import { motion, AnimatePresence } from "motion/react"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    }
})

const Hero = () => {
    const titles = ["MERN Stack Developer", "Machine Learning", "Data Science"];
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, [titles.length]);

    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className='pb-14 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>YAVISH SAHRAWAT</motion.h1>
                        <div className='h-16 flex items-center'>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentTitleIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className='bg-gradient-to-r from-purple-500 via-slate-400 to-pink-400 bg-clip-text text-5xl tracking-tight text-transparent pl-3'>
                                    {titles[currentTitleIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                        <motion.p
                            variants={container(2)}
                            initial="hidden"
                            animate="visible"
                            className='my-2 max-w-xl font-light py-6 tracking-tighter'>
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg: p-8'>
                    <div className='flex justify-center'>
                        <motion.img 
                        initial={{x:100, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:1, delay:1.3}}
                        className='w-[50%] rounded-md' src={profileImage} alt="profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
