import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
} from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';
import {
  HERO_STATS,
  HERO_TYPE_SEQUENCE,
  HERO_TERMINAL,
} from '../../data/hero';
import ProfileAvatar from '../ui/ProfileAvatar';

const fadeUp = (delay = 0, reduced = false) =>
  reduced
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
      };

const terminalLineColor = {
  command: 'text-emerald-400',
  success: 'text-blue-300',
  info: 'text-purple-300',
  muted: 'text-gray-500',
};

const Hero = () => {
  const reducedMotion = useReducedMotion();
  const [typedLines, setTypedLines] = useState(0);

  useEffect(() => {
    if (reducedMotion) {
      setTypedLines(HERO_TERMINAL.length);
      return;
    }

    const timers = HERO_TERMINAL.map((_, i) =>
      setTimeout(() => setTypedLines((n) => Math.max(n, i + 1)), 600 + i * 450),
    );

    return () => timers.forEach(clearTimeout);
  }, [reducedMotion]);

  return (
    <section
      id="home-section"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#070b14]"
      aria-label="Introduction"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0f1423] to-[#1a1033]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-blue-600/20 blur-[100px] motion-safe:animate-blob" />
        <div className="absolute -bottom-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-purple-600/20 blur-[100px] motion-safe:animate-blob motion-safe:animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[80px] motion-safe:animate-blob motion-safe:animation-delay-4000" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <motion.div
              {...fadeUp(0, reducedMotion)}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to full-time &amp; contract roles
            </motion.div>

            <motion.div {...fadeUp(0.08, reducedMotion)}>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400/90 mb-3">
                Full-Stack Engineer
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.05]">
                Jackson{' '}
                <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Macharia
                </span>
              </h1>
            </motion.div>

            <motion.p
              {...fadeUp(0.16, reducedMotion)}
              className="mt-5 text-lg sm:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              I build cloud-native SaaS platforms that scale — from architecture
              and TypeScript frontends to CI/CD pipelines that ship with confidence.
            </motion.p>

            <motion.div
              {...fadeUp(0.22, reducedMotion)}
              className="mt-4 h-8 sm:h-9 flex items-center justify-center lg:justify-start text-base sm:text-lg font-medium text-violet-300/90"
            >
              <TypeAnimation
                sequence={HERO_TYPE_SEQUENCE}
                wrapper="span"
                speed={45}
                repeat={Infinity}
                className="inline-block"
              />
            </motion.div>

            <motion.p
              {...fadeUp(0.28, reducedMotion)}
              className="mt-6 text-sm sm:text-base text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Leading{' '}
              <span className="text-blue-400 font-medium">Nelimac Learning</span>
              {' · '}Previously{' '}
              <span className="text-violet-400 font-medium">Trainswise-AI</span>
              {' & '}
              <span className="text-fuchsia-400 font-medium">Job Connect</span>
              {' — '}15,000+ users worldwide.
            </motion.p>

            {/* Inline stats — quick scan; detailed stats live in CounterSection */}
            <motion.div
              {...fadeUp(0.34, reducedMotion)}
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3"
            >
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 backdrop-blur-sm"
                >
                  <div className="text-lg font-bold text-white leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.4, reducedMotion)}
              className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3"
            >
              <a
                href="#contact-section"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:from-blue-500 hover:to-violet-500 hover:shadow-blue-500/30 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
              >
                Start a Conversation
                <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0" />
              </a>
              <a
                href="#projects-section"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
              >
                View Projects
              </a>
              <Link
                to="/resume"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-7 py-3.5 text-sm font-semibold text-gray-300 transition hover:border-white/25 hover:text-white"
              >
                <FaDownload className="h-3.5 w-3.5" />
                Resume
              </Link>
            </motion.div>

            {/* Social */}
            <motion.div
              {...fadeUp(0.46, reducedMotion)}
              className="mt-8 flex justify-center lg:justify-start gap-3"
            >
              {[
                { href: 'https://github.com/Mash24', label: 'GitHub', Icon: FaGithub },
                { href: 'https://www.linkedin.com/in/jackson-macharia/', label: 'LinkedIn', Icon: FaLinkedin },
                { href: 'mailto:jackmwakano@gmail.com', label: 'Email', Icon: FaEnvelope },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Terminal + profile visual */}
          <motion.div
            {...fadeUp(0.2, reducedMotion)}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-fuchsia-500/20 blur-2xl" aria-hidden="true" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117]/90 shadow-2xl shadow-black/40 backdrop-blur-xl">
              {/* Terminal header */}
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-medium text-gray-500">
                  jackson@portfolio ~ deploy
                </span>
              </div>

              {/* Terminal body */}
              <div className="space-y-2 p-5 font-mono text-xs sm:text-sm min-h-[200px]">
                {HERO_TERMINAL.slice(0, typedLines).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={reducedMotion ? false : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={terminalLineColor[line.type]}
                  >
                    {line.text}
                  </motion.div>
                ))}
                {typedLines < HERO_TERMINAL.length && (
                  <span className="inline-block h-4 w-2 animate-pulse bg-emerald-400/80 motion-reduce:animate-none" />
                )}
              </div>

              {/* Stack chips */}
              <div className="flex flex-wrap gap-2 border-t border-white/10 px-5 py-4">
                {['React', 'TypeScript', 'Next.js', 'Supabase', 'Docker', 'GitHub Actions'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-gray-400"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Profile card */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="absolute -bottom-6 -left-4 sm:-left-8 flex items-center gap-3 rounded-xl border border-white/10 bg-[#0d1117]/95 px-4 py-3 shadow-xl backdrop-blur-md"
            >
              <ProfileAvatar
                src="/images/about_1-3.jpg"
                alt="Jackson Macharia"
                className="h-12 w-12 rounded-lg object-cover ring-2 ring-blue-500/40"
                initials="JM"
              />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white truncate">Jackson Macharia</p>
                <p className="text-xs text-gray-400">Chiang Mai, Thailand · Remote</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about-section"
        {...fadeUp(0.6, reducedMotion)}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 transition hover:text-gray-300 motion-reduce:hidden"
        aria-label="Scroll to about section"
      >
        <span className="text-[10px] uppercase tracking-widest">Explore</span>
        <HiArrowDown className="h-5 w-5 motion-safe:animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;
