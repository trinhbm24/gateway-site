'use client';

import React, { useEffect } from 'react';
import SharedFooter from '../components/SharedFooter';

export default function ContactPage() {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href =
      'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=DM+Sans:wght@300;400;500;600&display=swap';
    document.head.appendChild(fontLink);
    return () => {
      if (document.head.contains(fontLink)) document.head.removeChild(fontLink);
    };
  }, []);

  const serif = "'Fraunces', Georgia, 'Times New Roman', serif";
  const sans = "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif";

  const c = {
    bg: '#FAF6EE',
    bgDeep: '#F1E9D6',
    ink: '#1A1714',
    inkSoft: '#5D5550',
    inkMuted: '#8A8278',
    accent: '#A8462C',
    accentSoft: '#E8D4C2',
    line: '#D9CFB8',
  };

  return (
    <div
      style={{
        fontFamily: sans,
        background: c.bg,
        color: c.ink,
        minHeight: '100vh',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <style>{`
        .gw-link { transition: color 0.2s; }
        .gw-link:hover { color: ${c.accent}; }
      `}</style>

      {/* Nav */}
      <nav
        className="sticky top-0 z-50 backdrop-blur-md"
        style={{ background: 'rgba(250, 246, 238, 0.88)', borderBottom: `1px solid ${c.line}` }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-5 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3">
            <img src="/gateway-logo.png" alt="Gateway" className="h-12 w-12 object-contain" />
            <span className="text-2xl" style={{ fontFamily: serif, fontWeight: 500, color: c.ink }}>
              Gateway
            </span>
            <span style={{ color: c.accent, fontFamily: serif }}>·</span>
            <span
              className="text-xs uppercase hidden sm:inline"
              style={{ fontFamily: sans, letterSpacing: '0.22em', color: c.inkSoft, fontWeight: 500 }}
            >
              Impact Lab
            </span>
          </a>
          <a href="/" className="text-xs uppercase tracking-widest gw-link" style={{ color: c.inkSoft, fontWeight: 500 }}>← Home</a>
        </div>
      </nav>

      {/* Main content */}
      <section className="px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div className="text-xs uppercase md:sticky md:top-24" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>
              Contact
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <h1
              className="text-4xl md:text-6xl mb-10 leading-[1.05]"
              style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.02em' }}
            >
              Email is best.
            </h1>
            <p className="text-lg leading-relaxed mb-16" style={{ color: c.inkSoft }}>
              If you are a school, an organization, or someone working on the same question, I would like to hear from you.
            </p>

            <div className="space-y-10">
              <div>
                <div className="text-xs uppercase mb-3" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>
                  Email
                </div>
                <a
                  href="mailto:long_trinh@gse.harvard.edu"
                  className="text-lg gw-link"
                  style={{ color: c.ink, textDecoration: 'underline', textUnderlineOffset: '4px' }}
                >
                  long_trinh@gse.harvard.edu
                </a>
              </div>

              <div>
                <div className="text-xs uppercase mb-3" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>
                  LinkedIn
                </div>
                <a
                  href="https://www.linkedin.com/in/long-trinh-47b61042/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base gw-link"
                  style={{ color: c.ink, textDecoration: 'underline', textUnderlineOffset: '4px' }}
                >
                  Long Trinh
                </a>
              </div>

              <div>
                <div className="text-xs uppercase mb-3" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>
                  Based in
                </div>
                <p className="text-base leading-relaxed" style={{ color: c.inkSoft }}>
                  San Francisco Bay Area<br />Cambridge, MA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter c={c} serif={serif} />
    </div>
  );
}
