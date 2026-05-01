import { motion } from 'framer-motion'

const impactItems = [
  {
    value: '97.6%',
    label: 'Lane detection model',
    detail: 'U-Net lane segmentation work trained with TuSimple and CULane datasets.',
  },
  {
    value: '+15%',
    label: 'NLP model lift',
    detail: 'Hierarchical text classification improvement over baseline results.',
  },
  {
    value: '35%',
    label: 'Faster response time',
    detail: 'Performance bottleneck improvements during full-stack internship work.',
  },
  {
    value: 'RAG',
    label: 'Agentic AI systems',
    detail: 'LLM agents, vector databases, retrieval pipelines, and backend workflows.',
  },
]

const ImpactSnapshot = () => {
  return (
    <section className="scroll-mt-28 border-b border-white/10 py-12">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 28 }}
        transition={{ duration: 0.5 }}
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {impactItems.map((item) => (
          <article
            key={item.label}
            className="glass-card rounded-lg p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
            <p className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-pink-300 bg-clip-text text-3xl font-semibold text-transparent">
              {item.value}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-white">{item.label}</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-300">{item.detail}</p>
          </article>
        ))}
      </motion.div>
    </section>
  )
}

export default ImpactSnapshot
