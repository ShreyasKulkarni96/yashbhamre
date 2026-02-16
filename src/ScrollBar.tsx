"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BuildingScrollProgress() {
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);

  return (
    <motion.div
      style={{ height }}
      className="fixed right-10 bottom-0 w-1 bg-blue-600"
    />
  );
}
