import { motion } from 'framer-motion'
import heroImage from '../assets/himalaya-hero.jpg'

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe4Jp8bhxJ8XaTNfHgNSPmLsZtPoxrG44dmr5_exWk3Q4pL7Q/viewform?usp=sharing&ouid=102001572028308448187'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.95, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
})

export default function CinematicHero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      <div className="absolute inset-0 animate-slow-zoom will-change-transform">
        <img
          src={heroImage}
          alt="Real Himalayan dawn over the misty Ganges valley near Rishikesh"
          className="w-full h-full object-cover object-center"
          style={{
            filter: 'brightness(0.87) contrast(1.05) saturate(0.86)',
          }}
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.6) 100%)',
        }}
      />

      <div
        className="absolute inset-x-0 bottom-0 h-48"
        style={{
          background:
            'linear-gradient(to top, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 35%, transparent 100%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.p
          {...fadeUp(0.3)}
          className="text-xs md:text-sm tracking-[0.35em] uppercase text-white/60 font-sans font-light mb-6"
        >
          Rishikesh · Tapovan · 95 Souls
        </motion.p>

        <motion.h1
          {...fadeUp(0.6)}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-tight mb-4"
          style={{ textShadow: '0 2px 30px rgba(0,0,0,0.4)' }}
        >
          The Unfiltered Retreat
        </motion.h1>

        <motion.p
          {...fadeUp(0.9)}
          className="font-sans text-base md:text-lg text-white/75 font-light max-w-xl mb-3 tracking-wide"
        >
          A journey of people, perspectives, and places
        </motion.p>

        <motion.p
          {...fadeUp(1.2)}
          className="font-serif italic text-sm md:text-base text-white/55 mb-10"
        >
          The seat is empty. Are you coming?
        </motion.p>

        <motion.div
          {...fadeUp(1.5)}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-sans font-medium text-white text-sm md:text-base animate-pulse-soft transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, hsl(25 70% 48%), hsl(30 65% 55%))',
            }}
          >
            🔥 Book Your Seat
          </a>

          <a
            href="#video"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/25 text-white/80 font-sans text-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300"
          >
            ▶ Watch the Experience
          </a>
        </motion.div>
      </div>
    </section>
  )
}
