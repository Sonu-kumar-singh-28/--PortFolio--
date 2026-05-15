import { motion } from "framer-motion";

function Experience() {

  const timeline = [

    {
      year: "2025",
      title: "Started Android Development Journey",
      desc:
        "Started learning Android development with Kotlin, Android Studio, UI fundamentals, and mobile application architecture while building strong programming foundations.",
    },

    {
      year: "2025",
      title: "Built 20+ Android Applications",
      desc:
        "Developed multiple Android applications focused on realtime systems, modern UI design, scalable architecture, Firebase integration, and production-ready mobile experiences.",
    },

    {
      year: "2025",
      title: "Mastered Modern Android Stack",
      desc:
        "Worked extensively with Jetpack Compose, MVVM, Clean Architecture, Coroutines, Room Database, Retrofit, Firebase, and scalable Android engineering workflows.",
    },

    {
      year: "2026",
      title: "The Third Eye — Esports System",
      desc:
        "Successfully completed a production-level esports organization system after 50+ days of consistent development focused on realtime architecture and scalable Android engineering.",
    },

    {
      year: "Present",
      title: "Building Premium Mobile Experiences",
      desc:
        "Focused on crafting premium Android applications with optimized performance, clean architecture, immersive UI systems, and modern development standards.",
    },
  ];

  return (

    <section
      id="experience"
      className="relative py-36 overflow-hidden"
    >

      {/* BACKGROUND GLOW */}

      <div className="absolute top-[-250px] left-[-250px] w-[500px] h-[500px] bg-blue-500/10 blur-[160px] rounded-full" />

      <div className="absolute bottom-[-250px] right-[-250px] w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full" />

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

            Development Journey

          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-white font-['Space_Grotesk']">

            Experience &
            <span className="gradient-text"> Growth </span>

          </h2>

          <p className="mt-8 text-slate-400 text-lg max-w-3xl leading-relaxed">

            Continuous Android engineering focused on scalable architecture,
            realtime systems, production-ready development, and modern mobile experiences.

          </p>

        </motion.div>

        {/* TIMELINE */}

        <div className="relative mt-28">

          {/* CENTER LINE */}

          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400/40 via-blue-500/30 to-transparent" />

          <div className="space-y-16">

            {timeline.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >

                {/* DOT */}

                <div className="absolute left-[7px] md:left-1/2 top-6 md:-translate-x-1/2 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.8)]" />

                {/* CARD */}

                <div className="md:w-1/2 pl-14 md:pl-0">

                  <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:border-cyan-400/40 transition-all duration-500">

                    {/* GLOW */}

                    <div className="absolute top-[-80px] right-[-80px] w-[200px] h-[200px] bg-cyan-500/10 blur-[90px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />

                    {/* YEAR */}

                    <p className="relative z-10 text-cyan-400 text-sm tracking-[4px] uppercase font-semibold">

                      {item.year}

                    </p>

                    {/* TITLE */}

                    <h3 className="relative z-10 mt-4 text-3xl font-bold text-white">

                      {item.title}

                    </h3>

                    {/* DESC */}

                    <p className="relative z-10 mt-5 text-slate-400 leading-relaxed">

                      {item.desc}

                    </p>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;