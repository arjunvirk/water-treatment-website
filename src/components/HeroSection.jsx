import { motion } from "framer-motion";
import { FaArrowRight, FaPhoneAlt, FaCheckCircle } from "react-icons/fa";
import heroImage from "../assets/hero.avif";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 lg:pt-32 pb-20"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-900/75 to-slate-900/50"></div>

      {/* Animated Glow */}
      <div className="absolute top-24 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>

      <div className="absolute bottom-16 right-10 w-80 h-80 bg-blue-600/20 rounded-full blur-[130px] animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-cyan-500/20 border border-cyan-400 text-cyan-300 px-4 py-2 rounded-full text-sm mb-6">
              AN ISO CERTIFIED COMPANY
            </span>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-white">
              JAL <span className="text-cyan-400">ENVIROTECH</span> INC.
            </h1>

            <h2 className="text-2xl lg:text-3xl mt-6 font-semibold text-gray-200">
              Water & Waste Treatment Solutions
            </h2>

            <p className="mt-8 text-gray-300 leading-8 max-w-2xl">
              We manufacture premium quality RO Plants, DM Plants, Water
              Softeners, ETP, STP, ZLD Systems, Chemical Spare Parts &
              Electrical Goods for industrial and commercial water treatment
              solutions.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">
              <a
                href="#contact"
                className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 transition px-7 py-4 rounded-full text-white font-semibold shadow-xl"
              >
                Get Quote
                <FaArrowRight />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden lg:flex justify-end"
        >
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 w-95 shadow-2xl">
            <h3 className="text-white text-2xl font-bold mb-8">
              Our Expertise
            </h3>

            {[
              "Reverse Osmosis (RO) Plants",
              "DM Plants",
              "Water Softeners",
              "ETP & STP Systems",
              "ZLD Solutions",
              "Chemical Spare Parts",
              "Electrical Accessories",
            ].map((item) => (
              <div key={item} className="flex items-center gap-4 mb-5">
                <FaCheckCircle className="text-cyan-400 text-xl" />

                <span className="text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
