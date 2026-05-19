import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SiGithub } from 'react-icons/si'
import { HiArrowRight } from 'react-icons/hi'

const projects = [
  {
    title: 'Proyek Kelas Git Source Control',
    description:
      'Proyek PKL bersama tim untuk merancang sistem informasi sekolah menggunakan Git sebagai pengelolaan source code, mendukung kerja tim secara terstruktur, terorganisir, dan terdokumentasi.',
    tech: ['Git', 'GitHub', 'Source Control', 'Team Collaboration'],
    emoji: '🗂️',
    github: 'https://github.com/hafidzubaidllah-sxity',
    featured: false,
  },
  {
    title: 'Bot Telegram UMKM S&A Online Shop',
    description:
      'Sistem otomatisasi pelayanan pelanggan untuk UMKM via Telegram — menangani pemesanan produk, pengelolaan stok, dan customer service otomatis 24 jam.',
    tech: ['Python', 'Telegram Bot API', 'SQLite'],
    emoji: '🛒',
    github: 'https://github.com/hafidzubaidllah-sxity',
    featured: false,
  },
  {
    title: 'Bot Telegram AI-Powered (Groq AI)',
    description:
      'Pengembangan lanjutan Bot Telegram dengan integrasi Groq AI agar chatbot mampu memberikan respons cerdas dan kontekstual. Diimplementasikan dengan konsep DevOps — logging, monitoring, dan deployment cloud via Railway.',
    tech: ['Python', 'Groq AI', 'Telegram Bot', 'Railway', 'DevOps'],
    emoji: '🤖',
    github: 'https://github.com/hafidzubaidllah-sxity',
    featured: true,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <p className="text-accent/60 text-sm tracking-widest uppercase mb-2">What I've built</p>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-textMain">
              My <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent mx-auto mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((proj) => (
              <motion.div
                key={proj.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className={`relative glass rounded-2xl p-6 border transition-all duration-300 flex flex-col group
                  ${proj.featured
                    ? 'border-accent/30 shadow-[0_0_40px_rgba(176,176,176,0.08)] md:col-span-1'
                    : 'border-accent/10 hover:border-accent/25'
                  }`}
              >
                {/* Featured badge */}
                {proj.featured && (
                  <div className="absolute -top-3 left-6">
                    <span className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-textMain text-primary">
                      Featured
                    </span>
                  </div>
                )}

                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                  <span className="text-4xl">{proj.emoji}</span>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass border border-accent/10 text-accent/40 hover:text-textMain hover:border-accent/30 transition-all duration-200"
                    aria-label={`GitHub - ${proj.title}`}
                  >
                    <SiGithub size={16} />
                  </a>
                </div>

                <h3 className="font-poppins font-semibold text-textMain text-base mb-3 leading-snug">
                  {proj.title}
                </h3>
                <p className="text-accent/60 text-sm leading-relaxed flex-1 mb-5">
                  {proj.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {proj.tech.map((t) => (
                    <span key={t} className="tag-pill">{t}</span>
                  ))}
                </div>

                {/* View link */}
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-accent/50 text-xs font-medium hover:text-textMain transition-colors group/link"
                >
                  View on GitHub
                  <HiArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
