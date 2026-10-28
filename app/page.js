'use client';

import React, { useEffect } from 'react';

export default function GatewayHome() {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href =
      'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=DM+Sans:wght@300;400;500;600&display=swap';
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

  const steps = [
    {
      num: '01',
      title: 'Discover',
      text: 'A student begins with a structured conversation that maps what they already care about, what they can do, and where they want to grow, against three strands of deeper learning: mastery, identity, and creativity.',
    },
    {
      num: '02',
      title: 'Match',
      text: "The student is paired with an organization whose actual work overlaps with those goals. The pairing comes from a conversation about fit on both sides, not from a list.",
    },
    {
      num: '03',
      title: 'Co-design',
      text: 'The student and the organization sit down together and scope one project with real stakes. The co-design process makes the tension visible between what the student wants to learn and what the organization needs done, and turns that conversation into a brief both sides commit to. My role is to facilitate the conversation, not to run the project.',
    },
    {
      num: '04',
      title: 'Document',
      text: 'Weekly reflections, partner feedback, and competency tracking across the three strands turn the work into evidence that the student, the school, and the organization can each use. This is the part of the method I most want to test.',
    },
  ];

  const tried = [
    'A working prototype of the co-design process, built to see whether a student and an organization could scope a project together with light facilitation.',
    "A reflection and competency-tracking toolkit developed during my master's at Harvard, covering discovery, co-design briefs, weekly reflection, and a final narrative.",
    'Conversations with organizations that host student volunteers, which confirmed the pattern above and produced offers of case data and placement access for future study.',
    'No student has yet gone through the full cycle. That is the next step, and the reason this page exists.',
  ];

  const questions = [
    {
      lead: 'Evidence without performance.',
      body: 'How do you capture what a student actually learned when the act of documenting it can itself become one more thing done for an audience?',
    },
    {
      lead: 'Value to the organization.',
      body: 'How do you tell whether a nonprofit got real work from a student, rather than an extra body to supervise, and who gets to judge that?',
    },
    {
      lead: 'Learning when the student came to check a box.',
      body: 'If a student shows up because a requirement or an application demands it, what about the design of the project, if anything, makes real learning possible anyway?',
    },
  ];

  return (
    <div
      style={{
        fontFamily: sans,
        background: c.bg,
        color: c.ink,
        minHeight: '100vh',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
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
          <a href="#" className="flex items-center gap-3">
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
            <a
              href="/co-design"
              className="text-xs uppercase tracking-widest hidden md:inline gw-link"
              style={{ color: c.ink, fontWeight: 500 }}
            >
              Co-design Walkthrough
            </a>
            <a
              href="mailto:long_trinh@gse.harvard.edu"
              className="text-xs uppercase tracking-widest gw-link"
              style={{ color: c.ink, fontWeight: 500 }}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Section 1 — Opening question */}
      <section className="px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-24 md:pb-32" style={{ borderBottom: `1px solid ${c.line}` }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-sm mb-10" style={{ color: c.inkSoft }}>
            Long Trinh, Ed.M. · Harvard Graduate School of Education
          </div>
          <p
            className="text-2xl md:text-3xl lg:text-4xl leading-[1.35]"
            style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.01em', color: c.ink }}
          >
            Nearly every high school requires service, and most of it changes nothing, for the student or for the organization. The students know an admissions reader is watching, so they perform. The organizations know the student is leaving in two weeks, so they don&apos;t invest. I want to know what has to change in how a project is designed, who designs it, and what gets recorded along the way, so that both sides actually get something out of it, and so that a school can tell the difference.
          </p>
        </div>
      </section>

      {/* Section 2 — Where the question comes from */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32" style={{ borderBottom: `1px solid ${c.line}` }}>
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div
              className="text-xs uppercase md:sticky md:top-24"
              style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}
            >
              Where the question comes from
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-6 text-lg leading-relaxed" style={{ color: c.ink }}>
            <p>
              I&apos;m a Saigon South International School graduate. Junior year, I spent
              Saturdays teaching English at orphanages around Ho Chi Minh City. I had
              no curriculum, no continuity, no way to measure whether any of it stuck.
              By the end of the year, I knew the answer: it hadn&apos;t.
            </p>
            <p>
              Senior year, I tried something else. A few classmates and I started a
              club called Bliss 4 Youth that worked with the children of our school&apos;s
              local staff. We met weekly, built a real curriculum, and tracked progress
              over the year. Every student left with improved English.
            </p>
            <p>
              When I went back to that question years later, every organization I spoke with that hosts student volunteers described the same pattern: placements of a week or two, students who come and go, no continuity, and nothing either side could point to afterward. More than one said they had never been satisfied with the quality of these programs and would share whatever they had if someone was willing to redesign them.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — What I'm proposing */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32" style={{ borderBottom: `1px solid ${c.line}`, background: c.bgDeep }}>
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div
              className="text-xs uppercase md:sticky md:top-24"
              style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}
            >
              What I&apos;m proposing
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="text-3xl md:text-5xl mb-16 leading-[1.1]"
              style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.01em' }}
            >
              Four moves that try to answer the question
            </h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-6">
                  <div
                    className="text-xs uppercase pt-1.5 flex-shrink-0"
                    style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500, width: '2.5rem' }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl mb-3" style={{ fontFamily: serif, fontWeight: 400 }}>
                      {step.title}
                    </h3>
                    <p className="leading-relaxed" style={{ color: c.inkSoft }}>
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 pt-10" style={{ borderTop: `1px solid ${c.line}` }}>
              <a
                href="/co-design"
                className="text-base gw-link"
                style={{ color: c.ink, textDecoration: 'underline', textUnderlineOffset: '4px' }}
              >
                See one co-design conversation →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — What I've tried so far */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32" style={{ borderBottom: `1px solid ${c.line}` }}>
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div
              className="text-xs uppercase md:sticky md:top-24"
              style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}
            >
              What I&apos;ve tried so far
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <ul className="space-y-8">
              {tried.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-6 text-lg leading-relaxed pb-8"
                  style={{ borderBottom: i < tried.length - 1 ? `1px solid ${c.line}` : 'none', color: c.ink }}
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

      {/* Section 5 — What I don't know yet */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32" style={{ borderBottom: `1px solid ${c.line}`, background: c.bgDeep }}>
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div
              className="text-xs uppercase md:sticky md:top-24"
              style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}
            >
              What I don&apos;t know yet
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="text-3xl md:text-5xl mb-16 leading-[1.1]"
              style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.01em' }}
            >
              Three questions I can&apos;t answer from a prototype
            </h2>
            <div className="space-y-10">
              {questions.map((q, i) => (
                <div
                  key={i}
                  className="pt-10 text-lg leading-relaxed"
                  style={{ borderTop: `1px solid ${c.line}`, color: c.inkSoft }}
                >
                  <strong style={{ color: c.ink, fontWeight: 500 }}>{q.lead}</strong>{' '}{q.body}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Partner organizations */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32" style={{ borderBottom: `1px solid ${c.line}` }}>
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div
              className="text-xs uppercase md:sticky md:top-24"
              style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}
            >
              Partner organizations
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="text-lg leading-relaxed" style={{ color: c.ink }}>
              Organizations that host students are co-researchers in this work, not placement sites. Each project is scoped around something they actually need done, and their account of whether the work mattered is part of the evidence.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-2xl" style={{ fontFamily: serif, fontWeight: 500 }}>Gateway</span>
              <span style={{ color: c.accent, fontFamily: serif }}>·</span>
              <span className="text-xs uppercase" style={{ letterSpacing: '0.22em', color: c.inkSoft, fontWeight: 500 }}>Impact Lab</span>
            </div>
            <div className="text-sm mb-3" style={{ color: c.inkSoft }}>San Francisco Bay Area · Cambridge, MA</div>
            <div className="flex gap-6 text-sm" style={{ color: c.inkMuted }}>
              <a
                href="https://www.linkedin.com/in/long-trinh-47b61042/"
                target="_blank"
                rel="noopener noreferrer"
                className="gw-link"
                style={{ color: c.inkMuted }}
              >
                LinkedIn
              </a>
              <a
                href="mailto:long_trinh@gse.harvard.edu"
                className="gw-link"
                style={{ color: c.inkMuted }}
              >
                long_trinh@gse.harvard.edu
              </a>
            </div>
          </div>
          <div className="text-xs" style={{ color: c.inkMuted }}>
            © 2026 Gateway Impact Lab
          </div>
        </div>
      </footer>
    </div>
  );
}
