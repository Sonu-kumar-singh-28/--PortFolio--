import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaAndroid,
} from "react-icons/fa";

import profile from "../../assets/sonu.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute top-[-250px] right-[-250px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-250px] left-[-250px] w-[500px] h-[500px] bg-sky-500/10 blur-[140px] rounded-full" />

      <div className="container-custom pt-36 pb-20 grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass mb-8">
            <FaAndroid className="text-green-400 text-lg" />
            <span className="text-sm text-slate-300 tracking-wide">
              Native Android Developer
            </span>
          </div>

          {/* NAME */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight font-['Space_Grotesk']">
            Sonu Kumar
            <br />
            <span className="gradient-text">Singh</span>
          </h1>

          {/* TITLE */}
          <h2 className="mt-8 text-2xl md:text-3xl font-semibold text-white leading-relaxed">
            Android Application Developer
            <br />
            & Full Stack Developer
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 text-slate-400 text-lg leading-relaxed max-w-2xl">
            Passionate Full Stack Android Developer focused on
            building scalable mobile applications with modern
            architecture, clean interfaces, and robust backend systems.

            Delivering premium digital experiences with
            performance, maintainability, and production-ready solutions.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5">
            <button className="premium-btn px-8 py-4 rounded-2xl text-white font-semibold flex items-center justify-center gap-3">
              View Projects
              <FaArrowRight />
            </button>

            <button className="glass px-8 py-4 rounded-2xl hover:border-blue-400 transition-all duration-300">
              Download Resume
            </button>
          </div>

          {/* SOCIAL */}
          <div className="mt-12 flex items-center gap-5">
            <a
              href="https://github.com/Sonu-kumar-singh-28"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-xl hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-xl hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* STATS */}
          <div className="mt-16 grid grid-cols-3 gap-10">
            {[
              { number: "20+", label: "Projects Built" },
              { number: "240+", label: "Days Consistency" },
              { number: "100%", label: "Modern Android" },
            ].map((item, index) => (
              <div key={index}>
                <h2 className="text-3xl md:text-4xl font-black text-white">
                  {item.number}
                </h2>
                <p className="text-slate-500 mt-2 text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute w-[420px] h-[420px] bg-blue-500/10 blur-[120px] rounded-full" />

          <div className="relative w-[350px] h-[540px] glass rounded-[40px] overflow-hidden border border-white/10 glow floating">

            <div className="absolute top-0 left-0 w-full h-16 bg-white/5 border-b border-white/10 flex items-center justify-center">
              <div className="w-24 h-2 rounded-full bg-white/20" />
            </div>

            <div className="pt-24 flex flex-col items-center px-8 text-center">

              {/* IMAGE */}
              <div className="relative w-48 h-48 rounded-full border-4 border-white/10 bg-white/5 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-500/20 blur-[40px]" />

                <img
                  src={profile}
                  alt="Profile"
                  className="relative w-full h-full object-contain"
                />
              </div>

              {/* CLEAN CONTENT */}
              <h2 className="mt-10 text-3xl font-black gradient-text">
                Building Digital Experiences
              </h2>

              <p className="mt-4 text-blue-400 font-medium">
                Modern • Scalable • Production Ready
              </p>

              <p className="mt-6 text-slate-400 leading-relaxed">
                Focused on delivering high-quality
                mobile applications with seamless
                performance, elegant interfaces,
                and modern architecture.
              </p>

              {/* TECH STACK */}
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {[
                  "Kotlin",
                  "Compose",
                  "MVVM",
                  "Firebase",
                  "Node.js",
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300"
                  >
                    {tech}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;