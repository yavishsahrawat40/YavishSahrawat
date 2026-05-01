import { motion } from 'framer-motion'
import { EXPERIENCES } from '../constants'
import SectionHeading from './SectionHeading'

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-28 border-b border-white/10 pb-24">
      <SectionHeading
        eyebrow="Work"
        title="Experience"
        description="Hands-on team experience building full-stack features and integrating backend services."
      />
      <div className="space-y-6">
        {EXPERIENCES.map((experience) => (
          <article key={experience.company} className="glass-card grid gap-6 rounded-lg p-6 lg:grid-cols-[180px_1fr]">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="flex justify-center lg:justify-start">
              {experience.logo ? (
                <img
                  src={experience.logo}
                  width={150}
                  height={150}
                  alt={experience.company}
                  className="h-32 w-32 rounded-lg border border-white/10 object-cover"
                />
              ) : (
                <div className="flex h-32 w-32 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-2xl font-semibold text-cyan-100">
                  {experience.company}
                </div>
              )}
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="max-w-3xl">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-semibold">{experience.company}</h3>
                  <p className="text-cyan-200">{experience.role}</p>
                </div>
                <p className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300">{experience.year}</p>
              </div>
              <p className="mb-5 leading-7 text-neutral-300">{experience.description}</p>
              {experience.technologies.map((tech) => (
                <span key={tech} className="mb-2 mr-3 inline-flex rounded-full bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
                  {tech}
                </span>
              ))}
            </motion.div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
