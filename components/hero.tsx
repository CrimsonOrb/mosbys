"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TextLogo from "../public/assets/text.png";
import { AiOutlineMail } from "react-icons/ai";

export default function Hero() {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.8 } };
  const hidden = { opacity: 0, y: -100 };

  return (
    <AnimatePresence>
      <motion.article
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <motion.h1
          variants={{ hidden, visible }}
          className="text-center text-6xl sm:text-8xl lg:text-9xl font-bold text-[#5651e5]"
        >
          <Image src={TextLogo} alt="Mosby's Land Management Service" />
        </motion.h1>
        <motion.p
          variants={{ hidden, visible }}
          className="text-center text-foreground text-sm sm:text-md lg:text-xl"
        >
          We provide professional land management services for residential and
          commercial properties.
        </motion.p>
        <motion.p
          variants={{ hidden, visible }}
          className="text-center hover:underline text-red-400 text-sm sm:text-md lg:text-xl mt-1"
        >
          <Link href="/contact">Contact us today for a free estimate ➜</Link>
        </motion.p>
        <motion.div className="w-full flex items-center justify-center py-4 gap-8">
          <motion.div
            variants={{ hidden, visible }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <Link href="/contact" rel="noreferrer">
              <div className="rounded-full shadow-lg p-6 cursor-pointer">
                <AiOutlineMail size={20} />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.article>
    </AnimatePresence>
  );
}
