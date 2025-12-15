import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { HeroBackground } from "./HeroBackground";
import { PAGES_DATA } from "../constants";

export const Home = () => {
  const content = PAGES_DATA.home;

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <HeroBackground image={content.backgroundImage} alt={content.title} />

      {/* Cinematic Vignette Overlay especially for Home */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-10 pointer-events-none" />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-red-500 font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base"
        >
          {content.subtitle}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-black tracking-tighter mb-6 leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-2xl"
        >
          {content.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-lg md:text-2xl text-gray-300 font-light max-w-2xl mb-10 leading-relaxed text-shadow-sm"
        >
          {content.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <NavLink
            to="/productions"
            className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-bold text-white transition-all duration-300 bg-red-600 rounded hover:bg-red-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
            <span className="relative uppercase tracking-widest text-lg">
              Start Watching
            </span>
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};
