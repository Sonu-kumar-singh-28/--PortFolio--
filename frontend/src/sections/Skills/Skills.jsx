import { motion } from "framer-motion";

import {
  SiKotlin,
  SiFirebase,
  SiGithub,
  SiJetpackcompose,
  SiAndroidstudio,
  SiMysql,
  SiGit,
} from "react-icons/si";

import {
  FaCode,
  FaDatabase,
  FaLayerGroup,
  FaMobileAlt,
  FaServer,
  FaBug,
} from "react-icons/fa";

function Skills() {

  const skills = [

    {
      name: "Kotlin",
      icon: <SiKotlin />,
      desc:
        "Building scalable Android applications using Kotlin with clean syntax, modern architecture, optimized performance, and production-level development standards.",
    },

    {
      name: "Jetpack Compose",
      icon: <SiJetpackcompose />,
      desc:
        "Creating responsive Android UI with declarative components, animations, reusable layouts, modern state handling, and premium mobile experiences.",
    },

    {
      name: "MVVM Architecture",
      icon: <FaLayerGroup />,
      desc:
        "Designing maintainable Android applications using ViewModel, Repository pattern, clean separation of concerns, and scalable architecture structure.",
    },

    {
      name: "Clean Architecture",
      icon: <FaLayerGroup />,
      desc:
        "Building modular Android systems with domain separation, reusable components, scalable code structure, and enterprise-level maintainability.",
    },

    {
      name: "Firebase",
      icon: <SiFirebase />,
      desc:
        "Integrating authentication, Firestore, realtime database, cloud messaging, analytics, and backend services for scalable Android applications.",
    },

    {
      name: "REST API",
      icon: <FaServer />,
      desc:
        "Developing secure networking systems using Retrofit, API integration, JSON parsing, backend communication, and scalable mobile architecture.",
    },

    {
      name: "Coroutines & Flow",
      icon: <FaCode />,
      desc:
        "Handling asynchronous tasks, background processing, reactive data streams, and lifecycle-aware state management for smooth Android performance.",
    },

    {
      name: "Room Database",
      icon: <FaDatabase />,
      desc:
        "Managing offline-first Android applications with local persistence, optimized database queries, caching systems, and structured data management.",
    },

    {
      name: "Dependency Injection",
      icon: <FaLayerGroup />,
      desc:
        "Using Dagger Hilt for scalable dependency management, modular architecture, lifecycle-aware components, and clean Android development workflow.",
    },

    {
      name: "Android Studio",
      icon: <SiAndroidstudio />,
      desc:
        "Professional Android development environment handling debugging, profiling, Gradle optimization, emulator testing, and production deployment workflows.",
    },

    {
      name: "Git & GitHub",
      icon: <SiGithub />,
      desc:
        "Managing version control, collaborative development, repository management, CI workflows, and scalable Android project deployment pipelines.",
    },

    {
      name: "SQL Databases",
      icon: <SiMysql />,
      desc:
        "Designing relational database systems, optimized queries, structured data operations, synchronization, and scalable backend storage architecture.",
    },

    {
      name: "WorkManager",
      icon: <FaCode />,
      desc:
        "Scheduling reliable background tasks, notifications, periodic sync operations, and lifecycle-aware Android services efficiently.",
    },

    {
      name: "Paging 3",
      icon: <FaDatabase />,
      desc:
        "Implementing optimized lazy loading, smooth infinite scrolling, memory-efficient rendering, and scalable large dataset handling.",
    },

    {
      name: "Testing & Debugging",
      icon: <FaBug />,
      desc:
        "Debugging Android applications, fixing production issues, improving app stability, memory optimization, and performance enhancement workflows.",
    },

    {
      name: "Play Store Publishing",
      icon: <FaMobileAlt />,
      desc:
        "Managing release builds, signed APK generation, deployment pipelines, Play Store optimization, and production application publishing lifecycle.",
    },

    {
      name: "Realtime Systems",
      icon: <FaServer />,
      desc:
        "Building realtime Android systems with live updates, instant synchronization, event handling, and scalable communication architecture.",
    },

    {
      name: "UI / UX Development",
      icon: <FaMobileAlt />,
      desc:
        "Designing premium Android interfaces focused on smooth navigation, responsive layouts, modern interactions, and immersive user experience.",
    },

    {
      name: "Scalable Architecture",
      icon: <FaLayerGroup />,
      desc:
        "Creating enterprise-level Android application structures capable of handling large-scale features, maintainability, and production growth.",
    },

    {
      name: "Production Development",
      icon: <SiGit />,
      desc:
        "Developing real-world Android applications with scalability, optimized performance, maintainable architecture, and production-ready standards.",
    },
  ];

  return (

    <section
      id="skills"
      className="relative py-36 overflow-hidden"
    >

      {/* BACKGROUND GLOW */}

      <div className="absolute top-[-250px] right-[-250px] w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full" />

      <div className="absolute bottom-[-250px] left-[-250px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" />

      <div className="container-custom relative z-10">

        {/* HEADING */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >

          <p className="text-cyan-400 uppercase tracking-[6px] text-sm mb-5 font-semibold">

            Technical Expertise

          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-white font-['Space_Grotesk']">

            Building Premium
            <span className="gradient-text"> Android </span>
            Experiences

          </h2>

          <p className="mt-8 text-slate-400 text-lg max-w-3xl leading-relaxed">

            Specialized in crafting scalable Android applications using modern
            architecture, realtime systems, optimized performance, and
            production-level development workflows.

          </p>

        </motion.div>

        {/* SKILLS GRID */}

        <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:border-cyan-400/40 transition-all duration-500 hover:-translate-y-3"
            >

              {/* CARD GLOW */}

              <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-cyan-500/10 blur-[90px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />

              {/* ICON */}

              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center text-3xl text-cyan-400 group-hover:scale-110 transition-all duration-500">

                {skill.icon}

              </div>

              {/* TITLE */}

              <h3 className="relative z-10 mt-6 text-2xl font-bold text-white">

                {skill.name}

              </h3>

              {/* DESCRIPTION */}

              <p className="relative z-10 mt-4 text-slate-400 text-sm leading-relaxed">

                {skill.desc}

              </p>

              {/* BOTTOM LINE */}

              <div className="relative z-10 mt-8 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500" />

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;