import { motion } from "framer-motion";
import {
  SiKotlin,
  SiFirebase,
  SiAndroidstudio,
  SiGithub,
  SiJetpackcompose,
  SiMysql,
} from "react-icons/si";

import {
  FaCode,
  FaDatabase,
  FaLayerGroup,
  FaMobileAlt,
} from "react-icons/fa";

function Skills() {
const skills = [
  {
    name: "Kotlin",
    icon: <SiKotlin />,
    desc:
      "Building modern Android applications using Kotlin with null safety, clean syntax, object-oriented principles, scalable architecture, and optimized performance for production-ready mobile development.",
  },
  {
    name: "Coroutines & Flow",
    icon: <FaCode />,
    desc:
      "Handling asynchronous programming, reactive streams, background processing, and lifecycle-aware data flow for smooth Android application performance.",
  },
  {
    name: "Jetpack Compose",
    icon: <SiJetpackcompose />,
    desc:
      "Creating responsive declarative UI with reusable composables, state management, animations, and scalable interface architecture for premium Android experiences.",
  },
  {
    name: "MVVM Architecture",
    icon: <FaLayerGroup />,
    desc:
      "Structuring apps with separation of concerns using ViewModel, Repository pattern, maintainable codebase, and scalable clean architecture practices.",
  },
  {
    name: "Clean Architecture",
    icon: <FaLayerGroup />,
    desc:
      "Designing modular Android projects with scalable code structure, dependency separation, maintainability, and long-term production-level stability.",
  },
  {
    name: "Hilt",
    icon: <FaCode />,
    desc:
      "Dependency injection for scalable Android projects with clean module management, lifecycle-aware components, and reduced boilerplate code.",
  },
  {
    name: "Retrofit",
    icon: <FaCode />,
    desc:
      "Efficient API integration with REST services, JSON serialization, asynchronous networking, and secure backend communication handling.",
  },
  {
    name: "Room Database",
    icon: <FaDatabase />,
    desc:
      "Managing structured local storage with efficient ORM queries, offline persistence, database caching, and optimized Android data operations.",
  },
  {
    name: "Paging 3",
    icon: <FaDatabase />,
    desc:
      "Implementing efficient lazy loading for large datasets with smooth pagination, optimized memory usage, and seamless scrolling performance.",
  },
  {
    name: "WorkManager",
    icon: <FaCode />,
    desc:
      "Scheduling reliable background tasks with lifecycle awareness, constraints handling, and guaranteed execution across Android devices.",
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    desc:
      "Integrating authentication, Firestore, cloud messaging, storage, crash reporting, and scalable backend services for real-time Android apps.",
  },
  {
    name: "GitHub Actions",
    icon: <SiGithub />,
    desc:
      "Automating Android build pipelines, CI/CD workflows, testing processes, and deployment reliability for professional development workflow.",
  },
  {
    name: "JUnit & Espresso",
    icon: <FaCode />,
    desc:
      "Writing unit tests and UI tests to ensure Android application stability, performance consistency, and reliable production deployment.",
  },
  {
    name: "ProGuard",
    icon: <FaCode />,
    desc:
      "Optimizing Android release builds through code shrinking, obfuscation, security improvements, and reduced APK size.",
  },
  {
    name: "LeakCanary",
    icon: <FaCode />,
    desc:
      "Detecting memory leaks efficiently for optimized Android app performance and maintaining high-quality production stability.",
  },
  {
    name: "Play Store Publishing",
    icon: <FaMobileAlt />,
    desc:
      "Managing Android release deployment, signed APK generation, production rollout, store listing optimization, and publishing lifecycle.",
  },

  {
  name: "SQL Databases",
  icon: <FaDatabase />,
  desc:
    "Designing structured relational databases, writing optimized queries, managing data integrity, efficient storage operations, and scalable backend data handling for Android applications.",
},
{
  name: "Database Management",
  icon: <FaDatabase />,
  desc:
    "Managing local and cloud-based databases with optimized schema design, CRUD operations, performance tuning, synchronization, and secure persistent data storage.",
},
];

  return (
    <section
      id="skills"
      className="relative py-36 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute top-[-250px] right-[-250px] w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full" />
      <div className="absolute bottom-[-250px] left-[-250px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" />

      <div className="container-custom relative z-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <p className="text-cyan-400 uppercase tracking-[6px] text-sm mb-5 font-semibold">
            Technical Skills
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-white font-['Space_Grotesk']">
            Modern Tools For
            <span className="gradient-text"> Scalable </span>
            Development
          </h2>

          <p className="mt-8 text-slate-400 text-lg max-w-2xl">
            Technologies used to craft fast, scalable and premium digital products.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .8,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group glass rounded-[30px] p-8 border border-white/10 hover:border-cyan-400/40 transition-all duration-500 hover:-translate-y-3 cursor-pointer"
            >
              {/* ICON */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-3xl text-cyan-400 group-hover:scale-110 transition-all duration-500">
                {skill.icon}
              </div>

              {/* NAME */}
              <h3 className="mt-6 text-xl font-bold text-white">
                {skill.name}
              </h3>

              {/* DESC */}
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;