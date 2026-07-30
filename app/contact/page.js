'use client';

import React, { useEffect } from 'react';

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

  const FORM_URL =
    'https://docs.google.com/forms/d/e/1FAIpQLSfwulLmtaB55wADoGW0nXgC9-p66LrGUmK1QlDPMU8-UmCQZg/viewform?usp=header';

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
        .gw-cta-dark { transition: background 0.2s; }
        .gw-cta-dark:hover { background: #2C2521; }
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
          <div className="flex items-center gap-6 md:gap-10">
            <a href="/" className="text-xs uppercase tracking-widest hidden md:inline gw-link" style={{ color: c.ink, fontWeight: 500 }}>Home</a>
            <a href="/co-design" className="text-xs uppercase tracking-widest hidden md:inline gw-link" style={{ color: c.ink, fontWeight: 500 }}>Co-design Tool</a>
            <a href="/partners" className="text-xs uppercase tracking-widest hidden md:inline gw-link" style={{ color: c.ink, fontWeight: 500 }}>Partners</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase mb-8" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>
            — Get in Touch
          </div>
          <h1
            className="text-5xl md:text-7xl leading-[1.02] mb-8 max-w-4xl"
            style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.02em' }}
          >
            Start the<br />
            <em style={{ fontWeight: 400, color: c.accent }}>conversation.</em>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed" style={{ color: c.inkSoft }}>
            Whether you&apos;re a parent, a student, or a community organization, reach out
            below. Every engagement starts with a conversation.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20" style={{ borderTop: `1px solid ${c.line}` }}>
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12 lg:gap-20">

          {/* Left: info */}
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-10">
              <div>
                <div className="text-xs uppercase mb-4" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>
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
                <div className="text-xs uppercase mb-4" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>
                  Based In
                </div>
                <p className="text-base leading-relaxed" style={{ color: c.inkSoft }}>
                  San Francisco Bay Area<br />Cambridge, MA
                </p>
              </div>

              <div>
                <div className="text-xs uppercase mb-4" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>
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

              <div
                className="p-6"
                style={{ background: c.bgDeep, border: `1px solid ${c.line}` }}
              >
                <div className="text-xs uppercase mb-3" style={{ letterSpacing: '0.22em', color: c.accent, fontWeight: 600 }}>
                  Community Organizations
                </div>
                <p className="text-sm leading-relaxed" style={{ color: c.inkSoft }}>
                  Interested in hosting a Gateway student? Use the form or email directly.
                  Learn more on the{' '}
                  <a
                    href="/partners"
                    className="gw-link"
                    style={{ color: c.ink, textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    Partners page
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Right: embedded form */}
          <div className="col-span-12 lg:col-span-8">
            <div className="text-xs uppercase mb-6" style={{ letterSpacing: '0.28em', color: c.inkMuted, fontWeight: 500 }}>
              Inquiry Form
            </div>
            <iframe
              src={FORM_URL}
              width="100%"
              height="900"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Gateway Contact Form"
              style={{ border: `1px solid ${c.line}`, display: 'block' }}
            >
              Loading form…
            </iframe>
            <p className="text-xs mt-4" style={{ color: c.inkMuted }}>
              Form not loading?{' '}
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gw-link"
                style={{ color: c.inkMuted, textDecoration: 'underline', textUnderlineOffset: '3px' }}
              >
                Open it directly →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-20 py-12" style={{ borderTop: `1px solid ${c.line}` }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-2xl" style={{ fontFamily: serif, fontWeight: 500 }}>Gateway</span>
              <span style={{ color: c.accent, fontFamily: serif }}>·</span>
              <span className="text-xs uppercase" style={{ letterSpacing: '0.22em', color: c.inkSoft, fontWeight: 500 }}>Impact Lab</span>
            </div>
            <div className="text-sm mb-3" style={{ color: c.inkSoft }}>San Francisco Bay Area · Cambridge, MA</div>
            <div className="flex gap-6 text-xs uppercase" style={{ letterSpacing: '0.18em' }}>
              <a href="/" className="gw-link" style={{ color: c.inkMuted, fontWeight: 500 }}>Home</a>
              <a href="/co-design" className="gw-link" style={{ color: c.inkMuted, fontWeight: 500 }}>Co-design Tool</a>
              <a href="/partners" className="gw-link" style={{ color: c.inkMuted, fontWeight: 500 }}>Partners</a>
            </div>
          </div>
          <div className="text-xs" style={{ color: c.inkMuted }}>
            © 2026 Gateway Impact Lab, PBC · A Delaware Public Benefit Corporation
          </div>
        </div>
      </footer>
    </div>
  );
}
