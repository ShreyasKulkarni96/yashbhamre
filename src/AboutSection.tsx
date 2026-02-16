"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-28 ">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold 
            bg-gradient-to-r from-slate-950 via-slate-700 to-slate-400
            bg-clip-text text-transparent tracking-tight">
            About Me
          </h2>
        </motion.div>

        {/* Two Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* WHAT I DO CARD */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="group rounded-2xl p-10 
                       bg-white
                       border border-gray-500
                       shadow-lg
                       transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              What I Do
            </h3>

            <div className="space-y-5 text-gray-500 text-[15px] leading-relaxed">
              <p>
                My professional journey combines on-site exposure, Structural practice,
                postgraduate BIM education, and freelance consultancy. This mix has
                given me a practical understanding of how buildings are designed,
                coordinated, and delivered both digitally and on site.
              </p>

              <p>
                I am particularly interested in how BIM improves coordination between
                disciplines, reduces errors, and supports better decision-making across
                project teams. I approach every project with strong attention to detail,
                a structured workflow mindset, and a collaborative attitude.
              </p>

              <p>
                I am now looking to contribute my skills within a professional
                environment where I can continue to grow as a BIM-focused architectural professional.
              </p>
            </div>
          </motion.div>

          {/* CORE SKILLS CARD */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="group rounded-2xl p-10 
                       bg-white
                       border border-gray-500
                       shadow-lg
                       transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Core Skills
            </h3>

            <div className="space-y-10 text-gray-500 text-sm">

              <div>
                <h4 className="uppercase tracking-widest text-gray-700 mb-4 text-xs font-semibold">
                  BIM & Digital Tools
                </h4>
                <ul className="space-y-2">
                  <li>• Autodesk Revit (Architecture)</li>
                  <li>• BIM Modelling & Coordination</li>
                  <li>• Navisworks (Basic Clash Detection)</li>
                  <li>• AutoCAD</li>
                  <li>• BIM Standards & BEP Awareness</li>
                  <li>• Model Auditing & Quality Control</li>
                </ul>
              </div>

              <div>
                <h4 className="uppercase tracking-widest text-gray-700 mb-4 text-xs font-semibold">
                  Architectural & Technical Skills
                </h4>
                <ul className="space-y-2">
                  <li>• Architectural Drawings</li>
                  <li>• Construction Documentation</li>
                  <li>• As-built & Record Drawings</li>
                  <li>• Basic Detailing & Coordination</li>
                </ul>
              </div>

              <div>
                <h4 className="uppercase tracking-widest text-gray-700 mb-4 text-xs font-semibold">
                  Professional Skills
                </h4>
                <ul className="space-y-2">
                  <li>• Multidisciplinary Coordination</li>
                  <li>• Clear Communication</li>
                  <li>• Time Management</li>
                  <li>• Adaptability</li>
                </ul>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
