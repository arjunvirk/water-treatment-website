import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserTie,
  FaFileInvoice,
  FaWhatsapp,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    title: "Call Us",
    value: "+91 8700939284",
    link: "tel:+918700939284",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Us",
    value: "jalenvirotechinc@gmail.com",
    link: "mailto:jalenvirotechinc@gmail.com",
  },
  {
    icon: <FaUserTie />,
    title: "Owner",
    value: "Lalit Kumar",
  },
  {
    icon: <FaFileInvoice />,
    title: "GSTIN",
    value: "09BYGPK4686MIZM",
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-linear-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[4px] text-cyan-600 font-semibold">
            Contact Us
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Let's Discuss Your Project
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6 leading-8">
            Looking for reliable water treatment solutions? Contact JAL
            ENVIROTECH INC. today and our experts will help you choose the best
            solution for your industrial or commercial requirements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="bg-white border border-gray-200 rounded-3xl shadow-lg p-7"
                >
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500 text-white flex items-center justify-center text-2xl mb-6">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-gray-600 hover:text-cyan-600 transition break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-600">{item.value}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Address */}

            <div className="mt-8 bg-slate-900 rounded-3xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center text-xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">Office Address</h3>

                  <p className="text-gray-300 mt-2 leading-7">
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

              {/* Buttons */}

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="mailto:jalenvirotechinc@gmail.com"
                  className="border border-white hover:bg-white hover:text-slate-900 transition px-6 py-3 rounded-full font-semibold"
                >
                  Email Us
                </a>

                <a
                  href="https://wa.me/918700939284"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-full font-semibold flex items-center gap-2"
                >
                  <FaWhatsapp />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=DLF%20Dilshad%20Ext-II%20Ghaziabad&output=embed"
                width="100%"
                height="650"
                loading="lazy"
                className="border-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
