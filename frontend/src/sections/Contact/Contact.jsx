import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

function Contact() {
  /* STATES */

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  /* INPUT HANDLER */

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  /* SEND EMAIL */

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post("http://localhost:5000/send-email", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      setLoading(false);

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } catch (error) {
      setLoading(false);

      console.log(error);

      alert("Failed To Send Message ❌");
    }
  };

  /* SOCIALS */

  const socialLinks = [
    {
      icon: <FaGithub />,
      link: "https://github.com/Sonu-kumar-singh-28",
      hover:
        "hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]",
    },

    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/sonu-kumar-singh28/",
      hover:
        "hover:border-blue-400 hover:text-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)]",
    },

    {
      icon: <FaInstagram />,
      link:
        "https://www.instagram.com/kshatriya_sonu.rajputt_?igsh=aWo0cWwwdDEyeWpv",
      hover:
        "hover:border-pink-400 hover:text-pink-400 hover:shadow-[0_0_40px_rgba(236,72,153,0.35)]",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-36 overflow-hidden"
    >
      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_30%)]" />

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="container-custom relative z-10">
        {/* HEADING */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="max-w-5xl"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
            Let's Build Something
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Amazing
            </span>
          </h2>

          <p className="mt-8 text-slate-400 text-lg max-w-3xl leading-relaxed">
            Open for Android development, freelance projects,
            collaborations, and startup opportunities.
          </p>
        </motion.div>

        {/* GRID */}

        <div className="mt-24 grid lg:grid-cols-[1fr_1.2fr] gap-10">
          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* EMAIL */}

            <div className="rounded-[32px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-8">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-2xl">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-slate-400 text-sm">
                    Email Address
                  </p>

                  <a
                    href="mailto:sonusinghsengar28@gmail.com"
                    className="mt-2 text-xl font-bold text-white hover:text-cyan-400 transition-all duration-300 inline-block"
                  >
                    sonusinghsengar28@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* LOCATION */}

            <div className="rounded-[32px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-8">
              <div className="flex items-start gap-5">
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

            {/* SOCIALS */}

            <div className="flex items-center gap-5 flex-wrap">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl flex items-center justify-center text-2xl text-white transition-all duration-300 hover:-translate-y-2 ${social.hover}`}
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
            className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-8 md:p-10"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white">
                Start a Project
              </h3>

              <p className="mt-4 text-slate-400 leading-relaxed">
                Have an app idea or Android project?
                Let’s discuss and build something impactful.
              </p>

              {/* SUCCESS MESSAGE */}

              {success && (
                <div className="mt-6 flex items-center gap-3 rounded-2xl border border-green-400/20 bg-green-500/10 p-4 text-green-300">
                  <FaCheckCircle />

                  <span>
                    Message Sent Successfully 🚀
                  </span>
                </div>
              )}

              {/* FORM */}

              <form
                onSubmit={sendEmail}
                className="mt-10 space-y-6"
              >
                {/* NAME */}

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full h-16 rounded-2xl border border-white/10 bg-white/[0.05] px-6 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400 transition-all duration-300"
                />

                {/* EMAIL */}

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full h-16 rounded-2xl border border-white/10 bg-white/[0.05] px-6 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400 transition-all duration-300"
                />

                {/* MESSAGE */}

                <textarea
                  rows="6"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Project Discussion..."
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.05] p-6 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400 transition-all duration-300 resize-none"
                />

                {/* BUTTON */}

                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg hover:scale-[1.02] transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,0.3)] flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {loading ? "Sending..." : "Send Message"}

                  <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
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