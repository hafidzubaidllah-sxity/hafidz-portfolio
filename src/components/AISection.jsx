import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiLightningBolt, HiDocumentText, HiCog, HiSearch, HiChip } from 'react-icons/hi'

const aiFeatures = [
  {
    icon: <HiLightningBolt size={22} />,
    title: 'AI Troubleshooting',
    desc: 'Menggunakan AI untuk diagnosa dan solusi masalah jaringan secara cepat dan akurat.',
  },
  {
    icon: <HiDocumentText size={22} />,
    title: 'Technical Documentation',
    desc: 'Membuat dokumentasi teknis yang terstruktur dan komprehensif dengan bantuan AI.',
  },
  {
    icon: <HiCog size={22} />,
    title: 'Workflow Optimization',
    desc: 'Mengoptimalkan alur kerja IT support dan administrasi sistem menggunakan AI tools.',
  },
  {
    icon: <HiSearch size={22} />,
    title: 'Research & Analysis',
    desc: 'Riset teknologi terbaru dan analisis solusi teknis yang efisien dengan AI assistance.',
  },
  {
    icon: <HiChip size={22} />,
    title: 'Prompt Engineering',
    desc: 'Merancang prompt yang efektif untuk memaksimalkan output AI dalam konteks IT.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function AISection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Futuristic background */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <p className="text-accent text-sm tracking-widest uppercase mb-2">Modern workflow</p>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-textMain">
              AI-assisted <span className="text-gradient">Workflow</span>
            </h2>
            <div className="w-12 h-px bg-accent/40 mx-auto mt-4" />
            <p className="text-accent/70 text-sm md:text-base max-w-xl mx-auto mt-6 leading-relaxed">
              Memanfaatkan teknologi AI untuk membantu troubleshooting, dokumentasi teknis,
              optimasi workflow, research, dan meningkatkan efisiensi pengembangan project.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className={`glass rounded-2xl p-6 border border-accent/10 hover:border-accent/30 transition-all duration-300 ${
                  i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent">{feat.icon}</div>
                  <h3 className="font-poppins font-semibold text-textMain text-sm">{feat.title}</h3>
                </div>
                <p className="text-accent/70 text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
