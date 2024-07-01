"use client";

import { Card, CardContent } from "../components/ui/card";
import { Widget } from "@typeform/embed-react";
import { AnimatePresence, motion } from "framer-motion";

export default function ContactForm() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex min-h-[200px] flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-center mb-8 text-red-400">
            Contact us today for a free estimate below!
          </h1>
          <Card className="w-full max-w-2xl">
            <CardContent>
              <Widget id="N041JRcW" className="p-6 h-[450px] md:h-[500px]" />
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
