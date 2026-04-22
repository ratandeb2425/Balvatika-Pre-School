/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrandConfig } from '../constants/BrandConfig';
import { ArrowRight, Check, Calendar, User, Mail, UserPlus, Download } from 'lucide-react';

export default function AdmissionsForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    childAge: '',
    tourDate: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const recommendedLevel = formData.childAge === '3' ? 'Balvatika 1' : 
                          formData.childAge === '4' ? 'Balvatika 2' : 
                          formData.childAge === '5' ? 'Balvatika 3' : 'Our Specialized Program';

  if (isSuccess) {
    return (
      <div className="bg-white p-12 rounded-[40px] shadow-2xl text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-20 h-20 bg-brand-leaf rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-leaf-200"
        >
          <Check className="w-10 h-10 text-white" />
        </motion.div>
        <h3 className="text-3xl font-bold text-slate-900 mb-4">Application Received!</h3>
        <p className="text-slate-600 mb-10 leading-relaxed">
          Welcome to the Balvatika family, <span className="font-bold text-slate-900">{formData.parentName}</span>. 
          We've sent a detailed orientation pack to {formData.email}.
        </p>
        <button className="inline-flex items-center gap-3 px-8 py-4 bg-brand-sky text-white rounded-2xl font-bold hover:shadow-lg transition-all">
          <Download className="w-5 h-5" /> Download Welcome PDF
        </button>
      </div>
    );
  }

  return (
    <section id="apply" className="py-24 bg-brand-sky/5">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Start Your <span className="text-brand-sky">Journey</span></h2>
          <p className="text-slate-500 font-medium">Complete our quick 3-step admission inquiry.</p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100">
          {/* Progress Bar */}
          <div className="flex gap-2 mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex-1 h-3 rounded-full overflow-hidden bg-slate-100">
                <motion.div
                  initial={false}
                  animate={{ 
                    width: s <= step ? '100%' : '0%',
                    backgroundColor: s === step ? '#F59E0B' : s < step ? '#22C55E' : '#E2E8F0'
                  }}
                  className="h-full"
                />
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <User className="text-brand-sky" /> About You
                  </h3>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.parentName}
                      onChange={e => setFormData({...formData, parentName: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-sky focus:bg-white outline-none transition-all font-bold"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-sky focus:bg-white outline-none transition-all font-bold"
                      placeholder="hello@example.com"
                    />
                  </div>
                  <button type="button" onClick={nextStep} className="w-full py-4 bg-brand-amber text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-amber-100">
                    Next Step <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <UserPlus className="text-brand-amber" /> Child's Info
                  </h3>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-4">Child's Age (Years)</label>
                    <div className="grid grid-cols-3 gap-4">
                      {['3', '4', '5'].map(age => (
                        <button
                          key={age}
                          type="button"
                          onClick={() => setFormData({...formData, childAge: age})}
                          className={`py-4 rounded-2xl font-bold border-2 transition-all ${formData.childAge === age ? 'bg-brand-amber text-white border-brand-amber scale-105' : 'bg-slate-50 border-slate-100 text-slate-500'}`}
                        >
                          {age}+
                        </button>
                      ))}
                    </div>
                  </div>
                  {formData.childAge && (
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="p-4 rounded-2xl bg-brand-sky/10 text-brand-sky border border-brand-sky/20">
                      <p className="text-sm font-bold">Recommended Level: <span className="underline">{recommendedLevel}</span></p>
                    </motion.div>
                  )}
                  <div className="flex gap-4">
                    <button type="button" onClick={prevStep} className="flex-1 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold">Back</button>
                    <button type="button" onClick={nextStep} disabled={!formData.childAge} className="flex-[2] py-4 bg-brand-amber text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg disabled:opacity-50">
                      Next Step <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Calendar className="text-brand-leaf" /> Tour Date
                  </h3>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Tour Date</label>
                    <input 
                      required
                      type="date" 
                      value={formData.tourDate}
                      onChange={e => setFormData({...formData, tourDate: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-sky focus:bg-white outline-none transition-all font-bold"
                    />
                  </div>
                  <div className="flex gap-4">
                    <button type="button" onClick={prevStep} className="flex-1 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold">Back</button>
                    <button type="submit" className="flex-[2] py-4 bg-brand-leaf text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-leaf-100">
                      Submit Application <Check className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
}
