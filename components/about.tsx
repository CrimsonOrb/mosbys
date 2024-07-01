"use client";

import { motion, AnimatePresence } from "framer-motion";
import Introduction from "./introduction";
import Services from "./services";

export default function About() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl mb-6 text-center font-semibold text-red-400">
          About Us
        </h1>
        <div className="flex flex-col justify-center item-center gap-8">
          <Introduction />
          <Services />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
