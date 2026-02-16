"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 
      backdrop-blur-xl bg-white/30 
      border-b border-white/20 
      shadow-[0_8px_30px_rgba(0,0,0,0.08)]">

            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* LEFT */}
                <div className="flex items-center gap-3">

                    <img
                        src="/yb.svg"
                        alt="YB Logo"
                        className="w-7 h-7 object-contain"
                    />

                    <div className="flex flex-col leading-tight">

                        {/* Name */}
                        <span className="font-extrabold text-lg tracking-wide 
      bg-gradient-to-r from-slate-950 via-slate-400 to-slate-100
      bg-clip-text text-transparent">
                            Yash Bhamre
                        </span>

                        {/* Tagline */}
                        <span className="text-[8px] uppercase tracking-[0.1em] text-gray-400 ">
                            Structural • BIM • Digital Delivery
                        </span>

                    </div>
                </div>


                {/* CENTER */}
                <nav className="hidden md:flex gap-10 text-sm font-semibold tracking-wide">
                    {["Structural", "BIM", "About", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="relative group transition duration-300"
                        >
                            <span className="group-hover:bg-gradient-to-r 
                group-hover:from-slate-950 
                group-hover:to-slate-400
                group-hover:bg-clip-text 
                group-hover:text-transparent">
                                {item}
                            </span>

                            {/* Underline animation */}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] 
                bg-gradient-to-r from-slate-950 via-slate-600 to-slate-400
                transition-all duration-300 group-hover:w-full">
                            </span>
                        </a>
                    ))}
                </nav>

                {/* RIGHT */}
                <motion.a
                    href="/Yash_Bhamre_CV.pdf"  // file inside public folder
                    download
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden md:block px-6 py-2 
    bg-gradient-to-r from-slate-950 via-slate-600 to-slate-400
    text-white font-semibold text-sm
    rounded-md shadow-lg 
    hover:shadow-xl 
    transition duration-300"
                >
                    Download CV
                </motion.a>

                {/* Mobile */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>

            </div>
        </header>
    );
}
