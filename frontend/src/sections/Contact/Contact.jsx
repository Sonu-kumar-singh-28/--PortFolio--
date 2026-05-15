import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {

  const socialLinks = [
    {
      icon: <FaGithub />,
      link: "https://github.com/Sonu-kumar-singh-28",
      hover: "hover:border-cyan-400 hover:text-cyan-400",
    },

    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/sonu-kumar-singh28/",
      hover: "hover:border-blue-400 hover:text-blue-400",
    },

    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/kshatriya_sonu.rajputt_?igsh=aWo0cWwwdDEyeWpv",
      hover: "hover:border-pink-400 hover:text-pink-400",
    },
  ];

  return (

    <section
      id="contact"
      className="relative py-36 overflow-hidden"
    >

      {/* BACKGROUND GLOW */}

      <div className="absolute top-[-250px] left-[-250px] w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full" />

      <div className="absolute bottom-[-250px] right-[-250px] w-[500px] h-[500px] bg-blue-500/10 blur-[160px] rounded-full" />

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

            Contact

          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-white font-['Space_Grotesk']">

            Let's Build
            <span className="gradient-text">

              {" "}Something Great

            </span>

          </h2>

          <p className="mt-8 text-slate-400 text-lg max-w-3xl leading-relaxed">

            Open to Android development opportunities,
            collaborations,
            freelance projects,
            and innovative mobile product engineering.

          </p>

        </motion.div>

        {/* MAIN GRID */}

        <div className="mt-24 grid lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            {/* EMAIL CARD */}

            <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:border-cyan-400/40 transition-all duration-500">

              <div className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] bg-cyan-500/10 blur-[90px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />

              <div className="relative z-10 flex items-start gap-5">

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-2xl">

                  <FaEnvelope />

                </div>

                <div>

                  <p className="text-slate-400 text-sm">

                    Email Address

                  </p>

                  <a
                    href="mailto:sonusinghsengar28@gmail.com"
                    className="mt-2 text-xl sm:text-2xl font-bold text-white break-all hover:text-cyan-400 transition-all duration-300 inline-block"
                  >

                    sonusinghsengar28@gmail.com

                  </a>

                </div>

              </div>

            </div>

            {/* LOCATION CARD */}

            <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:border-blue-400/40 transition-all duration-500">

              <div className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] bg-blue-500/10 blur-[90px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />

              <div className="relative z-10 flex items-start gap-5">

                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 text-2xl">

                  <FaMapMarkerAlt />

                </div>

                <div>

                  <p className="text-slate-400 text-sm">

                    Current Location

                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">

                    Bhopal, India

                  </h3>

                </div>

              </div>

            </div>

            {/* SOCIAL LINKS */}

            <div className="flex items-center gap-5 pt-2 flex-wrap">

              {socialLinks.map((social, index) => (

                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-16 h-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-2xl text-white transition-all duration-300 hover:-translate-y-2 ${social.hover}`}
                >

                  {social.icon}

                </a>

              ))}

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-10"
          >

            {/* GLOW */}

            <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-cyan-500/10 blur-[120px] rounded-full" />

            <div className="relative z-10">

              <h3 className="text-3xl font-bold text-white">

                Start a Project

              </h3>

              <p className="mt-4 text-slate-400 leading-relaxed">

                Have an idea for a mobile app or scalable Android product?
                Let’s discuss and build something impactful.

              </p>

              {/* FORM */}

              <form
                action="https://formsubmit.co/sonusinghsengar28@gmail.com"
                method="POST"
                className="mt-10 space-y-6"
              >

                {/* HIDDEN CONFIG */}

                <input
                  type="hidden"
                  name="_captcha"
                  value="false"
                />

                <input
                  type="hidden"
                  name="_template"
                  value="table"
                />

                <input
                  type="hidden"
                  name="_subject"
                  value="New Portfolio Message"
                />

                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Thank you for contacting me. I will connect with you soon."
                />

                {/* NAME */}

                <div>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full h-16 rounded-2xl border border-white/10 bg-white/5 px-6 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400 transition-all duration-300"
                  />

                </div>

                {/* EMAIL */}

                <div>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full h-16 rounded-2xl border border-white/10 bg-white/5 px-6 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400 transition-all duration-300"
                  />

                </div>

                {/* MESSAGE */}

                <div>

                  <textarea
                    rows="6"
                    name="message"
                    required
                    placeholder="Project Discussion..."
                    className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400 transition-all duration-300 resize-none"
                  />

                </div>

                {/* BUTTON */}

                <button
                  type="submit"
                  className="w-full h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg hover:scale-[1.02] transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,0.3)] flex items-center justify-center gap-3"
                >

                  Send Message

                  <FaPaperPlane />

                </button>

              </form>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Contact;