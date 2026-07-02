import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import roPlant from "../assets/products/ro-plant.jpg";
import dmPlant from "../assets/products/dm-plant.jfif";
import softener from "../assets/products/water-softner.jpg";
import etp from "../assets/products/etp.jpg";
import stp from "../assets/products/stp.avif";
import zld from "../assets/products/zld.avif";
import chemicals from "../assets/products/chemicals.avif";
import electrical from "../assets/products/electrical.jpg";

const products = [
  {
    title: "Industrial RO Plant",
    image: roPlant,
    description:
      "High-capacity reverse osmosis systems for industrial and commercial applications.",
  },
  {
    title: "DM Plant",
    image: dmPlant,
    description:
      "Advanced demineralization systems delivering ultra-pure water solutions.",
  },
  {
    title: "Water Softener",
    image: softener,
    description:
      "Efficient softening plants designed to remove hardness and protect equipment.",
  },
  {
    title: "ETP Plant",
    image: etp,
    description:
      "Modern effluent treatment systems for industrial wastewater management.",
  },
  {
    title: "STP Plant",
    image: stp,
    description:
      "Reliable sewage treatment systems for residential and commercial projects.",
  },
  {
    title: "ZLD System",
    image: zld,
    description:
      "Zero Liquid Discharge technology for maximum water recovery and sustainability.",
  },
  {
    title: "Chemical Spare Parts",
    image: chemicals,
    description:
      "Premium chemicals, filters, membranes and replacement spare parts.",
  },
  {
    title: "Electrical Accessories",
    image: electrical,
    description:
      "Panels, motors, sensors, pumps and electrical components for water treatment systems.",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-white">
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
            Our Products
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Engineered for Performance
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-8">
            We manufacture and supply reliable water treatment systems,
            industrial equipment, chemicals and electrical accessories using the
            latest engineering technologies.
          </p>
        </motion.div>

        {/* Product Grid */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-100"
            >
              {/* Image */}

              <div className="overflow-hidden h-64">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}

              <div className="p-7">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition">
                  {product.title}
                </h3>

                <p className="text-gray-600 leading-7 mb-6">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
