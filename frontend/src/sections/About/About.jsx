import { motion } from "framer-motion";

function About() {

  const cards = [
    {
      title:"Android Development",
      description:"Building scalable native Android applications using Kotlin, Jetpack Compose and modern Android architecture."
    },

    {
      title:"Clean Architecture",
      description:"Focused on MVVM, modularization, maintainable code structure and production-level application design."
    },

    {
      title:"Backend Integration",
      description:"Experience integrating Firebase, REST APIs, authentication systems and realtime databases."
    },
  ];

  return (

    <section
      id="about"
      className="relative py-32 overflow-hidden"
    >

      {/* BACKGROUND */}

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full" />

      <div className="container-custom relative z-10">

        {/* TOP */}

        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          viewport={{ once:true }}
          className="max-w-3xl"
        >

          <p className="text-blue-400 uppercase tracking-[5px] text-sm mb-5">

            About Me

          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight font-['Space_Grotesk']">

            Building Android
            <span className="gradient-text">
              {" "}Experiences
            </span>
            <br />
            With Modern Architecture

          </h2>

          <p className="mt-8 text-slate-400 text-lg leading-relaxed">

            I am a Native Android Developer passionate about
            creating modern mobile applications with premium UI,
            scalable architecture and real-world performance.

            Over the last 240+ days,
            I have developed multiple Android applications
            focused on user experience,
            maintainability,
            and production-ready systems.

          </p>

        </motion.div>

        {/* CARDS */}

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {cards.map((card,index)=>(

            <motion.div
              key={index}
              initial={{ opacity:0, y:40 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8, delay:index * 0.2 }}
              viewport={{ once:true }}
              className="glass rounded-[32px] p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-500"
            >

              {/* NUMBER */}

              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-xl font-bold">

                0{index + 1}

              </div>

              {/* TITLE */}

              <h3 className="mt-8 text-2xl font-bold text-white">

                {card.title}

              </h3>

              {/* DESCRIPTION */}

              <p className="mt-5 text-slate-400 leading-relaxed">

                {card.description}

              </p>

            </motion.div>

          ))}

        </div>

        {/* STATS */}

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">

          {[
            {
              number:"20+",
              label:"Apps Developed"
            },

            {
              number:"240+",
              label:"Days Experience"
            },

            {
              number:"10+",
              label:"Technologies"
            },

            {
              number:"100%",
              label:"Native Android"
            },

          ].map((item,index)=>(

            <motion.div
              key={index}
              initial={{ opacity:0, y:40 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8, delay:index * 0.1 }}
              viewport={{ once:true }}
              className="glass rounded-[28px] p-8 text-center border border-white/10"
            >

              <h3 className="text-4xl font-black gradient-text">

                {item.number}

              </h3>

              <p className="mt-3 text-slate-400 text-sm">

                {item.label}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default About;