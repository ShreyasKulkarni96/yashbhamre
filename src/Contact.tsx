"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const personalEmail = "yashbhamre27@gmail.com"

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendEmail = () => {
    const subject = `Message from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
`;

    window.location.href = `mailto:${personalEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-950 via-slate-700 to-slate-400
            bg-clip-text text-transparent tracking-tight">
              Let’s Connect
            </h2>

            {/* FORM */}
            <div className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-xl border border-gray-300 
                           focus:outline-none focus:ring-2 focus:ring-gray-900"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-xl border border-gray-300 
                           focus:outline-none focus:ring-2 focus:ring-gray-900"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-xl border border-gray-300 
                           focus:outline-none focus:ring-2 focus:ring-gray-900"
              />

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 pt-4">

                <button
                  onClick={handleSendEmail}
                  className="px-6 py-3 rounded-xl  bg-gradient-to-r from-slate-950 via-slate-600 to-slate-400 text-white 
                             hover:bg-black hover:shadow-xl transition duration-300"
                >
                  Send Email
                </button>

                <a
                  href="http://linkedin.com/in/yash-bhamre-398773295"
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl 
                             border border-gray-300 
                             hover:bg-gray-100 transition"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>

              </div>

            </div>
          </div>

          {/* RIGHT SIDE STATIC IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/yashcari.png" // make sure image is inside /public
              alt="Civil Engineer Waving"
              width={320}
              height={320}
              priority
              className="drop-shadow-xl"
            />
          </div>



        </div>

        {/* FOOTER */}
        <div className="text-center mt-20 text-gray-500 text-sm">
          © 2026 Yash Bhamre. Structural & BIM Engineer
        </div>

      </div>
    </section>
  );
}
