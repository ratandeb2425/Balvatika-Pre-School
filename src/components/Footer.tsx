/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Heart, Instagram, Facebook, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import { BrandConfig } from '../constants/BrandConfig';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-8 h-8 text-brand-amber" fill="currentColor" />
              <span className="text-3xl font-bold tracking-tight">{BrandConfig.name}</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed font-medium">
              We provide a nurturing environment where children can thrive through play, 
              exploration, and discovery. Join our community of lifelong learners.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-brand-sky hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-brand-sky shrink-0" />
                <span>Bakul Ban Path, Opposite postal Training Centre, Kerakuch, ii, Sawkuchi, Guwahati, Assam 781040</span>
              </div>
              <div className="flex gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-brand-amber shrink-0" />
                <span>hello@balvatika.edu</span>
              </div>
              <div className="flex gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-brand-leaf shrink-0" />
                <span>+91 8471991316</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-slate-400 font-bold">
              {['Programs', 'Admissions', 'Trust', 'FAQ'].map(item => (
                <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-brand-sky transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[11px] font-extrabold uppercase tracking-[0.2em] opacity-60">
          <div className="flex gap-8">
            <p>© 2026 BalVatika Pre-School</p>
            <span>Cambridge Early Years Partner</span>
          </div>
          <div className="flex gap-4 items-center">
            <span>Safety Certified</span>
            <span>•</span>
            <span>Expert Faculty</span>
            <span>•</span>
            <span>Organic Meals</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
