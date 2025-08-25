import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='border-t border-neutral-800 py-8 mt-16'>
            <div className='container mx-auto px-8'>
                <div className='text-center'>
                    <p className='text-neutral-400 text-sm'>
                        © {currentYear} Yavish Sahrawat. All rights reserved.
                    </p>
                </div>
            </div>
        </motion.footer>
    )
}

export default Footer