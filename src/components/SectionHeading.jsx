/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'

const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 28 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-80px' }}
      className="mx-auto mb-12 max-w-3xl text-center">
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-neutral-300">{description}</p>}
      <div className="reveal-line mx-auto mt-6" />
    </motion.div>
  )
}

export default SectionHeading
