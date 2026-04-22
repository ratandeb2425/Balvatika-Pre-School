/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, Award, Users } from 'lucide-react';

const testimonials = [
  { id: 1, author: "Priya Sharma", role: "Parent", text: "Balvatika has been a second home for my daughter. The focus on play-based learning is truly visible in her growth." },
  { id: 2, author: "Rahul Verma", role: "Parent", text: "The transparency and safety measures are unmatched. I feel completely at peace when my son is at school." },
  { id: 3, author: "Anjali Gupta", role: "Educator", text: "A fantastic curriculum that actually follows the government's Balvatika guidelines with a premium touch." },
];

const certifications = [
  { name: "ISO Certified", icon: <ShieldCheck className="w-8 h-8" /> },
  { name: "Early Ed Award", icon: <Award className="w-8 h-8" /> },
  { name: "Global Standard", icon: <Star className="w-8 h-8" /> },
  { name: "Safe Campus", icon: <Users className="w-8 h-8" /> },
];

export default function Trust() {
  return (
    <section id="trust" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Trusted by <span className="text-brand-sky">500+ Families</span> Globally</h2>
            
            <div className="space-y-6">
              {testimonials.map((t, idx) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 italic text-slate-600 relative"
                >
                  <div className="absolute top-4 right-4 flex gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-brand-amber fill-brand-amber" />)}
                  </div>
                  <p className="mb-4">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-brand-sky">
                      {t.author[0]}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 not-italic">{t.author}</h4>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 not-italic">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-center mb-10">Our Accreditations</h3>
            <div className="grid grid-cols-2 gap-8">
              {certifications.map((c, idx) => (
                <motion.div
                  key={c.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-gray-50 group hover:bg-brand-sky/5 transition-colors"
                >
                  <div className="p-4 rounded-xl bg-white text-brand-leaf group-hover:text-brand-sky transition-colors shadow-sm">
                    {c.icon}
                  </div>
                  <span className="font-bold text-slate-800 text-sm">{c.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
