/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Trust from './components/Trust';
import AdmissionsForm from './components/AdmissionsForm';
import SmartFAQ from './components/SmartFAQ';
import Footer from './components/Footer';
import { SEOConfig } from './lib/seo';

export default function App() {
  useEffect(() => {
    // Basic SEO update
    document.title = SEOConfig.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', SEOConfig.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = SEOConfig.description;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-brand-sky/30">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Trust />
        <SmartFAQ />
        <AdmissionsForm />
      </main>
      <Footer />
      
      {/* Script for Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(SEOConfig.schema)}
      </script>
    </div>
  );
}
