"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModel";

const tabs = [
  "All",
  "Steel",
  "Reinforced Concrete",
  "Industrial",
  "Buildings",
];

const projectsData = [
  {
    id: 1,
    category: [
      "Steel",
      "Industrial"
    ],
    title: "Industrial Pipe Rack & Platforms",
    description:
      "Analysis-driven steel design with practical detailing inputs and coordination-ready deliverables.",
    role: "Structural Design Engineer",
    overview: "Steel pipe racks, pipe bridges and process platforms designed for ULS/SLS with constructability focus.",
    codes: "Eurocodes / IS / AISC (as applicable)",
    challenges: "Heavy equipment loads, thermal effects, multiple load combinations, tight interfaces.",
    outcomes: "Optimised member sizing, clear load paths, improved erection sequencing through design coordination.",
    tools: "STAAD.Pro, Excel, AutoCAD, Tekla",
    scope: "Global analysis, member design, connections input, fabrication-ready drawings support.",
    image: "/image1.jpeg",
  },
  {
    id: 2,
    category: ["Reinforced Concrete", "Industrial", "Buildings"],
    title: "RC Building + Raft Foundation",
    description:
      "Reinforced concrete design with attention to deflection, cracking, and buildability.",
    role: "Structural Design Engineer",
    overview: "RC building framing, slabs, cores, and foundation concept designed for serviceability and seismic demands.",
    codes: "Eurocodes / IS (as applicable)",
    challenges: "Serviceability limits, construction joints, coordination with MEP openings.",
    outcomes: "Clear reinforcement strategy and coordination-ready drawings reduced rework.",
    tools: "STAAD.Pro, Excel, AutoCAD",
    scope: "Load take-down, slab/beam/column design, foundation sizing, detailing notes.",
    image: "/image2.jpeg",
  },
    {
    id: 3,
    category: ["Steel", "Buildings"],
    title: "Steel Framing (Commercial)",
    description:
      "Bold, clean framing schemes with stability strategy and coordination at core.",
    role: "Structural Engineer",
    overview: "Primary steel framing scheme, stability approach, and detailing coordination.",
    codes: "Eurocodes / AISC (as applicable)",
    challenges: "Architectural constraints and tight coordination with services.",
    outcomes: "Optimised framing grid and coordination reduced late changes.",
    tools: "Tekla, Excel, AutoCAD",
    scope: "Member sizing, stability/bracing concept, interface coordination.",
    image: "/image3.jpeg",
  },
      {
    id: 4,
    category: ["RC", "Industrial"],
    title: "RC Equipment Foundations",
    description:
      "Foundation concepts designed for stability, performance, and site practicality.",
    role: "Structural Design Engineer",
    overview: "Foundation design for equipment loads with checks for bearing, sliding, overturning, and detailing.",
    codes: "ACI / IS (as applicable)",
    challenges: "Dynamic/operational loads and tight construction tolerances.",
    outcomes: "Robust checks and detailing reduced site queries.",
    tools: "Excel, STAAD.Pro (as required), AutoCAD",
    scope: "Load combinations, baseplate/grout considerations, detailing notes.",
    image: "/image4.jpeg",
  },
];

export default function StructuralProjects() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((p) =>
          p.category.includes(activeTab)
        );

  return (
    <section id="structural" className="py-20 ">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-950 via-slate-700 to-slate-400
      bg-clip-text text-transparent">
            Structural Projects
          </h2>
          <p className="text-gray-600 mt-3">
            Steel + RC · Analysis + Design · Industrial + Buildings
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition
                ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-slate-950 via-slate-600 to-slate-400 text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* SLIDE ANIMATION CONTAINER */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -60, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
