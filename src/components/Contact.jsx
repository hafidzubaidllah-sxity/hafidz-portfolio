import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiMail, HiArrowRight } from 'react-icons/hi'
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'

const contacts = [
  {
    icon: <HiMail size={22} />,
    label: 'Email',
    value: 'hapisubed@gmail.com',
    href: 'mailto:hapisubed@gmail.com',
    desc: 'Drop me a message anytime',
  },
  {
    icon: <FaLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'hafidz-ubaidillah',
    href: 'https://www.linkedin.com/in/hafidz-ubaidillah-a8ba3731a',
    desc: 'Connect professionally',
  },
  {
    icon: <FaGithub size={20} />,
    label: 'GitHub',
    value: 'hafidzubaidllah-sxity',
    href: 'https://github.com/hafidzubaidllah-sxity',
    desc: 'Check out my code',
  },
  {
    icon: <FaWhatsapp size={20} />,
    label: 'WhatsApp',
    value: '+62 823 2308 4443',
    href: 'https://wa.me/6282323084443',
    desc: 'Chat directly with me',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/20 pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-accent/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <p className="text-accent/60 text-sm tracking-widest uppercase mb-2">Let's connect</p>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-textMain">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent mx-auto mt-4" />
          </motion.div>

          {/* CTA Banner */}
          <motion.div
            variants={fadeUp}
            className="glass-strong rounded-2xl p-8 border border-accent/15 text-center mb-10 relative overflow-hidden"
          >
            <div className="absolute inset-0 shimmer pointer-events-none rounded-2xl" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-accent/60 text-xs tracking-widest uppercase">Open to opportunities</span>
              </div>
              <p className="text-textMain font-poppins font-semibold text-xl md:text-2xl mb-2">
                Available for Internship & Collaboration
              </p>
              <p className="text-accent/50 text-sm">
                Magelang, Indonesia · Remote friendly
              </p>
            </div>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contacts.map((c) => (
              <motion.a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                whileHover={{ x: 4, scale: 1.01 }}
                className="glass rounded-2xl p-5 flex items-center gap-4 border border-accent/10 hover:border-accent/30 hover:shadow-[0_4px_30px_rgba(176,176,176,0.07)] transition-all duration-300 group"
              >
                <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  {c.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-accent/40 text-[10px] uppercase tracking-wider">{c.label}</p>
                  <p className="text-textMain text-sm font-medium truncate">{c.value}</p>
                  <p className="text-accent/40 text-xs">{c.desc}</p>
                </div>
                <HiArrowRight className="text-accent/20 group-hover:text-accent/60 group-hover:translate-x-1 transition-all flex-shrink-0" size={16} />
              </motion.a>
            ))}
          </div>

          {/* Footer */}
          <motion.div variants={fadeUp} className="text-center mt-14 pt-8 border-t border-accent/10">
            <p className="text-accent/30 text-sm">
              © 2025 <span className="text-accent/50">Hafidz Ubaidillah</span> · Built with React & Tailwind CSS
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
