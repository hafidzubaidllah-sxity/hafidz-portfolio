import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Achievement() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/20 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div
            className="relative glass-strong rounded-3xl p-10 md:p-16 text-center overflow-hidden border border-accent/20"
            style={{
              boxShadow: '0 0 80px rgba(176,176,176,0.06), 0 0 160px rgba(176,176,176,0.03)',
            }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-accent/20 rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-accent/20 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-accent/20 rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-accent/20 rounded-br-3xl" />

            {/* Shimmer overlay */}
            <div className="absolute inset-0 shimmer rounded-3xl pointer-events-none" />

            {/* Trophy */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-7xl mb-6 relative z-10 inline-block"
            >
              🏆
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-accent/50 text-xs tracking-[0.3em] uppercase mb-4 relative z-10"
            >
              Top Achievement
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-poppins font-bold text-4xl md:text-6xl text-gradient glow-text mb-4 relative z-10"
            >
              Juara 1
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="text-textMain text-lg md:text-2xl font-semibold mb-2 relative z-10"
            >
              IT Network Systems Administration
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="text-accent/60 text-sm md:text-base relative z-10"
            >
              Lomba Kompetensi Siswa (LKS) SMK · Kabupaten Magelang 2025
            </motion.p>

            {/* Divider */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mx-auto my-6 relative z-10" />

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="text-accent/40 text-xs tracking-widest uppercase relative z-10"
            >
              MKKS SMK Kabupaten Magelang
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
