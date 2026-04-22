/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { BrandConfig } from '../constants/BrandConfig';
import { ArrowRight, Play, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-12 gap-8 items-center h-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-7 space-y-8"
        >
          <div className="inline-block px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-bold uppercase tracking-wider">
            Enrolling for 2026-27
          </div>
          
          <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.1] text-gray-900 tracking-tight">
            Where Play Ignites <span className="text-brand-leaf">Holistic Growth.</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            A nurturing sanctuary designed for the curious mind. We combine global pedagogies with nature-based learning to secure your child's first steps towards a bright future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-brand-leaf text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-brand-leaf/90 transition-all">
              {BrandConfig.cta.primary}
            </button>
            <button className="border-2 border-gray-200 bg-white text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all">
              {BrandConfig.cta.secondary}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="col-span-5 flex justify-center relative"
        >
          <svg width="320" height="320" viewBox="0 0 200 200" className="drop-shadow-2xl">
            <circle cx="100" cy="100" r="90" fill="#E0F2FE"/>
            <rect x="95" y="110" width="10" height="50" fill="#92400E"/>
            <path d="M100 40 C140 40, 160 80, 100 120 C40 80, 60 40, 100 40" fill="#22C55E"/>
            <circle cx="75" cy="75" r="25" fill="#4ADE80"/>
            <circle cx="125" cy="75" r="25" fill="#4ADE80"/>
            <circle cx="100" cy="65" r="30" fill="#16A34A"/>
            <motion.circle 
              cx="85" cy="95" r="10" 
              fill="#F97316"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <motion.circle 
              cx="120" cy="100" r="8" 
              fill="#F97316"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: 1 }}
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
