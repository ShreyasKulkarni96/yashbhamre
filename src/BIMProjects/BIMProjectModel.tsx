import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

export default function BIMProjectModal({ project, onClose }: any) {

    const handleOverlayClick = () => {
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-md 
                 flex justify-center items-center z-50 px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.4 }}
      onClick={handleOverlayClick}
        className="bg-neutral-900 border border-white/10 
                   rounded-2xl max-w-5xl w-full 
                   overflow-y-auto max-h-[90vh] 
                   shadow-2xl relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full 
                     bg-white/5 backdrop-blur-md 
                     border border-white/10 
                     hover:bg-white/10 transition"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Content */}
        <div className="p-10 space-y-10">

          {/* Title */}
          <div>
            <h2 className="text-4xl font-bold text-white">
              {project.title}
            </h2>

            {/* Category tags */}
            <div className="flex flex-wrap gap-3 mt-4">
              {project.category.map((cat: string, index: number) => (
                <span
                  key={index}
                  className="px-4 py-1 text-xs rounded-full 
                             bg-white/5 backdrop-blur-md 
                             border border-white/10 
                             text-gray-300"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Newspaper Layout */}
          <div className="grid md:grid-cols-2 gap-10 text-neutral-300 leading-relaxed">

            {/* LEFT COLUMN */}
            <div className="space-y-6">
              <Section title="Overview" content={project.overview} />
              <Section title="Role" content={project.role} />
              <Section title="Tools" content={project.tools} />
              <Section title="Codes / Standards" content={project.codes} />
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6">
              <Section title="Scope" content={project.scope} />
              <Section title="Challenges" content={project.challenges} />
              <Section title="Outcomes" content={project.outcomes} />
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Section({ title, content }: any) {
  return (
    <div>
      <h4 className="text-sm uppercase tracking-widest 
                     text-gray-400 mb-2">
        {title}
      </h4>
      <p className="text-neutral-300 text-sm">
        {content}
      </p>
    </div>
  );
}
