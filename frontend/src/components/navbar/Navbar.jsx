import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";

function Navbar() {

  const navItems = [

    {
      name: "Home",
      id: "home",
    },

    {
      name: "About",
      id: "about",
    },

    {
      name: "Skills",
      id: "skills",
    },

    {
      name: "Projects",
      id: "projects",
    },

    {
      name: "Experience",
      id: "experience",
    },

    {
      name: "Contact",
      id: "contact",
    },
  ];

  const scrollToSection = (id) => {

    const section = document.getElementById(id);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
      });

    }

  };

  return (

    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 pt-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* MAIN NAVBAR */}

        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_10px_60px_rgba(0,0,0,0.45)]">

          {/* TOP LIGHT */}

          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5" />

          {/* CONTENT */}

          <div className="relative flex items-center justify-between px-6 lg:px-10 py-5">

            {/* LOGO */}

            <div
              onClick={() => scrollToSection("home")}
              className="cursor-pointer"
            >

              <h1 className="text-xl md:text-2xl font-black tracking-[0.2em] uppercase font-['Space_Grotesk'] bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">

                PORTFOLIO

              </h1>

            </div>

            {/* NAV ITEMS */}

            <ul className="hidden lg:flex items-center gap-10">

              {navItems.map((item, index) => (

                <li
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-sm tracking-wide text-slate-300 hover:text-white transition-all duration-300 cursor-pointer group"
                >

                  {item.name}

                  {/* HOVER LINE */}

                  <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />

                </li>

              ))}

            </ul>

            {/* RIGHT */}

            <div className="flex items-center gap-4">

              {/* STATUS */}

              <div className="hidden md:flex items-center gap-3 px-5 py-2.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-slate-300 shadow-[0_0_20px_rgba(34,211,238,0.08)]">

                <span className="relative flex h-3 w-3">

                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />

                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />

                </span>

                Available For Work

              </div>

              {/* MOBILE MENU */}

              <button className="lg:hidden w-11 h-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white text-lg hover:border-cyan-400 transition-all duration-300">

                <FaBars />

              </button>

            </div>

          </div>

        </div>

      </div>

    </motion.nav>
  );
}

export default Navbar;