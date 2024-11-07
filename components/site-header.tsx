"use client";

import Link from "next/link";
import { MainNavigation } from "@/components/navigation-menu";
import { motion } from "framer-motion";

export function SiteHeader() {
  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl pl-2">
          Hotels Bali
        </Link>
        <MainNavigation />
      </div>
    </motion.header>
  );
}