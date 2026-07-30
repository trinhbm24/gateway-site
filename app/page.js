'use client';

import React, { useEffect } from 'react';

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
        'Each student is paired with a vetted community partner whose actual operational needs align with what the student wants to develop. Every match is hand-curated — not assigned from a list, but built from a real conversation about fit on both sides.',
    },
    {
      num: '03',
      title: 'Co-design',
      text:
        'Student and partner sit down together and scope a real project. The co-design tool surfaces the tensions between what the student wants to learn and what the organization actually needs — turning that conversation into a structured project brief both sides commit to.',
    },
    {
      num: '04',
      title: 'Document',
      text:
        'Weekly reflections, competency tracking, partner feedback, and a final narrative report — turning real work into evidence that schools, parents, and college admissions committees can actually use.',
    },
  ];

  const includes = [
    'Structured placement with a vetted community partner',
    'Weekly 1:1 mentorship with the founder',
    'AI-scaffolded co-design and reflection tools',
    'Competency tracking across three growth dimensions',
    'Final narrative report for schools and college applications',
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
              Co-design Tool
            </a>
            <a
              href="/partners"
              className="text-xs uppercase tracking-widest hidden md:inline gw-link"
              style={{ color: c.ink, fontWeight: 500 }}
            >
              Partners
            </a>
            <a
              href="/contact"
              className="text-xs uppercase tracking-widest hidden md:inline gw-link"
              style={{ color: c.ink, fontWeight: 500 }}
            >
              Contact
            </a>
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
      <section className="px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-24 md:pb-40">
        <div className="max-w-7xl mx-auto">
          <div className="gw-rise gw-d1 text-xs uppercase mb-10" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>
            — Deeper Learning · Real Projects · San Francisco Bay Area
          </div>
          <h1
            className="gw-rise gw-d2 text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] mb-12 max-w-5xl"
            style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.02em' }}
          >
            Service hours don&apos;t impress anyone.{' '}
            <em style={{ fontWeight: 400, color: c.accent }}>Real work</em> does.
          </h1>
          <p
            className="gw-rise gw-d3 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
            style={{ color: c.inkSoft, fontWeight: 400 }}
          >
            The Gateway Method matches students with vetted community organizations for
            co-designed projects that produce real outcomes. Real results for organizations.
            Real growth for students. Documented evidence for schools, parents, and college
            applications.
          </p>
          <div className="gw-rise gw-d4 flex flex-col sm:flex-row gap-3">
            <a
              href="/contact"
              className="px-8 py-4 text-xs uppercase tracking-widest text-center gw-cta-primary"
              style={{ background: c.accent, color: c.bg, fontWeight: 500, letterSpacing: '0.2em' }}
            >
              Get in Touch →
            </a>
            <a
              href="/co-design"
              className="px-8 py-4 text-xs uppercase tracking-widest text-center gw-cta-outline"
              style={{ border: `1px solid ${c.ink}`, color: c.ink, fontWeight: 500, letterSpacing: '0.2em' }}
            >
              Try the Co-design Tool
            </a>
          </div>

          <div
            className="gw-rise gw-d5 mt-24 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl"
            style={{ borderTop: `1px solid ${c.line}` }}
          >
            {[
              ['Harvard GSE', 'Research-grounded'],
              ['1:1', 'Founder mentorship'],
              ['3', 'Growth dimensions tracked'],
              ['Vetted', 'Community partners'],
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

      {/* 01 / The Problem */}
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
                Nearly every high school requires community service, and the intent is real —
                service is meant to build empathy, leadership, and the kind of agency and
                future-ready skills that classrooms can&apos;t teach on their own.
              </p>
              <p>
                The execution isn&apos;t. Matching is informal, scaffolding is missing, and
                outcomes go undocumented, so students log hours instead of growing from them
                — and admissions readers, who see thousands of padded activity lists every
                cycle, can tell the difference immediately.
              </p>
            </div>

            <div className="mt-16 pt-12 grid md:grid-cols-3 gap-8" style={{ borderTop: `1px solid ${c.line}` }}>
              {[
                ['Required', 'Service is mandatory or expected at most high schools, and colleges expect to see it'],
                ['Unstructured', 'Most placements have no scaffolding, no continuity, and no measurable outcomes'],
                ['Undifferentiated', 'A checked box looks like every other checked box — real, documented work is what stands out'],
              ].map(([stat, label]) => (
                <div key={stat}>
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

      {/* 02 / The Gateway Method */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32" style={{ borderTop: `1px solid ${c.line}`, background: c.bgDeep }}>
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div
              className="text-xs uppercase md:sticky md:top-24"
              style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}
            >
              02 / The Gateway Method
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="text-3xl md:text-5xl mb-16 leading-[1.1]"
              style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.01em' }}
            >
              One student. One project.<br />
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Measurable outcomes.</span>
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

      {/* Co-design teaser */}
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
              through the project they&apos;ll actually do together, the outcomes they&apos;ll both
              work toward, and the brief that anchors the partnership. Both sides end with
              something measurable.
            </p>
            <a
              href="/co-design"
              className="inline-block px-8 py-4 text-xs uppercase tracking-widest gw-cta-primary"
              style={{ background: c.accent, color: c.bg, fontWeight: 500, letterSpacing: '0.2em' }}
            >
              Walk through it →
            </a>
          </div>
        </div>
      </section>

      {/* 03 / Working Together */}
      <section
        id="working-together"
        className="px-6 md:px-12 lg:px-20 py-24 md:py-32"
        style={{ borderTop: `1px solid ${c.line}` }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20 max-w-4xl">
            <div
              className="text-xs uppercase mb-6"
              style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}
            >
              03 / Working Together
            </div>
            <h2
              className="text-4xl md:text-6xl leading-[1.05]"
              style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.02em' }}
            >
              Real projects,{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>guided end to end.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7">
              <p className="text-lg leading-relaxed mb-12" style={{ color: c.inkSoft }}>
                I work with a small number of students at a time, taking each one through
                the full Gateway Method — from discovering what they actually care about,
                to a hand-curated match with a community organization, to a co-designed
                project with real stakes, to documentation that carries weight in a college
                application. Every engagement includes weekly 1:1 mentorship with me, and
                because I keep the roster small, every student gets a project scoped to
                them rather than a program they&apos;re slotted into.
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
                  style={{ border: `1px solid ${c.ink}`, background: c.bg }}
                >
                  <div
                    className="text-xs uppercase mb-6"
                    style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}
                  >
                    Start a Conversation
                  </div>
                  <p className="text-base leading-relaxed mb-10" style={{ color: c.inkSoft }}>
                    Every engagement starts with a conversation about your student — where
                    they are, what they care about, and whether this is the right fit.
                  </p>
                  <a
                    href="/contact"
                    className="block w-full text-center px-8 py-4 text-xs uppercase tracking-widest gw-cta-dark"
                    style={{ background: c.ink, color: c.bg, fontWeight: 500, letterSpacing: '0.2em' }}
                  >
                    Get in Touch →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 / Community Partners */}
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
            <p className="text-lg leading-relaxed max-w-3xl mb-10" style={{ color: c.inkSoft }}>
              Community partners join Gateway free of charge. Each is vetted for
              safeguarding standards, project-readiness, and fit — and each placement is
              scoped around a real operational need, so the organization gains as much as
              the student does.
            </p>
            <a
              href="/partners"
              className="text-sm gw-link"
              style={{ color: c.ink, textDecoration: 'underline', textUnderlineOffset: '4px', fontWeight: 500 }}
            >
              What partners get →
            </a>
          </div>
        </div>
      </section>

      {/* 05 / Founder */}
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
              Built from lived experience.<br />
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Designed for real outcomes.</span>
            </h2>

            <div className="grid md:grid-cols-12 gap-10 lg:gap-16">
              <div className="md:col-span-4">
                <img src="/long.jpg" alt="Long Trinh" className="w-full aspect-[4/5] object-cover" />
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
                  That&apos;s the difference Gateway is built to scale. The platform is grounded
                  in deeper learning research from my studies at Harvard&apos;s Graduate School
                  of Education with Jal Mehta — the framework that defines what mastery,
                  identity, and creativity actually look like in young people.
                </p>
                <p style={{ color: c.inkSoft, paddingTop: '0.5rem' }}>
                  That&apos;s the method I now bring to students in the Bay Area — one real
                  project at a time.{' '}
                  Based in the San Francisco Bay Area ·{' '}
                  <a
                    href="https://www.linkedin.com/in/long-trinh-47b61042/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gw-link"
                    style={{ color: c.ink, textDecoration: 'underline', textUnderlineOffset: '4px' }}
                  >
                    LinkedIn
                  </a>{' '}
                  ·{' '}
                  <a
                    href="mailto:long_trinh@gse.harvard.edu"
                    className="gw-link"
                    style={{ color: c.ink, textDecoration: 'underline', textUnderlineOffset: '4px' }}
                  >
                    long_trinh@gse.harvard.edu
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
            <div className="text-sm mb-3" style={{ color: c.inkSoft }}>
              San Francisco Bay Area · Cambridge, MA
            </div>
            <div className="flex gap-6 text-xs uppercase" style={{ letterSpacing: '0.18em' }}>
              <a href="/co-design" className="gw-link" style={{ color: c.inkMuted, fontWeight: 500 }}>Co-design Tool</a>
              <a href="/partners" className="gw-link" style={{ color: c.inkMuted, fontWeight: 500 }}>Partners</a>
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
