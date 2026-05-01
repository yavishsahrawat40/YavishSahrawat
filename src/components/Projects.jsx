import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { PROJECTS } from '../constants'
import SectionHeading from './SectionHeading'

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28 border-b border-white/10 pb-24">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects"
        description="A clearer view of what each build does, where I contributed, and which stack powered it."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <article key={project.title} className="project-card glass-card group overflow-hidden rounded-lg transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="relative h-56 overflow-hidden bg-slate-950">
              {project.image ? (
                <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.16),transparent_32%),linear-gradient(135deg,#020617,#0f172a)] p-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`project-image max-h-full max-w-full rounded-md transition duration-700 ${
                      project.imageFit === 'contain'
                        ? 'object-contain shadow-2xl shadow-slate-950/40'
                        : 'h-full w-full object-cover'
                    }`}
                  />
                </div>
              ) : (
                <div className="project-image flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.34),transparent_32%),radial-gradient(circle_at_75%_35%,rgba(244,114,182,0.28),transparent_30%),linear-gradient(135deg,#020617,#0f172a)] transition duration-700">
                  <div className="rounded-lg border border-white/10 bg-black/30 px-6 py-4 text-center backdrop-blur">
                    <p className="text-sm uppercase tracking-[0.24em] text-cyan-100">{project.visualTag}</p>
                    <p className="mt-2 text-3xl font-semibold text-white">{project.visualMark}</p>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100 backdrop-blur">
                Build {String(index + 1).padStart(2, '0')}
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="p-6">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-cyan-200/80">{project.role}</p>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                </div>
              </div>
              <p className="mb-5 leading-7 text-neutral-300">{project.description}</p>
              <ul className="mb-5 space-y-2">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-6 text-neutral-300">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full bg-emerald-300/10 px-3 py-1 text-sm font-medium text-emerald-100">
                    {tech}
                  </span>
                ))}
              </div>
              {(project.githubUrl || project.liveUrl) && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:text-cyan-200">
                      <FaGithub />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
