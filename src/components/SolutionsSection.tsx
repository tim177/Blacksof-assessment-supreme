"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="min-h-[500px] flex items-center justify-center bg-black text-white px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold">
          Evolving the drive with{" "}
          <span className="text-white font-bold">360-degree</span>
          <br />
          comprehensive solutions
        </h2>
      </motion.div>
    </section>
  );
}
