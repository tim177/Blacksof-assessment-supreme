"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute top-6 left-6 z-50"
    >
      <Image
        src="https://supreme-group.vercel.app/static/media/logo.68f5b8493efb88f7cd65756bf67a1f5b.svg"
        alt="Supreme Group"
        width={180}
        height={50}
        className="object-contain"
        priority
      />
    </motion.div>
  );
}
