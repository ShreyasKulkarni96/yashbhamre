"use client";

import { useState, useEffect } from "react";
import Hero from "@/src/Hero";
import LoadingAnimation from "@/src/LoadingAnimation";
import Navbar from "@/src/Navbar";
import StructuralProjects from "@/src/StructuralProjects/StructuralProjects";
import BIMProjects from "@/src/BIMProjects/BIMProjects";
import AboutSection from "@/src/AboutSection";
import Contact from "@/src/Contact";


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (3 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <>
      <main className="pt-32">
        <Navbar />
        <Hero />
        <StructuralProjects/>
        <BIMProjects/>
        <AboutSection/>
        <Contact/>
      </main>
    </>
  );
}
