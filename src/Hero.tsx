"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Layers3, Boxes, User } from "lucide-react";


const images = [
    "/image1.jpeg",
    "/image2.jpeg",
    "/image3.jpeg",
    "/image4.jpeg"
];

export default function Hero() {
    const [index, setIndex] = useState(0);

    // Auto slider
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};


    return (
        <section className="min-h-screen flex items-center px-6 lg:px-20">
            <div className="grid lg:grid-cols-5 gap-10 w-full items-center">

                <div className="lg:col-span-3 flex flex-col justify-center">

                    {/* Status Badge */}
                    <div className="flex items-center gap-3 
                  bg-white/5 backdrop-blur-md 
                  border border-white/10 
                  px-5 py-2.5 rounded-full 
                  w-fit mb-8 shadow-sm">

                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>

                        <span className="text-sm text-gray-500 tracking-wide">
                            Open to: UK / Middle East · Structural + BIM Roles
                        </span>
                    </div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-6xl font-bold leading-[1.1] bg-gradient-to-r from-slate-950 via-slate-400 to-slate-100
      bg-clip-text text-transparent"
                    >
                        Yash Bhamre<br />
                    </motion.h1>

                    {/* Description */}
                    <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">
                        Structural Engineer with 5+ years experience across industrial &
                        building projects, combining design rigor with digital coordination
                        (Revit / Tekla / Navisworks).
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">

                        {/* PRIMARY BUTTON */}
                        <motion.button
                            whileHover={{ y: -4 }}
                            onClick={() => scrollToSection("structural")}
                            className="flex items-center gap-2 px-8 py-3 
                 bg-white/5 backdrop-blur-md
                 border border-gray-600 
                 text-gray-500 
                 rounded-xl shadow-md
                 transition-all duration-300
                 hover:bg-gradient-to-r 
                 hover:from-slate-950
                 hover:to-slate-400
                 hover:text-white 
                 hover:border-transparent"
                        >
                            <Layers3 size={18} />
                            Explore Structural
                        </motion.button>

                        {/* SECONDARY BUTTON - BIM */}
                        <motion.button
                        onClick={() => scrollToSection("bim")}
                            whileHover={{ y: -4 }}
                            className="flex items-center gap-2 px-8 py-3 
                 bg-white/5 backdrop-blur-md
                 border border-gray-600 
                 text-gray-500 
                 rounded-xl shadow-md
                 transition-all duration-300
                 hover:bg-gradient-to-r 
                 hover:from-slate-950
                 hover:to-slate-400
                 hover:text-white 
                 hover:border-transparent"
                        >
                            <Boxes size={18} />
                            Explore BIM
                        </motion.button>

                        {/* SECONDARY BUTTON - ABOUT */}
                        <motion.button
                        onClick={() => scrollToSection("about")}
                            whileHover={{ y: -4 }}
                            className="flex items-center gap-2 px-8 py-3 
                 bg-white/5 backdrop-blur-md
                 border border-gray-600 
                 text-gray-500 
                 rounded-xl shadow-md
                 transition-all duration-300
                 hover:bg-gradient-to-r 
                 hover:from-slate-950
                 hover:to-slate-400 
                 hover:text-white 
                 hover:border-transparent"
                        >
                            <User size={18} />
                            About Me
                        </motion.button>

                    </div>
                </div>

                <div className="lg:col-span-2 relative h-[400px] lg:h-[500px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">

                    {images.map((img, i) => (
                        <motion.img
                            key={i}
                            src={img}
                            alt="Project"
                            className="absolute w-full h-full object-cover"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: i === index ? 1 : 0 }}
                            transition={{ duration: 1 }}
                        />
                    ))} 


                </div>
                                
            </div>
        </section>
    );
}
