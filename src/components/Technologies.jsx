import { motion } from 'framer-motion'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { DiFirebase, DiJava, DiPython } from 'react-icons/di'
import { GrMysql } from 'react-icons/gr'
import { SiExpress, SiMongodb, SiPytorch, SiTensorflow } from 'react-icons/si'
import { SKILL_GROUPS } from '../constants'
import SectionHeading from './SectionHeading'

const icons = (duration) => ({
  initial: { y: -6 },
  animate: {
    y: [6, -6],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
})

const techStack = [
  { icon: <FaReact className="text-5xl text-cyan-300" />, label: 'React' },
  { icon: <FaNodeJs className="text-5xl text-emerald-400" />, label: 'Node.js' },
  { icon: <SiExpress className="text-5xl text-neutral-200" />, label: 'Express' },
  { icon: <SiMongodb className="text-5xl text-green-400" />, label: 'MongoDB' },
  { icon: <DiJava className="text-5xl text-red-300" />, label: 'Java' },
  { icon: <DiPython className="text-5xl text-sky-300" />, label: 'Python' },
  { icon: <GrMysql className="text-5xl text-cyan-200" />, label: 'MySQL' },
  { icon: <DiFirebase className="text-5xl text-amber-300" />, label: 'Firebase' },
  { icon: <SiPytorch className="text-5xl text-orange-300" />, label: 'PyTorch' },
  { icon: <SiTensorflow className="text-5xl text-amber-400" />, label: 'TensorFlow' },
]

const Technologies = () => {
  return (
    <section id="technologies" className="scroll-mt-28 border-b border-white/10 pb-24">
      <SectionHeading
        eyebrow="Toolbox"
        title="Technologies"
        description="A stack that covers interfaces, APIs, databases, cloud services, and applied ML."
      />
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.label}
            variants={icons(3 + (index % 3) * 0.4)}
            initial="initial"
            animate="animate"
            className="glass-card group flex min-h-32 flex-col items-center justify-center gap-3 rounded-lg p-4 transition hover:-translate-y-2 hover:border-cyan-300/40">
            {tech.icon}
            <span className="text-sm text-neutral-300 group-hover:text-white">{tech.label}</span>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className="glass-card rounded-lg p-5">
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-neutral-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Technologies
