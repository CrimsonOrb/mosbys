"use client";

import About from "../components/about";
import Hero from "../components/hero";

import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <main className="flex min-h-screen flex-col items-center justify-between md:p-24 py-24">
          <div className="space-y-24 my-10 md:mt-0 w-3/4 xl:w-3/5">
            <div className="my-16">
              <div className="mt-16 xl:my-28">
                <Hero />
              </div>
              <div className="mt-16 xl:mt-28">
                <About />
              </div>
            </div>
          </div>
        </main>
      </motion.div>
    </AnimatePresence>
  );
}
