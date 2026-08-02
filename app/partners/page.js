'use client';

import React, { useEffect } from 'react';

export default function PartnersPage() {
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

  const benefits = [
    {
      title: 'A student who actually wants to be there',
      body: "Every student placed through Gateway has gone through a structured assessment process, written a proposal tailored to your organization, and committed to a specific project. No generic volunteers, no one doing hours for a checkbox.",
    },
    {
      title: 'A project scoped around your real needs',
      body: "The co-design process means you and the student define the project together: what you need, what they can deliver, and what success looks like. The final brief is a mutual commitment, not a form.",
    },
    {
      title: 'Ongoing support and accountability',
      body: "I provide weekly check-ins with the student and am available to organizations throughout the placement. If something isn't working, we fix it early. I don't disappear after the match.",
    },
    {
      title: 'Documentation at the end',
      body: "Every placement closes with a structured outcome report covering what the student did, what was delivered, and what was measured. Something you can point to for your own impact reporting.",
    },
    {
      title: 'No cost, ever',
      body: "Community partners join Gateway free of charge. Always.",
    },
  ];

  const criteria = [
    'Clear safeguarding policies for student volunteers',
    'At least one staff member available for regular project check-ins',
    'A real operational need, not just a willingness to host',
    'Based in or serving the San Francisco Bay Area',
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
            <a href="/contact" className="text-xs uppercase tracking-widest hidden md:inline gw-link" style={{ color: c.ink, fontWeight: 500 }}>Contact</a>
            <a
              href="/contact"
              className="px-5 py-2.5 text-xs uppercase tracking-widest gw-cta-dark"
              style={{ background: c.ink, color: c.bg, fontWeight: 500 }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase mb-8" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>
            — Community Partners
          </div>
          <h1
            className="text-5xl md:text-7xl leading-[1.02] mb-10 max-w-5xl"
            style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.02em' }}
          >
            Real work for<br />
            <em style={{ fontWeight: 400, color: c.accent }}>real organizations.</em>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed" style={{ color: c.inkSoft }}>
            Gateway partners with Bay Area nonprofits and community organizations to place
            students in meaningful, scoped projects. Partners join free of charge.
          </p>
        </div>
      </section>

      {/* What partners get */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28" style={{ borderTop: `1px solid ${c.line}`, background: c.bgDeep }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-3xl">
            <div className="text-xs uppercase mb-6" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>
              What Partners Get
            </div>
            <h2
              className="text-3xl md:text-5xl leading-[1.1]"
              style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.01em' }}
            >
              More than a volunteer.{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>A project partner.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-8"
                style={{ background: c.bg, border: `1px solid ${c.line}` }}
              >
                <h3
                  className="text-xl md:text-2xl mb-4 leading-[1.2]"
                  style={{ fontFamily: serif, fontWeight: 400 }}
                >
                  {b.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: c.inkSoft }}>
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner criteria */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28" style={{ borderTop: `1px solid ${c.line}` }}>
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <div className="text-xs uppercase mb-6" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>
              Partner Criteria
            </div>
            <h2
              className="text-3xl md:text-4xl leading-[1.1] mb-8"
              style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.01em' }}
            >
              What I look for in<br />
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>a placement partner.</span>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: c.inkSoft }}>
              Every partner is vetted before a student is placed. The process is straightforward:
              a conversation with me and a review of your safeguarding policies.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <ul className="space-y-5 mt-2">
              {criteria.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 text-base leading-relaxed py-5"
                  style={{ borderBottom: `1px solid ${c.line}`, color: c.ink }}
                >
                  <span style={{ color: c.accent, flexShrink: 0, fontWeight: 500 }}>—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="px-6 md:px-12 lg:px-20 py-20 md:py-28"
        style={{ background: c.ink, color: c.bg }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase mb-8" style={{ letterSpacing: '0.28em', color: c.accentSoft, fontWeight: 500 }}>
            — Become a Partner
          </div>
          <h2
            className="text-3xl md:text-5xl leading-[1.1] mb-8 max-w-3xl"
            style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.01em' }}
          >
            Interested in hosting a Gateway student?
          </h2>
          <p className="text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: '#C9C2B8' }}>
            Reach out and we&apos;ll set up a 20-minute conversation to see if there&apos;s a fit.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 text-xs uppercase tracking-widest"
            style={{ background: c.accent, color: c.bg, fontWeight: 500, letterSpacing: '0.2em' }}
          >
            Get in Touch →
          </a>
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
              <a href="/contact" className="gw-link" style={{ color: c.inkMuted, fontWeight: 500 }}>Contact</a>
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
