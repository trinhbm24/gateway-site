'use client';

import React, { useEffect } from 'react';

/**
 * Gateway Impact Lab — Landing Page
 *
 * BEFORE DEPLOY, swap these placeholders (Cmd/Ctrl+F to find them):
 *   [YOUR-FORM-URL]   → your Google Form URL
 *   [YOUR-EMAIL]      → your email
 *   [YOUR-LINKEDIN]   → your LinkedIn URL
 *
 * For your headshot:
 *   1. Drop a photo named "long.jpg" into the /public folder
 *   2. Replace the [ Founder Portrait ] block (search for it below)
 *      with: <img src="/long.jpg" alt="Long Trinh"
 *                 className="w-full aspect-[4/5] object-cover" />
 */

export default function GatewayLanding() {
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

  const FORM_URL = '[YOUR-FORM-URL]';

  const steps = [
    {
      num: '01',
      title: 'Discover',
      text:
        'Students complete a structured assessment that maps interests, skills, and growth goals to the deeper learning competencies — mastery, identity, and creativity — drawn from Mehta and Fine’s Harvard research.',
    },
    {
      num: '02',
      title: 'Match',
      text:
        'We pair each student with vetted HCMC community partners whose actual operational needs align with what the student wants to develop. Founding cohort matching is hand-curated by the founder — turning every placement into structured training data for our matching model.',
    },
    {
      num: '03',
      title: 'Co-design',
      text:
        'Student and partner sit down together and scope a real eight-week project. Our co-design tool surfaces the tensions between what the student wants to learn and what the organization actually needs — turning that conversation into a structured project brief.',
    },
    {
      num: '04',
      title: 'Document',
      text:
        'Weekly reflections, competency tracking, partner feedback, and a final narrative report — turning service learning work into evidence that schools, parents, and college admissions committees can actually use.',
    },
  ];

  const includes = [
    'Eight-week structured placement with a vetted community partner',
    'Weekly one-on-one mentorship with the founder',
    'AI-scaffolded co-design and reflection tools',
    'Competency tracking across three growth dimensions',
    'Final narrative report for schools and college applications',
    'Founding family privileges (priority 2027 placement, sibling rates)',
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
        @keyframes gateway-rise {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .gw-rise { animation: gateway-rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .gw-d1 { animation-delay: 0.05s; }
        .gw-d2 { animation-delay: 0.18s; }
        .gw-d3 { animation-delay: 0.32s; }
        .gw-d4 { animation-delay: 0.46s; }
        .gw-d5 { animation-delay: 0.60s; }
        .gw-link { transition: color 0.2s; }
        .gw-link:hover { color: ${c.accent}; }
        .gw-cta-primary { transition: background 0.2s; }
        .gw-cta-primary:hover { background: #8E3923; }
        .gw-cta-dark { transition: background 0.2s; }
        .gw-cta-dark:hover { background: #2C2521; }
        .gw-cta-outline { transition: all 0.2s; }
        .gw-cta-outline:hover { background: ${c.ink}; color: ${c.bg}; }
      `}</style>

      <nav
        className="sticky top-0 z-50 backdrop-blur-md"
        style={{
          background: 'rgba(250, 246, 238, 0.88)',
          borderBottom: `1px solid ${c.line}`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-5 flex justify-between items-center">
          <a href="#" className="flex items-baseline gap-2">
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
              href="#cohort"
              className="text-xs uppercase tracking-widest hidden md:inline gw-link"
              style={{ color: c.ink, fontWeight: 500 }}
            >
              Founding Cohort
            </a>
            <a
              href="/co-design"
              className="text-xs uppercase tracking-widest hidden md:inline gw-link"
              style={{ color: c.ink, fontWeight: 500 }}
            >
              Co-design Tool
            </a>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs uppercase tracking-widest gw-cta-dark"
              style={{
                background: c.ink,
                color: c.bg,
                fontWeight: 500,
              }}
            >
              Apply
            </a>
          </div>
        </div>
      </nav>

      <section className="px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-24 md:pb-40">
        <div className="max-w-7xl mx-auto">
          <div className="gw-rise gw-d1 text-xs uppercase mb-10" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>
            — Founding Cohort · Summer 2026 · Starting in Ho Chi Minh City
          </div>
          <h1
            className="gw-rise gw-d2 text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] mb-12 max-w-5xl"
            style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.02em' }}
          >
            International school <em style={{ fontWeight: 400 }}>service learning</em><br />
            is broken.{' '}
            <span style={{ color: c.accent, fontWeight: 400 }}>We rebuilt it.</span>
          </h1>
          <p
            className="gw-rise gw-d3 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
            style={{ color: c.inkSoft, fontWeight: 400 }}
          >
            Gateway matches students with vetted community organizations for eight-week,
            co-designed projects, beginning in Ho Chi Minh City. Real outcomes for organizations.
            Real growth for students. Documented results for schools and parents.
          </p>
          <div className="gw-rise gw-d4 flex flex-col sm:flex-row gap-3">
            <a
              href="#cohort"
              className="px-8 py-4 text-xs uppercase tracking-widest text-center gw-cta-primary"
              style={{
                background: c.accent,
                color: c.bg,
                fontWeight: 500,
                letterSpacing: '0.2em',
              }}
            >
              Apply to the Founding Cohort →
            </a>
            <a
              href="/co-design"
              className="px-8 py-4 text-xs uppercase tracking-widest text-center gw-cta-outline"
              style={{
                border: `1px solid ${c.ink}`,
                color: c.ink,
                fontWeight: 500,
                letterSpacing: '0.2em',
              }}
            >
              Try the Co-design Tool
            </a>
          </div>

          <div
            className="gw-rise gw-d5 mt-24 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl"
            style={{ borderTop: `1px solid ${c.line}` }}
          >
            {[
              ['8 weeks', 'Summer 2026'],
              ['10–15', 'Founding students'],
              ['Vetted', 'Community partners'],
              ['HGSE', 'Research-grounded'],
            ].map(([big, small]) => (
              <div key={small}>
                <div className="text-2xl mb-1" style={{ fontFamily: serif, fontWeight: 400, color: c.ink }}>
                  {big}
                </div>
                <div className="text-xs uppercase tracking-widest" style={{ color: c.inkMuted, fontWeight: 500 }}>
                  {small}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32" style={{ borderTop: `1px solid ${c.line}` }}>
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div
              className="text-xs uppercase md:sticky md:top-24"
              style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}
            >
              01 / The Problem
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="text-3xl md:text-5xl mb-12 leading-[1.1]"
              style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.01em' }}
            >
              Service requirements don&apos;t teach.<br />
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Real projects do.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 text-lg leading-relaxed" style={{ color: c.inkSoft }}>
              <p>
                Every IB and most international schools require service learning.
                The intent is real — service learning is meant to build empathy,
                leadership, and the kind of agency and future ready skills that
                classrooms can&apos;t teach on their own.
              </p>
              <p>
                The execution isn&apos;t. Matching is informal. Scaffolding is missing. Outcomes
                go undocumented. Schools spend tens of thousands on coordinator time.
                Parents pay tuition that covers it. Students fill obligations and &ldquo;check
                the box&rdquo; instead of growing from them.
              </p>
            </div>

            <div className="mt-16 pt-12 grid md:grid-cols-3 gap-8" style={{ borderTop: `1px solid ${c.line}` }}>
              {[
                ['Required', 'Service learning is mandatory at every IB and most international schools worldwide'],
                ['Unstructured', 'Most placements have no scaffolding or measurable outcomes'],
                ['Underbuilt', 'A core graduation requirement at thousands of schools and almost no one is building tools for it'],
              ].map(([stat, label]) => (
                <div key={label}>
                  <div className="text-5xl mb-3" style={{ fontFamily: serif, fontWeight: 300, color: c.accent }}>
                    {stat}
                  </div>
                  <div className="text-sm leading-relaxed" style={{ color: c.inkSoft }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32" style={{ borderTop: `1px solid ${c.line}`, background: c.bgDeep }}>
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div
              className="text-xs uppercase md:sticky md:top-24"
              style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}
            >
              02 / The Model
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="text-3xl md:text-5xl mb-16 leading-[1.1]"
              style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.01em' }}
            >
              Eight weeks. One project.<br />
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Measurable Outcomes.</span>
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
          </div>
        </div>
      </section>

      <section
        className="px-6 md:px-12 lg:px-20 py-24 md:py-32"
        style={{ background: c.ink, color: c.bg }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <div
              className="text-xs uppercase mb-8"
              style={{ letterSpacing: '0.28em', color: c.accentSoft, fontWeight: 500 }}
            >
              — Try It
            </div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2
              className="text-3xl md:text-5xl leading-[1.1] mb-10 max-w-4xl"
              style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.01em' }}
            >
              Service learning usually ends with a placement.<br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: c.accentSoft }}>
                Gateway begins there.
              </span>
            </h2>
            <p className="text-lg leading-relaxed mb-12 max-w-3xl" style={{ color: '#C9C2B8' }}>
              Our co-design tool keeps going, guiding the student and the organization
              through the project they'll actually do together, the outcomes they'll both
              work toward, and the brief that anchors the partnership. Both sides end with
              something measurable.
            </p>
            <a
              href="/co-design"
              className="inline-block px-8 py-4 text-xs uppercase tracking-widest gw-cta-primary"
              style={{
                background: c.accent,
                color: c.bg,
                fontWeight: 500,
                letterSpacing: '0.2em',
              }}
            >
              Walk through it →
            </a>
          </div>
        </div>
      </section>

      <section
        id="cohort"
        className="px-6 md:px-12 lg:px-20 py-24 md:py-32"
        style={{ borderTop: `1px solid ${c.line}` }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20 max-w-4xl">
            <div
              className="text-xs uppercase mb-6"
              style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}
            >
              03 / The Founding Cohort
            </div>
            <h2
              className="text-4xl md:text-6xl leading-[1.05]"
              style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.02em' }}
            >
              Summer 2026.<br />
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>
                Ten to fifteen students.
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7">
              <p className="text-lg leading-relaxed mb-6" style={{ color: c.inkSoft }}>
                The founding cohort runs in person in Ho Chi Minh City from June through
                August 2026. Each student is matched with a vetted community partner and
                works through a structured eight-week placement — with weekly mentorship
                from the founder, scaffolded reflection, competency tracking, and a final
                narrative report.
              </p>
              <p className="text-lg leading-relaxed mb-12" style={{ color: c.inkSoft }}>
                Founding families also receive priority placement in subsequent cohorts,
                sibling enrollment privileges, and named recognition as program founders.
              </p>

              <div
                className="text-xs uppercase mb-8"
                style={{ letterSpacing: '0.22em', color: c.inkMuted, fontWeight: 600 }}
              >
                What&apos;s Included
              </div>
              <ul className="space-y-4">
                {includes.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 text-base leading-relaxed"
                    style={{ color: c.ink }}
                  >
                    <span style={{ color: c.accent, flexShrink: 0, fontWeight: 500 }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <div
                  className="p-10 lg:p-12"
                  style={{
                    border: `1px solid ${c.ink}`,
                    background: c.bg,
                  }}
                >
                  <div
                    className="text-xs uppercase mb-8"
                    style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}
                  >
                    Founding Cohort Tuition
                  </div>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span
                      style={{
                        fontFamily: serif,
                        fontWeight: 400,
                        color: c.ink,
                        letterSpacing: '-0.03em',
                        lineHeight: 1,
                        fontSize: '4.5rem',
                      }}
                    >
                      $1,500
                    </span>
                    <span className="text-sm" style={{ color: c.inkMuted }}>
                      USD
                    </span>
                  </div>
                  <div
                    className="text-sm mb-10 leading-relaxed"
                    style={{ color: c.inkSoft }}
                  >
                    Eight weeks · Summer 2026 · Ho Chi Minh City
                  </div>
                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-8 py-4 text-xs uppercase tracking-widest mb-6 gw-cta-dark"
                    style={{
                      background: c.ink,
                      color: c.bg,
                      fontWeight: 500,
                      letterSpacing: '0.2em',
                    }}
                  >
                    Reserve a Spot →
                  </a>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: c.inkSoft }}
                  >
                    Reservations are non-binding. We confirm program details and final
                    partner placements by mid-May 2026. Tuition is collected only after
                    final confirmation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="px-6 md:px-12 lg:px-20 py-24 md:py-32"
        style={{ borderTop: `1px solid ${c.line}`, background: c.bgDeep }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div
              className="text-xs uppercase md:sticky md:top-24"
              style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}
            >
              04 / Community Partners
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="text-3xl md:text-5xl mb-12 leading-[1.1]"
              style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.01em' }}
            >
              Built with the organizations<br />
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>actually doing the work.</span>
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl mb-16" style={{ color: c.inkSoft }}>
              Community partners join Gateway free of charge. Each is vetted for
              safeguarding standards, project-readiness, and bilateral fit. Our founding
              lab partner is the VinaCapital Foundation.
            </p>

            <blockquote
              className="pl-8 py-4 max-w-3xl"
              style={{ borderLeft: `2px solid ${c.accent}` }}
            >
              <p
                className="text-2xl md:text-3xl leading-[1.3] mb-6"
                style={{ fontFamily: serif, fontWeight: 300, fontStyle: 'italic', color: c.ink }}
              >
                &ldquo;We can be, and we will be your lab. We will be your learning lab.
                Whatever information we have is yours.&rdquo;
              </p>
              <div className="text-xs uppercase" style={{ letterSpacing: '0.22em', color: c.inkSoft, fontWeight: 500 }}>
                Rad Kivette · CEO, VinaCapital Foundation
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      <section
        id="founder"
        className="px-6 md:px-12 lg:px-20 py-24 md:py-32"
        style={{ borderTop: `1px solid ${c.line}` }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div
              className="text-xs uppercase md:sticky md:top-24"
              style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}
            >
              05 / Founder
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="text-3xl md:text-5xl mb-16 leading-[1.1]"
              style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.01em' }}
            >
              I am the student<br />
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Gateway should have existed for.</span>
            </h2>

            <div className="grid md:grid-cols-12 gap-10 lg:gap-16">
              <div className="md:col-span-4">
                <div
                  className="aspect-[4/5] flex items-center justify-center text-xs uppercase"
                  style={{ background: c.accentSoft, color: c.inkSoft, letterSpacing: '0.22em', fontWeight: 500 }}
                >
                  [ Founder Portrait ]
                </div>
                <div className="mt-6">
                  <div className="text-xl mb-1" style={{ fontFamily: serif, fontWeight: 500 }}>
                    Long Trinh
                  </div>
                  <div className="text-sm mb-1" style={{ color: c.inkSoft }}>
                    Founder &amp; CEO
                  </div>
                  <div className="text-sm" style={{ color: c.inkSoft }}>
                    Harvard GSE · LDIT &apos;26
                  </div>
                </div>
              </div>

              <div className="md:col-span-8 space-y-6 text-lg leading-relaxed" style={{ color: c.ink }}>
                <p>
                  I&apos;m a Saigon South International School graduate. I completed 150 hours
                  of service learning at orphanages, teaching English. I have no idea
                  whether any of it mattered — for the children, for the organization, or
                  for me. There was no structure, no scaffolding, no measurement.
                </p>
                <p>
                  That experience is universal. Every international school student I know
                  finished with the same feeling. Every community organization I&apos;ve spoken
                  to in HCMC has the same complaint: students arrive unprepared, leave
                  without follow-through, and rarely deliver real value.
                </p>
                <p>
                  Gateway is the rebuild. The platform is grounded in deeper learning
                  research from my work at Harvard&apos;s Graduate School of Education with
                  Jal Mehta and Sarah Fine — the framework that defines what mastery,
                  identity, and creativity actually look like in young people.
                </p>
                <p style={{ color: c.inkSoft, paddingTop: '0.5rem' }}>
                  I&apos;m returning to Ho Chi Minh City this summer to run the founding cohort
                  in person.{' '}
                  <a
                    href="[YOUR-LINKEDIN]"
                    className="gw-link"
                    style={{ color: c.ink, textDecoration: 'underline', textUnderlineOffset: '4px' }}
                  >
                    LinkedIn
                  </a>{' '}
                  ·{' '}
                  <a
                    href="mailto:[YOUR-EMAIL]"
                    className="gw-link"
                    style={{ color: c.ink, textDecoration: 'underline', textUnderlineOffset: '4px' }}
                  >
                    [YOUR-EMAIL]
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="px-6 md:px-12 lg:px-20 py-12"
        style={{ borderTop: `1px solid ${c.line}` }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-2xl" style={{ fontFamily: serif, fontWeight: 500 }}>
                Gateway
              </span>
              <span style={{ color: c.accent, fontFamily: serif }}>·</span>
              <span
                className="text-xs uppercase"
                style={{ letterSpacing: '0.22em', color: c.inkSoft, fontWeight: 500 }}
              >
                Impact Lab
              </span>
            </div>
            <div className="text-sm" style={{ color: c.inkSoft }}>
              Ho Chi Minh City · Cambridge, MA
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
