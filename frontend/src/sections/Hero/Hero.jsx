import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaAndroid,
  FaInstagram,
} from "react-icons/fa";

import profile from "../../assets/sonu.png";

function Hero() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-40 lg:pt-48"
    >
      {/* BACKGROUND */}
      <div className="absolute top-[-250px] right-[-250px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-[-250px] left-[-250px] w-[500px] h-[500px] bg-sky-500/10 blur-[140px] rounded-full" />

      {/* MAIN */}
      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-20 items-center px-5 sm:px-0">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass mb-8 border border-white/10">
            <FaAndroid className="text-green-400 text-lg" />

            <span className="text-sm text-slate-300 tracking-wide">
              Native Android Developer
            </span>
          </div>

          {/* NAME */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.02] tracking-tight font-['Space_Grotesk'] text-white">
            Sonu Kumar
            <br />

            <span className="gradient-text">
              Singh
            </span>
          </h1>

          {/* TITLE */}
          <h2 className="mt-8 text-2xl md:text-3xl font-semibold text-white leading-relaxed">
            Full Stack Android Developer
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 text-slate-400 text-lg leading-relaxed max-w-2xl">
            Passionate Native Android Developer focused on building
            scalable mobile applications with modern architecture,
            clean interfaces, and robust backend systems.

            <br />
            <br />

            Delivering premium digital experiences with
            performance, maintainability, and production-ready solutions.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5">
            <button
              onClick={scrollToProjects}
              className="premium-btn px-8 py-4 rounded-2xl text-white font-semibold flex items-center justify-center gap-3"
            >
              View Projects

              <FaArrowRight />
            </button>

            <a
              href="/resume.pdf"
              download="Sonu_Kumar_Singh_Resume.pdf"
              className="glass px-8 py-4 rounded-2xl hover:border-blue-400 transition-all duration-300 text-center text-white"
            >
              Download Resume
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-12 flex items-center gap-5">

            {/* GITHUB */}
            <a
              href="https://github.com/Sonu-kumar-singh-28"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-xl text-white hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
            >
              <FaGithub />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/sonu-kumar-singh28/"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-xl text-white hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/kshatriya_sonu.rajputt_"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-xl text-white hover:border-pink-400 hover:text-pink-400 transition-all duration-300"
            >
              <FaInstagram />
            </a>
          </div>

          {/* STATS */}

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center mt-10 lg:mt-0"
        >
          {/* GLOW */}
          <div className="absolute w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-blue-500/10 blur-[120px] rounded-full" />

          {/* CARD */}
          <div className="relative w-full max-w-[340px] sm:max-w-[360px] min-h-[580px] glass rounded-[40px] overflow-hidden border border-white/10 glow floating">

            {/* TOP BAR */}
            <div className="absolute top-0 left-0 w-full h-16 bg-white/5 border-b border-white/10 flex items-center justify-center">
              <div className="w-24 h-2 rounded-full bg-white/20" />
            </div>

            {/* CONTENT */}
            <div className="pt-24 flex flex-col items-center px-6 sm:px-8 text-center pb-10">

              {/* PROFILE IMAGE */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full border-4 border-blue-400/20 overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.35)]">
                <img
                  src={profile}
                  alt="Sonu Kumar Singh"
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>

              {/* TEXT */}
              <h2 className="mt-8 text-3xl sm:text-4xl font-black leading-tight text-white">
                Building Digital
                <br />

                <span className="gradient-text">
                  Experiences
                </span>
              </h2>

              <p className="mt-4 text-blue-400 font-medium leading-relaxed text-sm sm:text-base">
                Modern • Scalable • Production Ready
              </p>

              <p className="mt-5 text-slate-400 leading-relaxed text-sm sm:text-base">
                Focused on delivering high-quality
                Android applications with seamless
                performance, premium UI, and
                scalable architecture.
              </p>

              {/* TECH STACK */}
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {[
                  "Jetpack Compose",
                  "MVVM",
                  "Firebase",
                  "REST API",
                  "Room DB",
                  "Clean Architecture",
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300 hover:border-blue-400 transition-all duration-300"
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