import React from 'react'
import aboutMe from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='my-16 border-neutral-900 pb-4 '>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
        className='text-center text-4xl'>About Me</motion.h2>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center items-center'>
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className='p-4 rounded-md size-80' src={aboutMe} alt="about" />
          </div>
        </div>
        <div className='w-full lg:w-1/2 '>
          <div className='flex justify-center lg:justify-start'>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className=' mt-10 mr-15'>
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
