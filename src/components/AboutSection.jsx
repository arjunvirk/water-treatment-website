import { motion } from "framer-motion";
import { FaIndustry, FaUsers, FaAward, FaCheckCircle } from "react-icons/fa";

import aboutImage from "../assets/about.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-linear-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            <img
              src={aboutImage}
              alt="Water Treatment Plant"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />

            {/* Floating Card */}

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute bottom-4 right-4 lg:-bottom-8 lg:-right-8 bg-white rounded-2xl shadow-xl p-6 w-56 sm:w-64"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center text-white text-2xl">
                  <FaAward />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-800">ISO</h3>

                  <p className="text-gray-500">Certified Company</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan-600 font-semibold uppercase tracking-[4px]">
              About Company
            </span>

            <h2 className="text-5xl font-bold text-slate-900 mt-4 leading-tight">
              Trusted Water &
              <span className="text-cyan-600"> Waste Treatment</span>
              <br />
              Solution Provider
            </h2>

            <p className="text-gray-600 leading-8 mt-8">
              <strong>JAL ENVIROTECH INC.</strong> is an ISO Certified company
              specializing in manufacturing and supplying advanced water and
              wastewater treatment systems. We deliver reliable, efficient and
              environmentally friendly solutions for industries, commercial
              establishments, hospitals, schools and residential projects.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {[
                "Reverse Osmosis (RO) Plants",
                "DM Plants",
                "Water Softeners",
                "ETP & STP Systems",
                "ZLD Solutions",
                "Chemical Spare Parts",
                "Electrical Accessories",
                "Installation & Maintenance",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-600" />

                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-6 mt-14">
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <FaIndustry className="mx-auto text-4xl text-cyan-600 mb-4" />

                <h3 className="text-3xl font-bold text-slate-900">100+</h3>

                <p className="text-gray-500">Projects</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <FaUsers className="mx-auto text-4xl text-cyan-600 mb-4" />

                <h3 className="text-3xl font-bold text-slate-900">50+</h3>

                <p className="text-gray-500">Happy Clients</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <FaAward className="mx-auto text-4xl text-cyan-600 mb-4" />

                <h3 className="text-3xl font-bold text-slate-900">100%</h3>

                <p className="text-gray-500">Quality</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
