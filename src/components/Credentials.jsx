import { motion } from 'framer-motion'
import { CERTIFICATIONS, EDUCATION } from '../constants'
import SectionHeading from './SectionHeading'

const Credentials = () => {
  return (
    <section id="credentials" className="scroll-mt-28 border-b border-white/10 pb-24">
      <SectionHeading
        eyebrow="Credentials"
        title="Education & Certifications"
        description="Academic foundation and current certification work supporting my ML, cloud, and software engineering focus."
      />
      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <motion.article
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-lg p-6">
          <p className="section-kicker">Education</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{EDUCATION.degree}</h3>
          <p className="mt-2 text-cyan-200">{EDUCATION.school}</p>
          <p className="mt-1 text-sm text-neutral-400">{EDUCATION.duration}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {EDUCATION.coursework.map((course) => (
              <span key={course} className="rounded-full bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
                {course}
              </span>
            ))}
          </div>
        </motion.article>
        <motion.article
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card rounded-lg p-6">
          <p className="section-kicker">Certification</p>
          {CERTIFICATIONS.map((certification) => (
            <div key={certification} className="mt-4 rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <p className="text-lg font-semibold text-white">{certification}</p>
            </div>
          ))}
        </motion.article>
      </div>
    </section>
  )
}

export default Credentials
