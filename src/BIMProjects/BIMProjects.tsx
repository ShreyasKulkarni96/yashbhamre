"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./BIMProjectCard";
import ProjectModal from "./BIMProjectModel";

const tabs = [
  "All",
  "Authoring",
  "Coordination",
  "Clash",
  "Delivery",
];

const projectsData = [
  {
    id: 1,
    category: [
      "Authoring",
      "Delivery"
    ],
    title: "Structural Model Authoring (LOD 300–400)",
    description: "Accurate models with consistent data structure and coordination readiness.",
    role: "Structural BIM Engineer",
    overview: "High-quality structural models aligned with grids/levels, naming, and data requirements.",
    codes: "Project BIM standards / ISO 19650 principles",
    challenges: "Maintaining model integrity across changes and multiple stakeholders.",
    outcomes: "Cleaner downstream coordination and fewer modelling conflicts.",
    tools: "Revit, Tekla",
    scope: "Families/assemblies, model QA, sheet setup, exports.",
    image: "/image1.jpeg",
  },
  {
    id: 2,
    category: ["Coordination", "Clash"],
    title: "Navisworks Clash Detection & Resolution",
    description: "Repeatable clash workflows with clear accountability and closure discipline.",
    role: "BIM Coordinator",
    overview: "Clash tests, issue classification, coordination meetings, and closure tracking.",
    codes: "BEP / CDE workflows (as applicable)",
    challenges: "High-density services zones and late changes.",
    outcomes: "Reduced coordination risk and improved constructability.",
    tools: "Navisworks Manage, Revit",
    scope: "Clash rulesets, viewpoints, reports, RFI-style communication.",
    image: "/image2.jpeg",
  },
    {
    id: 3,
    category: ["Coordination", "Delivery"],
    title: "Interdisciplinary Coordination (STR + MEP + ARC)",
    description: "Strong coordination rhythm with structured reviews and decision tracking.",
    role: "BIM / Design Coordinator",
    overview: "Coordination cycles, model federation, and issue management for multi-discipline teams.",
    codes: "ISO 19650 mindset",
    challenges: "Multiple stakeholders and strict deadlines.",
    outcomes: "Clearer coordination and less rework near deadlines.",
    tools: "Revit, Navisworks, BIM 360 (as applicable)",
    scope: "Model federation, review sets, coordination notes, change control.",
    image: "/image3.jpeg",
  },
      {
    id: 4,
    category: ["Delivery"],
    title: "BIM Standards & Documentation",
    description: "Clean standards that keep delivery predictable and coordination friction low.",
    role: "BIM Specialist",
    overview: "Structured documentation: standards, BEP inputs, QA processes.",
    codes: "ISO 19650 (OIR/PIR/AIR concepts)",
    challenges: "Maintaining consistency across teams.",
    outcomes: "Higher model quality and smoother handovers.",
    tools: "Templates, QA checklists, naming conventions",
    scope: "Naming, LOD, QA gates, deliverable checks.",
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
    <section id="bim" className="py-20 ">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-950 via-slate-700 to-slate-400
      bg-clip-text text-transparent">
            BIM Projects
          </h2>
          <p className="text-gray-600 mt-3">
            Structured workflow, issue tracking, and coordinated outputs for design & construction teams.
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
