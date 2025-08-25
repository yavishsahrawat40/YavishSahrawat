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
          <div className='flex flex-col justify-center lg:justify-start'>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className=' mt-10 mr-15'>
              {ABOUT_TEXT}
            </motion.p>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='flex justify-center lg:justify-start mt-8'>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className='bg-gradient-to-r from-purple-500 via-slate-400 to-pink-400 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2'>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
