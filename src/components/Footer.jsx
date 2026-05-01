import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-16 border-t border-white/10 py-8">
      <div className="container mx-auto px-8">
        <div className="text-center">
          <p className="text-sm text-neutral-400">
            (c) {currentYear} Yavish Sahrawat. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
