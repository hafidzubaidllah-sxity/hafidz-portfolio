import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { HiX, HiZoomIn } from 'react-icons/hi'

const certs = [
  { title: 'MTCNA', issuer: 'MikroTik', year: '2024', emoji: '🔴', desc: 'MikroTik Certified Network Associate' },
  { title: 'GameLab Certificate', issuer: 'GameLab Indonesia', year: '2024', emoji: '🎮', desc: 'Digital Learning & Game Testing' },
  { title: 'Cisco Networking', issuer: 'Cisco', year: '2024', emoji: '🔵', desc: 'Cisco Networking Fundamentals' },
  { title: 'LKS ITNSA', issuer: 'Dinas Pendidikan', year: '2025', emoji: '🏆', desc: 'Juara 1 IT Network Systems Administration' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Certificates() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [selected, setSelected] = useState(null)

  return (
    <section id="certificates" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <p className="text-accent text-sm tracking-widest uppercase mb-2">Credentials</p>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-textMain">
              My <span className="text-gradient">Certificates</span>
            </h2>
            <div className="w-12 h-px bg-accent/40 mx-auto mt-4" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certs.map((cert) => (
              <motion.div
                key={cert.title}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => setSelected(cert)}
                className="glass rounded-2xl p-6 border border-accent/10 hover:border-accent/30 hover:shadow-[0_8px_32px_rgba(176,176,176,0.1)] transition-all duration-300 cursor-pointer group"
              >
                <div className="text-4xl mb-4">{cert.emoji}</div>
                <h3 className="font-poppins font-semibold text-textMain text-sm mb-1">{cert.title}</h3>
                <p className="text-accent/60 text-xs mb-3">{cert.issuer}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-accent/50 bg-accent/10 px-2 py-1 rounded">{cert.year}</span>
                  <HiZoomIn className="text-accent/30 group-hover:text-accent/70 transition-colors" size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass rounded-2xl p-10 max-w-sm w-full text-center border border-accent/20 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-accent/50 hover:text-textMain transition-colors"
              aria-label="Close"
            >
              <HiX size={20} />
            </button>
            <div className="text-6xl mb-4">{selected.emoji}</div>
            <h3 className="font-poppins font-bold text-textMain text-xl mb-2">{selected.title}</h3>
            <p className="text-accent/70 text-sm mb-1">{selected.issuer}</p>
            <p className="text-accent/50 text-xs mb-4">{selected.year}</p>
            <p className="text-accent/80 text-sm">{selected.desc}</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
