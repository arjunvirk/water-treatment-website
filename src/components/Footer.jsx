import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Top Border */}

      <div className="h-1 bg-linear-to-r from-cyan-500 via-blue-500 to-cyan-500"></div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">JAL ENVIROTECH INC.</h2>

            <p className="text-cyan-400 mt-2">AN ISO CERTIFIED COMPANY</p>

            <p className="text-gray-400 mt-6 leading-8">
              We provide complete Water & Waste Treatment Solutions including RO
              Plants, DM Plants, Water Softeners, ETP, STP, ZLD Systems,
              Chemicals and Electrical Accessories.
            </p>

            {/* Social */}

            <div className="flex gap-4 mt-8">

              <a
                href="https://wa.me/918700939284"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-green-600 hover:bg-green-500 transition flex items-center justify-center"
              >
                <FaWhatsapp />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-cyan-400 transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-cyan-400 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#products" className="hover:text-cyan-400 transition">
                  Products
                </a>
              </li>

              <li>
                <a href="#process" className="hover:text-cyan-400 transition">
                  Process
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-cyan-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Our Services</h3>

            <ul className="space-y-4 text-gray-400">
              <li>RO Plant</li>

              <li>DM Plant</li>

              <li>Water Softener</li>

              <li>ETP Plant</li>

              <li>STP Plant</li>

              <li>ZLD System</li>

              <li>Chemical Spare Parts</li>
            </ul>
          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <FaPhoneAlt className="text-cyan-400 mt-1" />

                <a
                  href="tel:+918700939284"
                  className="text-gray-400 hover:text-cyan-400"
                >
                  +91 8700939284
                </a>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="text-cyan-400 mt-1" />

                <a
                  href="mailto:jalenvirotechinc@gmail.com"
                  className="text-gray-400 hover:text-cyan-400 break-all"
                >
                  jalenvirotechinc@gmail.com
                </a>
              </div>

              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-cyan-400 mt-1" />

                <p className="text-gray-400 leading-7">
                  B-1/73/F-2,
                  <br />
                  DLF Dilshad Ext-II,
                  <br />
                  Ghaziabad,
                  <br />
                  Uttar Pradesh - 201005
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} JAL ENVIROTECH INC. All Rights
            Reserved.
          </p>

          <button
            onClick={scrollTop}
            className="w-12 h-12 rounded-full bg-cyan-500 hover:bg-cyan-600 transition flex items-center justify-center shadow-lg"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
