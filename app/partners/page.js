'use client';

import React, { useEffect } from 'react';
import SharedFooter from '../components/SharedFooter';

export default function ForOrganizations() {
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

  const asks = [
    'One person who can sit in a one-hour planning conversation at the start and spend about fifteen minutes with the student after each session.',
    'A real need, something you would want done whether or not a student turned up, not a willingness to host.',
    'A conversation with me about how you keep young volunteers safe, and the policies you already have.',
    'Your account of the work, twice: at the midpoint and at the end, in a few sentences each, including whether you would take the student back.',
  ];

  const gets = [
    'A project scoped around your need, planned with you before the student starts, and written down in a brief both sides sign.',
    'A student who chose this and committed to a fixed schedule, with me checking in on them so that problems surface early.',
    'A short written account at the end of what was done and what you said about it, which you check before it goes anywhere.',
    'A say in the research. Your judgment of whether the work was useful is part of the evidence, not a satisfaction survey, and you are named only if you choose to be.',
  ];

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
          <a
            href="/contact"
            className="text-xs uppercase tracking-widest gw-link"
            style={{ color: c.ink, fontWeight: 500 }}
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Header */}
      <section className="px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-20 md:pb-28" style={{ borderBottom: `1px solid ${c.line}` }}>
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div className="text-xs uppercase md:sticky md:top-24" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>
              For organizations
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h1
              className="text-4xl md:text-6xl mb-10 leading-[1.05]"
              style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.02em' }}
            >
              What hosting a student would involve, and what you would get.
            </h1>
            <p className="text-lg leading-relaxed max-w-3xl" style={{ color: c.inkSoft }}>
              If you run a nonprofit or community organization in the Bay Area and students have come and gone through your doors without leaving much behind, this is written for you. Hosting a student this way costs nothing, and it is also a piece of research, so I want to be plain about both sides of it.
            </p>
          </div>
        </div>
      </section>

      {/* What I would ask */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28" style={{ borderBottom: `1px solid ${c.line}` }}>
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div className="text-xs uppercase md:sticky md:top-24" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>
              What I would ask of you
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <ul className="space-y-0">
              {asks.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-6 text-lg leading-relaxed py-8"
                  style={{ borderBottom: `1px solid ${c.line}`, color: c.ink }}
                >
                  <span
                    className="text-xs uppercase pt-1.5 flex-shrink-0"
                    style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500, width: '2.5rem' }}
                  >
                    0{i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What you would get */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28" style={{ borderBottom: `1px solid ${c.line}`, background: c.bgDeep }}>
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div className="text-xs uppercase md:sticky md:top-24" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>
              What you would get
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <ul className="space-y-0">
              {gets.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-6 text-lg leading-relaxed py-8"
                  style={{ borderBottom: `1px solid ${c.line}`, color: c.ink }}
                >
                  <span
                    className="text-xs uppercase pt-1.5 flex-shrink-0"
                    style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500, width: '2.5rem' }}
                  >
                    0{i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28" style={{ borderBottom: `1px solid ${c.line}` }}>
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3" />
          <div className="col-span-12 md:col-span-8 space-y-6">
            <p className="text-lg leading-relaxed" style={{ color: c.ink }}>
              If you want to talk it through, email me.
            </p>
            <a
              href="/contact"
              className="text-base gw-link"
              style={{ color: c.ink, textDecoration: 'underline', textUnderlineOffset: '4px' }}
            >
              Contact me →
            </a>
          </div>
        </div>
      </section>

      <SharedFooter c={c} serif={serif} />
    </div>
  );
}
