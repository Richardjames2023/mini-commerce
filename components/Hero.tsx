'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative bg-blue-50 py-24 px-6 rounded-3xl overflow-hidden shadow-lg"
      style={{
        backgroundImage: 'url("/images/hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left - Text Section */}
        <motion.div
          className="text-center md:text-left md:flex-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#ffc029] mb-4 leading-tight">
            Discover Simple <span className='text-blue-700'>Shopping.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Mini-Commerce gives you the cleanest mock eCommerce experience fast, interactive, and all client-side.
          </p>
          <Link
            href="/products"
            className="inline-block bg-[#ffc029] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-600 hover:scale-105 transition transform duration-300"
          >
            Shop Now
          </Link>
        </motion.div>

        {/* Right - Hero Image */}
        <motion.div
          className="relative w-full md:w-[90%] h-[300px] md:h-[400px] flex-1"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* <Image
            src="/images/hero.png" 
            alt="Hero illustration"
            fill
            className="object-contain"
            priority
          /> */}
        </motion.div>
      </div>
    </section>
  );
}
