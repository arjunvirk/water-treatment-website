import { motion } from "framer-motion";
import {
  FaTint,
  FaWater,
  FaFilter,
  FaRecycle,
  FaIndustry,
  FaFlask,
  FaBolt,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaTint />,
    title: "RO Plant",
    description:
      "High-performance Reverse Osmosis plants designed for industrial, commercial and institutional water purification.",
  },
  {
    icon: <FaWater />,
    title: "DM Plant",
    description:
      "Demineralization plants delivering ultra-pure water for pharmaceutical, laboratory and industrial applications.",
  },
  {
    icon: <FaFilter />,
    title: "Water Softener",
    description:
      "Efficient water softening systems that remove hardness and improve equipment life and performance.",
  },
  {
    icon: <FaRecycle />,
    title: "ETP & STP",
    description:
      "Advanced Effluent and Sewage Treatment Plants for sustainable wastewater management.",
  },
  {
    icon: <FaIndustry />,
    title: "ZLD System",
    description:
      "Zero Liquid Discharge systems that maximize water recovery while minimizing environmental impact.",
  },
  {
    icon: <FaFlask />,
    title: "Chemical Spare Parts",
    description:
      "Premium water treatment chemicals and high-quality spare parts for every type of treatment plant.",
  },
  {
    icon: <FaBolt />,
    title: "Electrical Accessories",
    description:
      "Reliable electrical components, control panels and automation accessories for water treatment systems.",
  },
  {
    icon: <FaArrowRight />,
    title: "Installation & AMC",
    description:
      "Complete installation, commissioning and Annual Maintenance Contracts for uninterrupted operation.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 bg-slate-900 text-white overflow-hidden"
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
          <span className="uppercase tracking-[4px] text-cyan-400 font-semibold">
            What We Offer
          </span>

          <h2 className="text-5xl font-bold mt-4">Our Premium Services</h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
            JAL ENVIROTECH INC. provides complete water and wastewater treatment
            solutions using modern technology, quality equipment and expert
            engineering support.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group relative rounded-3xl border border-slate-700 bg-slate-800 p-8 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]"
            >
              {/* Icon */}

              <div className="w-16 h-16 rounded-2xl bg-cyan-500 flex items-center justify-center text-3xl mb-8 transition group-hover:rotate-6 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition">
                {service.title}
              </h3>

              {/* Description */}

              <p className="text-gray-400 leading-7">{service.description}</p>

              {/* Bottom Line */}

              <div className="mt-8 h-1 w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
