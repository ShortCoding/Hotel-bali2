"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative h-[80vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/0/0e/A_view_of_entrance_stairs_to_Pura_Besakih_Hindu_Temple_Bali_Indonesia.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="relative z-10 text-center space-y-6 max-w-3xl mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Discover Paradise in Bali
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Find your perfect stay among our curated collection of luxury resorts, boutique hotels, and private villas
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/hotels">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Explore Hotels
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}