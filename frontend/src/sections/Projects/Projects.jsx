import { motion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";

function Projects() {
    const projects = [
        {
            title: "Real-Time Weather App",
            category: "Android Forecasting System",
            description:
                "Built a real-time weather forecasting Android application using Kotlin and Retrofit with OpenWeather API integration, location-based weather results, and scalable MVVM architecture.",

            tech: [
                "Kotlin",
                "Retrofit",
                "MVVM",
                "Coroutines",
                "Location API",
            ],

            githubLink:
                "https://github.com/Sonu-kumar-singh-28/Weather-App-2.0",
        },

        {
            title: "Realtime Chat App",
            category: "Messaging Application",
            description:
                "Developed a scalable Firebase-powered messaging app with secure authentication, real-time communication, profile management, push notifications, and smooth Android UI flow.",

            tech: [
                "Firebase",
                "Firestore",
                "FCM",
                "MVVM",
                "Kotlin",
            ],

            githubLink:
                "https://github.com/Sonu-kumar-singh-28/Chatting-App",
        },

        {
            title: "News Reader App",
            category: "Live News Platform",
            description:
                "A modern Android news application built with Room, Retrofit, Coroutines, and MVVM architecture delivering live updates with smooth navigation flow.",

            tech: [
                "Room",
                "Retrofit",
                "Coroutines",
                "MVVM",
            ],

            githubLink:
                "https://github.com/Sonu-kumar-singh-28/News-Reader-App",
        },

        {
            title: "Food Delivery App",
            category: "Compose Commerce App",
            description:
                "Designed a premium food delivery application using Jetpack Compose with Firebase authentication, Firestore database, Hilt dependency injection, and seamless navigation.",

            tech: [
                "Compose",
                "Firebase",
                "Hilt",
                "NavGraph",
            ],

            githubLink:
                "https://github.com/Sonu-kumar-singh-28/Food--Delivery--App",
        },

        {
            title: "Expense Tracker",
            category: "Finance Management System",
            description:
                "Expense management Android app featuring Room database, interactive analytics charts, bottom-sheet UI flow, and scalable MVVM-based clean architecture.",

            tech: [
                "Room DB",
                "MVVM",
                "Charts",
                "Bottom Nav",
            ],

            githubLink:
                "https://github.com/Sonu-kumar-singh-28/Expense-Tracker-App",
        },

        {
            title: "Crop Advisory System",
            category: "AgriTech Solution",
            description:
                "Built networking architecture for crop advisory APIs supporting marketplace integration, digital payments, pest detection, weather alerts, and community support systems.",

            tech: [
                "REST API",
                "Kotlin",
                "Backend",
                "Scalable Architecture",
            ],

            githubLink:
                "https://github.com/Sonu-kumar-singh-28/KRISHI-SAHAYAK",
        },

        {
            title: "The Third Eye",
            category: "Esports Organization System",
            description:
                "A premium Android-based esports management platform designed for tournament operations, player registrations, live event coordination, analytics dashboards, and real-time system monitoring with scalable architecture.",

            tech: [
                "Kotlin",
                "Jetpack Compose",
                "Firebase",
                "MVVM",
                "Hilt",
                "Realtime DB",
            ],

            githubLink:
                "https://github.com/Sonu-kumar-singh-28/The-Third-Eye",
        },
    ];

    return (
        <section
            id="projects"
            className="relative py-36 overflow-hidden"
        >
            <div className="absolute top-0 left-[-200px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" />

            <div className="container-custom relative z-10">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl"
                >
                    <p className="text-blue-400 uppercase tracking-[6px] text-sm mb-5 font-semibold">
                        Portfolio Work
                    </p>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-white font-['Space_Grotesk']">
                        Android Apps &
                        <span className="gradient-text"> Systems</span>
                    </h2>

                    <p className="mt-8 text-slate-400 text-lg max-w-3xl">
                        Production-ready Android applications focused on modern architecture,
                        scalability, real-time systems, and premium mobile experiences.
                    </p>
                </motion.div>

                {/* Projects */}
                <div className="mt-24 grid lg:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: .8,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="group rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:border-blue-400/40 hover:-translate-y-2 transition-all duration-500"
                        >
                            <p className="text-blue-400 text-sm tracking-wide">
                                {project.category}
                            </p>

                            <h3 className="mt-3 text-3xl font-bold text-white">
                                {project.title}
                            </h3>

                            <p className="mt-5 text-slate-400 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {project.tech.map((tech, i) => (
                                    <div
                                        key={i}
                                        className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300"
                                    >
                                        {tech}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 flex items-center gap-5">
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-semibold"
                                >
                                    View Project
                                    <FaArrowRight />
                                </a>

                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white hover:border-blue-400"
                                >
                                    <FaGithub />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Projects;