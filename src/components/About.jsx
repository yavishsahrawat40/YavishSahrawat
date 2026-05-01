import { motion } from 'framer-motion'
import aboutMe from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
import SectionHeading from './SectionHeading'

const About = () => {
  return (
    <section id="about" className="scroll-mt-28 py-16">
      <SectionHeading
        eyebrow="Profile"
        title="About Me"
        description="A quick look at how I think, build, and keep learning across web, cloud, and AI."
      />
      <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
        <div className="flex justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            initial={{ opacity: 0, x: -100, rotate: -4 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-lg border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-slate-950/30 backdrop-blur">
            <img
              className="h-80 w-80 rounded-md object-cover"
              src={aboutMe}
              alt="Yavish Sahrawat"
            />
            <div className="absolute bottom-6 left-6 rounded-full border border-white/10 bg-slate-950/90 px-4 py-2 text-sm font-medium text-cyan-100 shadow-xl">
              MERN + AI/ML
            </div>
          </motion.div>
        </div>
        <div className="glass-card rounded-lg p-6">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="whitespace-pre-line text-base leading-8 text-neutral-300">
            {ABOUT_TEXT}
          </motion.p>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex justify-center lg:justify-start">
            <a
              href="https://drive.google.com/file/d/1OZ4HgsdGGp0Cvws3-40gQGljrSVn7GzI/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-950/30">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
