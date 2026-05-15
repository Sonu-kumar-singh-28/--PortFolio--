import { motion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";

/* PROJECT IMAGES */

import weatherImage from "../../assets/weather.png";
import chatImage from "../../assets/chat.png";
import newsImage from "../../assets/news.png";
import foodImage from "../../assets/food.png";
import expenseImage from "../../assets/expense.png";
import cropImage from "../../assets/crop.png";
import thirdEyeImage from "../../assets/third-eye.png";
import coffeeImage from "../../assets/coffee.png";


function Projects() {

    const projects = [

        {
            title: "Real-Time Weather App",

            category: "Android Forecasting System",

            description:
                "A premium real-time Android weather application engineered with modern Android architecture, realtime forecasting APIs, intelligent location tracking, smooth UI animations, scalable data flow, and optimized performance for seamless mobile experience.",

            tech: [
                "Kotlin",
                "Retrofit",
                "MVVM",
                "Coroutines",
                "REST API",
                "Location API",
                "Jetpack",
                "Android Studio",
            ],

            githubLink:
                "https://github.com/Sonu-kumar-singh-28/Weather-App-2.0",

            image: weatherImage,
        },

        {
            title: "Realtime Chat App",

            category: "Messaging Application",

            description:
                "A scalable Firebase-powered realtime communication platform featuring secure authentication, instant messaging, push notifications, user presence tracking, cloud synchronization, and modern Android UI architecture for seamless user interaction.",

            tech: [
                "Firebase",
                "Firestore",
                "FCM",
                "MVVM",
                "Kotlin",
                "Authentication",
                "Realtime DB",
                "Android SDK",
            ],

            githubLink:
                "https://github.com/Sonu-kumar-singh-28/Chatting-App",

            image: chatImage,
        },

        {
            title: "News Reader App",

            category: "Live News Platform",

            description:
                "A modern Android news platform designed with scalable MVVM architecture, realtime news APIs, offline caching system, optimized performance handling, smooth category navigation, and immersive mobile reading experience.",

            tech: [
                "Room Database",
                "Retrofit",
                "Coroutines",
                "MVVM",
                "REST API",
                "RecyclerView",
                "Jetpack",
                "Android Studio",
            ],

            githubLink:
                "https://github.com/Sonu-kumar-singh-28/News-Reader-App",

            image: newsImage,
        },

        {
            title: "Food Delivery App",

            category: "Compose Commerce Platform",

            description:
                "A premium food delivery Android application crafted using modern Jetpack Compose UI system with Firebase backend services, scalable architecture, smooth navigation flow, and immersive ordering experience.",

            tech: [
                "Jetpack Compose",
                "Firebase",
                "Hilt",
                "Navigation",
                "Firestore",
                "MVVM",
                "Kotlin",
                "Material UI",
            ],

            githubLink:
                "https://github.com/Sonu-kumar-singh-28/Food--Delivery--App",

            image: foodImage,
        },

        {
            title: "Expense Tracker",

            category: "Finance Management System",

            description:
                "An advanced Android expense management system featuring analytics visualization, local data persistence, transaction management, performance optimization, and scalable clean architecture for smart financial tracking.",

            tech: [
                "Room DB",
                "MVVM",
                "Charts",
                "Bottom Navigation",
                "Kotlin",
                "Coroutines",
                "Android SDK",
                "Jetpack",
            ],

            githubLink:
                "https://github.com/Sonu-kumar-singh-28/Expense-Tracker-App",

            image: expenseImage,
        },

        {
            title: "Crop Advisory System",

            category: "AgriTech Android Solution",

            description:
                "A smart agriculture Android platform built for crop advisory services, realtime weather insights, pest detection workflows, digital marketplace integration, scalable networking architecture, and farmer support systems.",

            tech: [
                "REST API",
                "Kotlin",
                "Firebase",
                "Realtime Data",
                "Scalable Backend",
                "Android SDK",
                "MVVM",
                "API Integration",
            ],

            githubLink:
                "https://github.com/Sonu-kumar-singh-28/KRISHI-SAHAYAK",

            image: cropImage,
        },

        {
            title: "The Third Eye",

            category: "Esports Organization System",

            description:
                "A production-level esports management Android platform developed after 50+ days of engineering focused on tournament operations, live stream management, realtime analytics, authentication systems, team registrations, and scalable mobile architecture.",

            tech: [
                "Kotlin",
                "Jetpack Compose",
                "Firebase",
                "MVVM",
                "Clean Architecture",
                "Dagger Hilt",
                "Coroutines",
                "Room Database",
            ],

            githubLink:
                "https://github.com/Sonu-kumar-singh-28/The-Third-Eye",

            image: thirdEyeImage,
        },

        {
    title: "Coffee Shop Application",

    category: "Modern Cafe Ordering Platform",

    description:
        "A premium Android coffee ordering application designed with modern UI architecture, realtime order tracking, secure Firebase authentication, digital payments integration, product customization system, and immersive customer experience for modern cafe businesses.",

    tech: [
        "Jetpack Compose",
        "Firebase",
        "MVVM",
        "Kotlin",
        "Realtime Database",
        "Cloud Firestore",
        "Navigation",
        "Material 3",
    ],

    githubLink:
        "https://github.com/Sonu-kumar-singh-28/Coffee-Application-Project",

    image: coffeeImage,
},
    ];

    return (

        <section
            id="projects"
            className="relative py-36 overflow-hidden"
        >

            {/* BACKGROUND GLOW */}

            <div className="absolute top-0 left-[-200px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" />

            <div className="absolute bottom-0 right-[-200px] w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

            <div className="container-custom relative z-10">

                {/* HEADING */}

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
                        <span className="gradient-text">

                            {" "}Systems

                        </span>

                    </h2>

                    <p className="mt-8 text-slate-400 text-lg max-w-3xl">

                        Production-grade Android applications focused on
                        clean architecture,
                        realtime systems,
                        scalable engineering,
                        and immersive mobile experiences.

                    </p>

                </motion.div>

                {/* PROJECTS GRID */}

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
                            className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:border-blue-400/40 hover:-translate-y-2 transition-all duration-500"
                        >

                            {/* GLOW */}

                            <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-blue-500/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />

                            {/* PROJECT IMAGE */}

                            <div className="relative overflow-hidden rounded-[28px] h-[260px] border border-white/10">

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                                />

                                {/* OVERLAY */}

                                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />

                            </div>

                            {/* CONTENT */}

                            <div className="relative z-10 mt-8">

                                <p className="text-blue-400 text-sm tracking-wide">

                                    {project.category}

                                </p>

                                <h3 className="mt-3 text-3xl font-bold text-white">

                                    {project.title}

                                </h3>

                                <p className="mt-5 text-slate-400 leading-relaxed">

                                    {project.description}

                                </p>

                                {/* TECH STACK */}

                                <div className="mt-8 flex flex-wrap gap-3">

                                    {project.tech.map((tech, i) => (

                                        <div
                                            key={i}
                                            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300 hover:border-blue-400/40 hover:text-white transition-all duration-300"
                                        >

                                            {tech}

                                        </div>

                                    ))}

                                </div>

                                {/* BUTTONS */}

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
                                        className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white hover:border-blue-400 transition-all duration-300"
                                    >

                                        <FaGithub />

                                    </a>

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Projects;