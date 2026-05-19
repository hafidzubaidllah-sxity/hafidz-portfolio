import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiLocationMarker, HiAcademicCap, HiStar, HiMail } from 'react-icons/hi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle bg accent */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-accent/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <p className="text-accent/60 text-sm tracking-widest uppercase mb-2">Get to know me</p>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-textMain">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent mx-auto mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Main bio — wider */}
            <motion.div variants={fadeUp} className="md:col-span-3 flex flex-col gap-5">
              <div className="glass rounded-2xl p-8 border border-accent/10 hover:border-accent/20 transition-all duration-300">
                <p className="text-accent/80 text-sm md:text-base leading-relaxed mb-5">
                  Saya adalah freshgraduate SMK jurusan{' '}
                  <span className="text-textMain font-medium">Teknik Jaringan Komputer dan Telekomunikasi</span>{' '}
                  yang memiliki ketertarikan pada networking, IT support, Linux administration,
                  dan pengembangan teknologi digital.
                </p>
                <p className="text-accent/70 text-sm md:text-base leading-relaxed">
                  Terbiasa menggunakan{' '}
                  <span className="text-textMain font-medium">AI</span>{' '}
                  untuk membantu troubleshooting, dokumentasi teknis,
                  workflow optimization, dan problem solving secara efisien dan modern.
                </p>
              </div>

              {/* Quote */}
              <div className="glass rounded-2xl p-6 border border-accent/10 relative overflow-hidden">
                <div className="absolute top-4 left-5 text-5xl text-accent/10 font-serif leading-none select-none">"</div>
                <p className="text-accent/60 text-sm italic leading-relaxed pl-6 relative z-10">
                  Dedikasi dan keterampilan saya akan membuat saya berkontribusi secara positif
                  sebagai Junior IT Support.
                </p>
              </div>
            </motion.div>

            {/* Info cards — narrower */}
            <motion.div variants={fadeUp} className="md:col-span-2 flex flex-col gap-3">
              {[
                { icon: <HiLocationMarker size={18} />, label: 'Location', value: 'Magelang, Central Java' },
                { icon: <HiAcademicCap size={18} />, label: 'Education', value: 'SMKIT Ihsanul Fikri · TJKT' },
                { icon: <HiStar size={18} />, label: 'Achievement', value: 'Juara 1 LKS ITNSA 2025' },
                { icon: <HiMail size={18} />, label: 'Email', value: 'hapisubed@gmail.com' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 5 }}
                  className="glass rounded-xl p-4 flex items-center gap-4 border border-accent/10 hover:border-accent/25 transition-all duration-300"
                >
                  <div className="text-accent p-2 bg-accent/10 rounded-lg flex-shrink-0">{item.icon}</div>
                  <div className="min-w-0">
                    <p className="text-accent/40 text-[10px] uppercase tracking-wider">{item.label}</p>
                    <p className="text-textMain text-sm font-medium truncate">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
