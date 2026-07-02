import { motion } from "framer-motion";
import {
  FaClipboardList,
  FaSearchLocation,
  FaDraftingCompass,
  FaIndustry,
  FaTools,
  FaVial,
  FaHandshake,
} from "react-icons/fa";

const processSteps = [
  {
    icon: <FaClipboardList />,
    title: "Requirement Analysis",
    description:
      "We understand your project requirements and water treatment needs.",
  },
  {
    icon: <FaSearchLocation />,
    title: "Site Inspection",
    description:
      "Our engineers inspect the location and analyze water quality.",
  },
  {
    icon: <FaDraftingCompass />,
    title: "System Design",
    description:
      "Customized plant design for maximum efficiency and reliability.",
  },
  {
    icon: <FaIndustry />,
    title: "Manufacturing",
    description: "Premium quality manufacturing using advanced technology.",
  },
  {
    icon: <FaTools />,
    title: "Installation",
    description:
      "Professional installation and commissioning by experienced engineers.",
  },
  {
    icon: <FaVial />,
    title: "Testing",
    description:
      "Complete testing and quality inspection before final delivery.",
  },
  {
    icon: <FaHandshake />,
    title: "Support",
    description: "AMC, maintenance and technical support whenever required.",
  },
];

const ProcessCard = ({ step, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="group bg-slate-800 rounded-3xl p-6 border border-slate-700 hover:border-cyan-400 transition-all duration-300 shadow-xl"
  >
    <div className="w-16 h-16 rounded-2xl bg-cyan-500 flex items-center justify-center text-white text-2xl mb-6 group-hover:rotate-6 transition">
      {step.icon}
    </div>

    <span className="text-cyan-400 font-semibold text-sm">
      Step {index + 1}
    </span>

    <h3 className="text-xl font-bold text-white mt-2 mb-4">{step.title}</h3>

    <p className="text-gray-400 leading-7 text-sm">{step.description}</p>
  </motion.div>
);

const Process = () => {
  return (
    <section id="process" className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[4px] text-cyan-400 font-semibold">
            Our Process
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">How We Work</h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            We follow a systematic approach to deliver reliable, efficient and
            high-quality water treatment solutions from consultation to
            after-sales support.
          </p>
        </motion.div>

        {/* First Row */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {processSteps.slice(0, 4).map((step, index) => (
            <ProcessCard key={index} step={step} index={index} />
          ))}
        </div>

        {/* Connector */}

        <div className="hidden xl:flex justify-center my-10">
          <div className="w-72 h-1 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full"></div>
        </div>

        {/* Second Row */}

        <div className="grid md:grid-cols-3 gap-8 xl:w-3/4 xl:mx-auto">
          {processSteps.slice(4).map((step, index) => (
            <ProcessCard key={index + 4} step={step} index={index + 4} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
