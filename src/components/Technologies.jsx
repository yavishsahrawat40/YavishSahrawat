import React from 'react'
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { DiPython } from 'react-icons/di'
import { DiJava } from 'react-icons/di'
import { animate, motion } from 'framer-motion'

const icons = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
    return (
        <div className='border-b border-neutral-900 pb-24'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 1, y: -100 }}
                transition={{ duration: 0.5 }}
                className='text-center bg-gradient-to-r from-purple-500 via-slate-400 to-pink-400 bg-clip-text text-4xl tracking-tight text-transparent'>Technologies</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='flex flex-wrap justify-center items-center gap-4 mt-10'>
                <motion.div
                    variants={icons(2.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-3xl border-4 border-transparent p-4'>
                    <FaReact className='text-6xl text-cyan-400' />
                </motion.div>
                <motion.div
                    variants={icons(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-3xl border-4 border-transparent p-4'>
                    <FaNodeJs className='text-6xl text-green-500' />
                </motion.div>
                <motion.div
                    variants={icons(2.7)}
                    initial="initial"
                    animate="animate"
                    className='rounded-3xl border-4 border-transparent p-4'>
                    <SiExpress className='text-6xl text-green-500' />
                </motion.div>
                <motion.div
                    variants={icons(3.3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-3xl border-4 border-transparent p-4'>
                    <SiMongodb className='text-6xl text-green-600' />
                </motion.div>
                <motion.div
                    variants={icons(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-3xl border-4 border-transparent p-4'>
                    <DiJava className='text-6xl text-red-400' />
                </motion.div>
                <motion.div
                    variants={icons(2.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-3xl border-4 border-transparent p-4'>
                    <DiPython className='text-6xl text-cyan-400' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies
