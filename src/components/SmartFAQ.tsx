/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Send, Sparkles, Loader2 } from 'lucide-react';
import { askSmartFAQ } from '../services/geminiService';
import Markdown from 'react-markdown';

export default function SmartFAQ() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    setResponse('');
    const answer = await askSmartFAQ(query);
    setResponse(answer || '');
    setLoading(false);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-sky/20 text-brand-sky font-bold text-xs uppercase tracking-widest mb-4">
            <Sparkles className="w-3 h-3" /> AI Powered FAQ
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Have <span className="text-brand-sky">Questions?</span> Ask Me!</h2>
          <p className="text-slate-500 font-medium italic">Our Smart Assistant is here to help you 24/7 with Admissions, Campus, and Curriculum queries.</p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm border-b-8 border-brand-sky">
          <form onSubmit={handleAsk} className="relative mb-8">
            <input 
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. What is the teacher-to-student ratio?"
              className="w-full px-8 py-6 pr-20 rounded-3xl bg-white border border-slate-200 focus:ring-4 focus:ring-brand-sky/20 outline-none transition-all font-bold text-slate-800"
            />
            <button 
              type="submit" 
              disabled={loading}
              className="absolute right-3 top-3 bottom-3 px-6 bg-brand-sky text-white rounded-2xl flex items-center justify-center hover:bg-brand-sky/90 transition-all disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Send className="w-6 h-6" />}
            </button>
          </form>

          {response && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-3xl border-l-8 border-brand-amber shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-xl bg-brand-amber/10 text-brand-amber">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="prose prose-slate max-w-none text-slate-700 font-medium leading-relaxed">
                  <Markdown>{response}</Markdown>
                </div>
              </div>
            </motion.div>
          )}

          {!response && !loading && (
            <div className="flex flex-wrap gap-3 justify-center">
              {['Teacher ratio?', 'Safety measures?', 'School timings?', 'Curriculum?'].map(q => (
                <button 
                  key={q}
                  onClick={() => setQuery(q)}
                  className="px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-500 hover:border-brand-sky hover:text-brand-sky transition-all cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
