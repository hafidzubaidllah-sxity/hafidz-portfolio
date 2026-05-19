import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { HiDownload, HiMail, HiArrowRight } from 'react-icons/hi'
import Particles from './Particles'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden noise-bg"
    >
      <Particles />

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-accent/4 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/2 rounded-full blur-[150px]" />
      </div>

      {/* Scan line */}
      <div className="scan-line" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-1 text-center md:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-accent/80 text-xs tracking-widest uppercase font-medium">
                Available for Internship
              </span>
            </motion.div>

            <h1 className="font-poppins font-bold text-5xl md:text-7xl text-textMain leading-[1.05] mb-5">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="block"
              >
                Hafidz
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="block text-gradient glow-text"
              >
                Ubaidillah
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3 justify-center md:justify-start mb-6"
            >
              <div className="h-px w-8 bg-accent/40" />
              <span className="text-accent text-base md:text-lg font-medium">
                <TypeAnimation
                  sequence={[
                    'Junior IT Support',
                    2000,
                    'Network Enthusiast',
                    2000,
                    'AI-assisted Problem Solver',
                    2000,
                    'Linux Administrator',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
              <div className="h-px w-8 bg-accent/40" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-accent/60 text-sm md:text-base leading-relaxed max-w-lg mb-10"
            >
              Freshgraduate Teknik Jaringan Komputer dan Telekomunikasi dengan minat pada
              networking, system administration, dan teknologi digital modern.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a
                href="/Hafidz_Ubaidillah_CV.pdf"
                download="Hafidz_Ubaidillah_CV.pdf"
                className="group flex items-center gap-2 px-6 py-3 glass border border-accent/20 text-textMain text-sm font-medium rounded-xl hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
              >
                <HiDownload size={17} />
                Download CV
              </a>
              <a
                href="#contact"
                className="group flex items-center gap-2 px-6 py-3 bg-textMain text-primary text-sm font-semibold rounded-xl hover:bg-hover transition-all duration-300"
              >
                Contact Me
                <HiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-8 mt-12 justify-center md:justify-start"
            >
              {[
                { value: '1st', label: 'LKS ITNSA 2025' },
                { value: '3+', label: 'Projects' },
                { value: '2+', label: 'Internships' },
              ].map((s) => (
                <div key={s.label} className="text-center md:text-left">
                  <div className="font-poppins font-bold text-2xl text-textMain">{s.value}</div>
                  <div className="text-accent/50 text-xs">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Profile Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-shrink-0 relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full glow-pulse opacity-60" />

              {/* Rotating dashed rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-accent/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-6 rounded-full border border-dashed border-accent/15"
              />

              {/* Orbit dots */}
              {[0, 90, 180, 270].map((deg, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0"
                  style={{ transformOrigin: 'center' }}
                >
                  <div
                    className="absolute w-2 h-2 rounded-full bg-accent/40"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${deg}deg) translateX(${128}px) translate(-50%, -50%)`,
                    }}
                  />
                </motion.div>
              ))}

              {/* Profile circle */}
              <div className="absolute inset-10 rounded-full glass-strong glow-border flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-secondary via-primary to-black flex items-center justify-center">
                  <span className="text-6xl md:text-7xl font-bold text-gradient font-poppins select-none">
                    H
                  </span>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 top-8 glass rounded-xl px-3 py-2 border border-accent/20 text-xs font-medium text-textMain whitespace-nowrap"
              >
                🏆 LKS Juara 1
              </motion.div>
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-4 bottom-12 glass rounded-xl px-3 py-2 border border-accent/20 text-xs font-medium text-textMain whitespace-nowrap"
              >
                🌐 MikroTik · Cisco
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-accent/30 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-accent/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
