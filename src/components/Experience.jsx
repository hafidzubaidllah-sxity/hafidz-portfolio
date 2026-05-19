import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiBriefcase } from 'react-icons/hi'

const experiences = [
  {
    company: 'GameLab Indonesia',
    role: 'Student Internship — Game Tester & Digital Learning Participant',
    period: '2026',
    type: 'PKL',
    points: [
      'Melakukan pengujian dan evaluasi pada project pembelajaran digital',
      'Memahami alur pengembangan project berbasis teknologi dan multimedia',
      'Mengembangkan kemampuan problem solving, teamwork, dan komunikasi dalam lingkungan kerja digital',
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <p className="text-accent text-sm tracking-widest uppercase mb-2">My journey</p>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-textMain">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-12 h-px bg-accent/40 mx-auto mt-4" />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-accent/20 -translate-x-1/2" />

            <div className="flex flex-col gap-12">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-primary z-10 mt-2" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />

                  {/* Card */}
                  <div className="flex-1 ml-14 md:ml-0">
                    <div className="glass rounded-2xl p-6 border border-accent/10 hover:border-accent/30 transition-all duration-300">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <span className="text-xs text-accent/60 uppercase tracking-wider font-medium bg-accent/10 px-2 py-1 rounded">
                            {exp.type}
                          </span>
                          <h3 className="font-poppins font-semibold text-textMain text-base mt-2">
                            {exp.company}
                          </h3>
                          <p className="text-accent/80 text-sm">{exp.role}</p>
                        </div>
                        <div className="flex items-center gap-1 text-accent/60 text-xs">
                          <HiBriefcase size={14} />
                          {exp.period}
                        </div>
                      </div>
                      <ul className="flex flex-col gap-1 mt-3">
                        {exp.points.map((pt, j) => (
                          <li key={j} className="flex items-start gap-2 text-accent/70 text-sm">
                            <span className="text-accent mt-1">›</span>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
