import { motion } from "framer-motion";
import Image from "next/image";

export default function BIMProjectCard({ project, onClick }: any) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="bg-white backdrop-blur-xl border border-gray-300 
                 rounded-2xl overflow-hidden shadow-xl cursor-pointer 
                 hover:border-gray/20 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-56 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-600">
          {project.title}
        </h3>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {project.category.map((cat: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full 
                         bg-gray-700/10 backdrop-blur-md 
                         border border-gray-700/10 
                         text-gray-500"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-neutral-500 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Role Tag */}
        <div>
          <span className="px-4 py-1 text-xs rounded-full font-semibold
                           bg-gradient-to-r from-slate-700 to-slate-400
                           backdrop-blur-md 
                           border border-gray-500/10 
                           text-white">
            Role: {project.role}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
