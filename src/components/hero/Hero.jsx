import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaRocket, FaCode, FaCloud } from 'react-icons/fa';
import { HiArrowDown, HiSparkles } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        
        {/* Floating Code Elements */}
        <motion.div
          className="absolute top-20 left-20 text-blue-400 opacity-30"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <FaCode className="w-8 h-8" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-32 text-purple-400 opacity-30"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          <FaCloud className="w-6 h-6" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-32 text-pink-400 opacity-30"
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        >
          <FaRocket className="w-7 h-7" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-8"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Available for new opportunities
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">Jackson Mwakano</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
                Macharia
              </span>
            </h1>
          </motion.div>

          {/* Professional Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300 mb-4"
          >
            <span className="text-blue-400">Full-Stack Engineer</span> building cloud-native SaaS platforms
          </motion.div>

          {/* Dynamic Type Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl sm:text-2xl font-medium text-gray-400 mb-6 h-12 flex items-center justify-center"
          >
            <TypeAnimation
              sequence={[
                'React • TypeScript • Next.js • Supabase • CI/CD',
                3000,
                'Multi-tenant Architecture • Real-time Systems • Cloud-Native',
                3000,
                'AI-Assisted Development • Performance Optimization • Security',
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-purple-400"
            />
          </motion.div>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-8"
          >
            <p className="text-lg sm:text-xl text-gray-300 mb-4 leading-relaxed">
              Currently leading <span className="text-blue-400 font-semibold">Nelimac Learning</span> (ed-tech SaaS), 
              previously built <span className="text-purple-400 font-semibold">Trainswise-AI</span> and 
              <span className="text-pink-400 font-semibold"> Job Connect</span> serving 15,000+ users globally.
            </p>
            <p className="text-base text-gray-400 mb-6">
              I specialize in <span className="text-green-400 font-semibold">TypeScript, React, and CI/CD automation</span>. 
              My backend experience translates seamlessly to .NET ecosystems, and I leverage AI tools responsibly to ship faster.
            </p>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto"
          >
            {[
              { number: "15K+", label: "Users Served", icon: "👥" },
              { number: "60%", label: "Faster Deployments", icon: "⚡" },
              { number: "6+", label: "Production Apps", icon: "🚀" },
              { number: "3+", label: "Years Experience", icon: "💼" }
            ].map((metric, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                <div className="text-2xl mb-1">{metric.icon}</div>
                <div className="text-2xl font-bold text-white">{metric.number}</div>
                <div className="text-sm text-gray-300">{metric.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
            >
              <HiSparkles className="w-5 h-5 group-hover:animate-pulse" />
              Hire Me / Contact
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              download="Jackson_Macharia_Resume.pdf"
              className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <FaDownload className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center gap-6 mb-12"
          >
            <a
              href="https://github.com/Mash24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20"
              title="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/jackson-macharia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20"
              title="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:jackmwakano@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20"
              title="Email"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <HiArrowDown className="w-6 h-6 text-gray-400 animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
