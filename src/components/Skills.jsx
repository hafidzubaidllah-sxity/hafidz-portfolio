import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiMikrotik, SiCisco, SiPython, SiJavascript, SiHtml5, SiMysql,
  SiLinux, SiVirtualbox, SiGithub, SiGit,
} from 'react-icons/si'
import { HiChip, HiCode, HiDesktopComputer, HiLightningBolt } from 'react-icons/hi'

const hardSkills = [
  { name: 'Cisco Packet Tracer', level: 100, icon: <SiCisco size={16} /> },
  { name: 'Administrasi Jaringan', level: 80 },
  { name: 'MikroTik Routing', level: 80, icon: <SiMikrotik size={16} /> },
  { name: 'IT Support', level: 80 },
  { name: 'VirtualBox', level: 80, icon: <SiVirtualbox size={16} /> },
  { name: 'Python', level: 60, icon: <SiPython size={16} /> },
  { name: 'Linux Administration', level: 60, icon: <SiLinux size={16} /> },
]

const softSkills = [
  { name: 'Tanggung Jawab', level: 100 },
  { name: 'Kerja Tim', level: 80 },
  { name: 'Problem Solving', level: 80 },
  { name: 'Komunikasi', level: 80 },
  { name: 'Manajemen Waktu', level: 80 },
  { name: 'Adaptasi', level: 80 },
]

const techStack = [
  { name: 'MikroTik', icon: <SiMikrotik size={22} />, cat: 'Networking' },
  { name: 'Cisco', icon: <SiCisco size={22} />, cat: 'Networking' },
  { name: 'Linux', icon: <SiLinux size={22} />, cat: 'System' },
  { name: 'Python', icon: <SiPython size={22} />, cat: 'Programming' },
  { name: 'HTML/CSS', icon: <SiHtml5 size={22} />, cat: 'Programming' },
  { name: 'JavaScript', icon: <SiJavascript size={22} />, cat: 'Programming' },
  { name: 'MySQL', icon: <SiMysql size={22} />, cat: 'Database' },
  { name: 'VirtualBox', icon: <SiVirtualbox size={22} />, cat: 'Tools' },
  { name: 'GitHub', icon: <SiGithub size={22} />, cat: 'Tools' },
  { name: 'Git', icon: <SiGit size={22} />, cat: 'Tools' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function SkillBar({ name, level, icon, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          {icon && <span className="text-accent/60">{icon}</span>}
          <span className="text-accent/80 text-xs font-medium">{name}</span>
        </div>
        <span className="text-accent/40 text-xs">{level}%</span>
      </div>
      <div className="h-1.5 bg-accent/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: delay, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full bg-gradient-to-r from-accent/60 to-accent/90"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <p className="text-accent/60 text-sm tracking-widest uppercase mb-2">What I work with</p>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-textMain">
              My <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent mx-auto mt-4" />
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div variants={fadeUp} className="mb-14">
            <p className="text-accent/40 text-xs tracking-widest uppercase text-center mb-6">Tech Stack</p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((t) => (
                <motion.div
                  key={t.name}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2.5 glass rounded-xl border border-accent/10 hover:border-accent/30 transition-all duration-200 cursor-default"
                >
                  <span className="text-accent/70">{t.icon}</span>
                  <span className="text-accent/80 text-xs font-medium">{t.name}</span>
                  <span className="text-accent/30 text-[10px]">{t.cat}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Progress Bars */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp} className="glass rounded-2xl p-7 border border-accent/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg text-accent"><HiChip size={18} /></div>
                <h3 className="font-poppins font-semibold text-textMain text-sm">Hard Skills</h3>
              </div>
              <div className="flex flex-col gap-4">
                {hardSkills.map((s, i) => (
                  <SkillBar key={s.name} {...s} delay={i * 0.08} />
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="glass rounded-2xl p-7 border border-accent/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg text-accent"><HiLightningBolt size={18} /></div>
                <h3 className="font-poppins font-semibold text-textMain text-sm">Soft Skills</h3>
              </div>
              <div className="flex flex-col gap-4">
                {softSkills.map((s, i) => (
                  <SkillBar key={s.name} {...s} delay={i * 0.08} />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
