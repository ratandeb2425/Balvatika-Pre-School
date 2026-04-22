/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { BrandConfig } from '../constants/BrandConfig';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-brand-sky font-bold uppercase tracking-widest text-sm mb-4"
          >
            Our Curriculum
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Programs Tailored for Every <span className="text-brand-amber">Little Explorer</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {BrandConfig.levels.map((level, index) => (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white p-8 rounded-3xl border-b-4 shadow-sm group transition-all hover:shadow-md
                ${level.color === 'amber' ? 'border-brand-amber' : 
                  level.color === 'sky' ? 'border-brand-sky' : 
                  'border-brand-leaf'}`}
            >
              <div className={`w-10 h-10 rounded-full mb-6 flex items-center justify-center font-bold
                ${level.color === 'amber' ? 'bg-orange-100 text-orange-600' : 
                  level.color === 'sky' ? 'bg-sky-100 text-sky-600' : 
                  'bg-green-100 text-green-600'}`}>
                {index + 1}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{level.name}</h3>
              <p className="text-sm text-gray-500 mb-6">{level.focus}</p>

              <div className="space-y-3 mb-8 flex-grow">
                {level.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-gray-300" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                <span className={`text-xs font-bold uppercase tracking-wider
                   ${level.color === 'amber' ? 'text-brand-amber' : 
                     level.color === 'sky' ? 'text-brand-sky' : 
                     'text-brand-leaf'}`}>
                  Learn More &rarr;
                </span>
                <span className="text-[10px] bg-gray-100 px-2 py-1 rounded text-gray-500 font-bold">
                  {level.age}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
