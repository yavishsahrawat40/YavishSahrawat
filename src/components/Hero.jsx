import { lazy, Suspense, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HERO_CONTENT } from '../constants'

const HeroScene = lazy(() => import('./HeroScene'))

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
})

const Hero = () => {
  const titles = ['Data Scientist', 'Machine Learning Engineer', 'Full Stack Developer']
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [titles.length])

  return (
    <section className="border-b border-white/10 pb-20 pt-4 lg:min-h-[calc(100vh-8rem)] lg:pb-28">
      <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.span
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="mb-5 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-cyan-100">
              Full Stack Developer
            </motion.span>
            <motion.h1
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="max-w-4xl text-5xl font-semibold leading-tight tracking-normal text-white sm:text-6xl lg:text-7xl">
              Yavish Sahrawat
            </motion.h1>
            <div className="mt-6 flex min-h-14 items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTitleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-pink-300 bg-clip-text text-3xl font-medium tracking-normal text-transparent sm:text-4xl lg:text-5xl">
                  {titles[currentTitleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
            <motion.p
              variants={container(2)}
              initial="hidden"
              animate="visible"
              className="max-w-2xl py-6 text-base leading-8 text-neutral-300 sm:text-lg">
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              variants={container(2.3)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="#projects"
                className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-950/40 transition hover:bg-cyan-200">
                View Projects
              </a>
              <a
                href="https://drive.google.com/file/d/1OZ4HgsdGGp0Cvws3-40gQGljrSVn7GzI/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/70 hover:text-emerald-200">
                Resume
              </a>
            </motion.div>
            <motion.div
              variants={container(2.55)}
              initial="hidden"
              animate="visible"
              className="mt-8 grid w-full max-w-xl grid-cols-3 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] text-center shadow-2xl shadow-slate-950/20 backdrop-blur">
              {['APIs', 'Dashboards', 'ML Models'].map((item) => (
                <div key={item} className="border-r border-white/10 px-3 py-4 last:border-r-0">
                  <p className="text-sm font-semibold text-white">{item}</p>
                  <p className="mt-1 text-xs text-neutral-400">built end-to-end</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}>
            <Suspense fallback={<div className="h-[360px] rounded-lg border border-white/10 bg-white/5 md:h-[460px] lg:h-[540px]" />}>
              <HeroScene />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
