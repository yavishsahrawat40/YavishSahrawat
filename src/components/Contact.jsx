import { motion } from 'framer-motion'
import { BiPhoneCall } from 'react-icons/bi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GiEnvelope } from 'react-icons/gi'
import { CONTACT } from '../constants'
import SectionHeading from './SectionHeading'

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-28 border-b border-white/10 pb-24">
      <SectionHeading
        eyebrow="Next step"
        title="Contact Me"
        description="The fastest paths to reach me, review my work, or download the resume."
      />
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="glass-card mx-auto max-w-3xl rounded-lg p-8 text-center">
        <p className="mx-auto max-w-2xl text-lg leading-8 text-neutral-300">
          I am open to internships, full-stack roles, and projects where thoughtful UI meets reliable engineering.
        </p>
        <p className="my-4 flex items-center justify-center gap-2 text-neutral-300">
          <BiPhoneCall className="text-xl" />
          {CONTACT.phoneNo}
        </p>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="my-4 flex items-center justify-center gap-2 text-neutral-300 transition-colors duration-300 hover:text-cyan-300">
          <GiEnvelope className="text-xl" />
          {CONTACT.email}
        </a>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="https://drive.google.com/file/d/1OZ4HgsdGGp0Cvws3-40gQGljrSVn7GzI/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
            Resume
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:text-cyan-200">
            <GiEnvelope />
            Email
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:text-cyan-200">
            <FaGithub />
            GitHub
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:text-cyan-200">
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
