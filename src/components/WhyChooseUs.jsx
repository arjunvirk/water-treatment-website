import { motion } from "framer-motion";

import {
  FaAward,
  FaUserTie,
  FaTools,
  FaShieldAlt,
  FaClock,
  FaHeadset,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    icon: <FaAward />,
    title: "ISO Certified Company",
    description:
      "Committed to delivering quality products and reliable water treatment solutions.",
  },
  {
    icon: <FaTools />,
    title: "Complete Solutions",
    description:
      "From RO Plants to ZLD Systems, we provide end-to-end water treatment solutions.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Quality Assurance",
    description:
      "Every system is built using premium components for long-lasting performance.",
  },
  {
    icon: <FaClock />,
    title: "Timely Delivery",
    description:
      "Fast manufacturing, installation and commissioning to keep your projects on schedule.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="py-24 bg-linear-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[4px] text-cyan-600 font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Trusted Partner For Water Treatment
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6 leading-8">
            JAL ENVIROTECH INC. is dedicated to providing innovative,
            cost-effective and environmentally responsible water & wastewater
            treatment solutions backed by quality engineering and exceptional
            customer service.
          </p>
        </motion.div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side */}

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-500 text-white flex items-center justify-center text-2xl mb-6">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-7">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl p-10 text-white flex flex-col justify-between shadow-2xl"
          >
            <div>
              <span className="inline-block bg-cyan-500/20 border border-cyan-400 text-cyan-300 px-4 py-2 rounded-full text-sm mb-6">
                Trusted Engineering
              </span>

              <h3 className="text-4xl font-bold leading-tight mb-6">
                Delivering Reliable Water Solutions
              </h3>

              <p className="text-gray-300 leading-8 mb-8">
                We specialize in manufacturing and supplying RO Plants, DM
                Plants, Water Softeners, ETP, STP, ZLD Systems, Chemicals and
                Electrical Accessories with complete installation and
                maintenance support.
              </p>

              <div className="space-y-4">
                {[
                  "Premium Quality Products",
                  "Professional Installation",
                  "Industrial & Commercial Solutions",
                  "Customer Satisfaction",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <FaCheckCircle className="text-cyan-400" />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
