'use client';

import React, { useEffect, useState, useMemo } from 'react';

/**
 * Gateway Co-design Tool — Product Walkthrough
 * Lives at /co-design (because this file is at app/co-design/page.js)
 *
 * BEFORE DEPLOY, swap:
 *   [YOUR-FORM-URL] → your Google Form URL
 */

const TOPICS = [
  { id: 'education', label: 'Education & Youth', emoji: '📚' },
  { id: 'children', label: 'Children & Welfare', emoji: '🧸' },
  { id: 'health', label: 'Health & Wellbeing', emoji: '💊' },
  { id: 'environment', label: 'Environment', emoji: '🌱' },
  { id: 'arts', label: 'Arts & Culture', emoji: '🎨' },
  { id: 'community', label: 'Community Development', emoji: '🏘️' },
  { id: 'justice', label: 'Justice & Human Rights', emoji: '⚖️' },
  { id: 'tech', label: 'Technology & Innovation', emoji: '💻' },
];

const SKILLS = [
  'Writing',
  'Research',
  'Teaching',
  'Translation',
  'Design',
  'Coding',
  'Outreach',
  'Video',
  'Data',
  'Leadership',
];

const HOURS = ['1–2 hrs', '3–5 hrs', '5–8 hrs', '8+ hrs'];

const ORGS = [
  {
    id: 'scc',
    name: "Saigon Children's Charity",
    initials: 'SC',
    category: 'Education · Youth Development',
    description:
      'Removes barriers to education for disadvantaged Vietnamese children — scholarships, school infrastructure, vocational training. Operating since 1992.',
    location: 'District 1, Ho Chi Minh City',
    mode: 'Hybrid',
    modeDetail: 'Weekly onsite + remote project work',
    needsNow: true,
    weights: {
      topics: {
        'Education & Youth': 1.0,
        'Community Development': 0.7,
        'Children & Welfare': 0.8,
        'Arts & Culture': 0.5,
      },
      skills: {
        Writing: 0.9,
        Teaching: 1.0,
        Leadership: 0.7,
        Outreach: 0.7,
        Translation: 0.7,
        Research: 0.5,
        Design: 0.5,
      },
    },
  },
  {
    id: 'bluedragon',
    name: "Blue Dragon Children's Foundation",
    initials: 'BD',
    category: 'Child Welfare · Anti-Trafficking',
    description:
      "Rescues and supports children from trafficking, forced labor, and slavery. Expanded to HCMC in 2024 in partnership with the city's Association for Child Rights.",
    location: 'District 2, Ho Chi Minh City',
    mode: 'Onsite',
    modeDetail: 'Background check + safeguarding training required',
    needsNow: false,
    weights: {
      topics: {
        'Children & Welfare': 1.0,
        'Justice & Human Rights': 1.0,
        'Education & Youth': 0.6,
        'Health & Wellbeing': 0.5,
      },
      skills: {
        Research: 0.9,
        Writing: 0.8,
        Translation: 1.0,
        Data: 0.7,
        Design: 0.5,
      },
    },
  },
  {
    id: 'vcf',
    name: 'VinaCapital Foundation',
    initials: 'VC',
    category: 'Health · Education',
    description:
      'National foundation operating eight programs across health, education, and community development. Founding learning lab partner of Gateway.',
    location: 'District 1, Ho Chi Minh City',
    mode: 'Remote',
    modeDetail: 'Project-based, optional site visits',
    needsNow: true,
    weights: {
      topics: {
        'Health & Wellbeing': 1.0,
        'Education & Youth': 0.9,
        'Community Development': 0.8,
        'Technology & Innovation': 0.6,
      },
      skills: {
        Research: 1.0,
        Data: 0.9,
        Writing: 0.7,
        Design: 0.7,
        Leadership: 0.6,
      },
    },
  },
];

const SAMPLE = {
  pathway: 'solo',
  topics: ['education', 'children'],
  skills: ['Writing', 'Teaching', 'Leadership'],
  hours: '5–8 hrs',
  priorExp:
    "I taught English at orphanages in District 4 for two summers in middle school. I learned that good intentions aren't enough — I want to learn how to actually be useful this time.",
};

function calculateMatch(org, selectedTopics, selectedSkills) {
  let topicScore = 0;
  let topicMatches = 0;
  selectedTopics.forEach((tId) => {
    const label = TOPICS.find((x) => x.id === tId)?.label;
    if (label && org.weights.topics[label]) {
      topicScore += org.weights.topics[label];
      topicMatches += 1;
    }
  });
  const avgTopic = topicMatches > 0 ? topicScore / topicMatches : 0.4;

  let skillScore = 0;
  let skillMatches = 0;
  selectedSkills.forEach((s) => {
    if (org.weights.skills[s]) {
      skillScore += org.weights.skills[s];
      skillMatches += 1;
    }
  });
  const avgSkill = skillMatches > 0 ? skillScore / skillMatches : 0.4;

  const score = 50 + avgTopic * 30 + avgSkill * 19;
  return Math.min(99, Math.max(52, Math.round(score)));
}

function generateReasoning(org, selectedTopics, selectedSkills) {
  const topicLabels = Array.from(selectedTopics)
    .map((t) => TOPICS.find((x) => x.id === t)?.label)
    .filter(Boolean);
  const topTopic = topicLabels.find((t) => (org.weights.topics[t] || 0) >= 0.8);
  const topSkill = Array.from(selectedSkills).find(
    (s) => (org.weights.skills[s] || 0) >= 0.8,
  );

  if (topTopic && topSkill) {
    return `Your interest in ${topTopic.toLowerCase()} aligns with their core mission, and your ${topSkill.toLowerCase()} skills match what they actively need from volunteers.`;
  }
  if (topTopic) {
    return `Your interest in ${topTopic.toLowerCase()} aligns directly with their core mission.`;
  }
  if (topSkill) {
    return `Your ${topSkill.toLowerCase()} skills match what they're actively looking for in volunteers right now.`;
  }
  return 'A foundational fit based on your assessment profile and their current project openings.';
}

export default function GatewayDiscover() {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href =
      'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=DM+Sans:wght@300;400;500;600&display=swap';
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
    chipBg: '#F5EDDA',
  };

  const FORM_URL = '[YOUR-FORM-URL]';

  const pathway = SAMPLE.pathway;
  const selectedTopics = useMemo(() => new Set(SAMPLE.topics), []);
  const selectedSkills = useMemo(() => new Set(SAMPLE.skills), []);
  const hours = SAMPLE.hours;
  const priorExp = SAMPLE.priorExp;

  const [step, setStep] = useState(1);
  const [chosenOrg, setChosenOrg] = useState(null);

  const matches = useMemo(() => {
    return ORGS
      .map((org) => ({
        ...org,
        matchScore: calculateMatch(org, selectedTopics, selectedSkills),
        reasoning: generateReasoning(org, selectedTopics, selectedSkills),
      }))
      .sort((a, b) => b.matchScore - a.matchScore);
  }, [selectedTopics, selectedSkills]);

  const stepLabels = ['Pathway', 'Assessment', 'Matches', 'Confirm'];

  const goNext = () => setStep((s) => Math.min(s + 1, 4));
  const goBack = () => setStep((s) => Math.max(s - 1, 1));
  const restart = () => {
    setStep(1);
    setChosenOrg(null);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToConfirm = (orgId) => {
    setChosenOrg(orgId || matches[0].id);
    setStep(4);
  };

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
        @keyframes gw-fade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .gw-fade { animation: gw-fade 0.5s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .gw-card { transition: all 0.2s ease; }
        .gw-card:hover { transform: translateY(-2px); }
        .gw-cta { transition: background 0.2s, color 0.2s; cursor: pointer; }
        .gw-cta-primary:hover { background: #8E3923 !important; }
        .gw-cta-dark:hover { background: #2C2521 !important; }
        .gw-cta-outline:hover { background: ${c.ink}; color: ${c.bg}; }
      `}</style>

      <nav
        className="sticky top-0 z-50 backdrop-blur-md"
        style={{
          background: 'rgba(250, 246, 238, 0.88)',
          borderBottom: `1px solid ${c.line}`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
          <a href="/" className="flex items-baseline gap-2">
            <span className="text-2xl" style={{ fontFamily: serif, fontWeight: 500, color: c.ink }}>
              Gateway
            </span>
            <span style={{ color: c.accent, fontFamily: serif }}>·</span>
            <span
              className="text-xs uppercase hidden sm:inline"
              style={{ letterSpacing: '0.22em', color: c.inkSoft, fontWeight: 500 }}
            >
              Co-design Tool
            </span>
          </a>
          <a
            href="/"
            className="text-xs uppercase tracking-widest"
            style={{ color: c.inkSoft, fontWeight: 500 }}
          >
            ← Back to Home
          </a>
        </div>
      </nav>

      <div
        className="px-6 md:px-12 py-3"
        style={{ background: c.accentSoft, borderBottom: `1px solid ${c.line}` }}
      >
        <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
          <span
            style={{
              letterSpacing: '0.22em',
              fontWeight: 600,
              textTransform: 'uppercase',
              color: c.accent,
            }}
          >
            Product Walkthrough
          </span>
          <span style={{ color: c.inkSoft }}>·</span>
          <span style={{ color: c.ink, fontWeight: 400 }}>
            Sample assessment shown — use Continue and Back to step through the matching flow.
          </span>
        </div>
      </div>

      <div
        className="px-6 md:px-12 py-6"
        style={{ borderBottom: `1px solid ${c.line}`, background: c.bg }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between gap-2 md:gap-6">
            {stepLabels.map((label, idx) => {
              const stepNum = idx + 1;
              const active = step === stepNum;
              const done = step > stepNum;
              return (
                <React.Fragment key={label}>
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className="flex-shrink-0 flex items-center justify-center text-xs font-medium"
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: done || active ? c.accent : 'transparent',
                        color: done || active ? c.bg : c.inkMuted,
                        border: done || active ? 'none' : `1.5px solid ${c.line}`,
                        fontFamily: serif,
                      }}
                    >
                      {done ? '✓' : stepNum}
                    </div>
                    <div
                      className="text-xs uppercase truncate hidden sm:block"
                      style={{
                        letterSpacing: '0.22em',
                        color: active ? c.ink : c.inkMuted,
                        fontWeight: active ? 600 : 500,
                      }}
                    >
                      {label}
                    </div>
                  </div>
                  {idx < stepLabels.length - 1 && (
                    <div
                      className="flex-1"
                      style={{
                        height: '1px',
                        background: done ? c.accent : c.line,
                        minWidth: '12px',
                      }}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      <main className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">

          {step === 1 && (
            <div className="gw-fade">
              <div className="text-xs uppercase mb-6" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>
                Step 01 / Pathway
              </div>
              <h1
                className="text-4xl md:text-5xl mb-4 leading-[1.1]"
                style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.01em' }}
              >
                Are you applying<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400 }}>solo or as a team?</span>
              </h1>
              <p className="text-lg leading-relaxed mb-12 max-w-2xl" style={{ color: c.inkSoft }}>
                Students can apply individually or form a group of 2–5. Groups share one
                project but each member completes their own assessment.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  { id: 'solo', title: 'Solo', sub: 'Just me' },
                  { id: 'group', title: 'Group', sub: '2–5 students, one project' },
                ].map((opt) => {
                  const selected = pathway === opt.id;
                  return (
                    <div
                      key={opt.id}
                      className="text-left p-8"
                      style={{
                        background: selected ? c.ink : c.bg,
                        color: selected ? c.bg : c.ink,
                        border: `1px solid ${selected ? c.ink : c.line}`,
                      }}
                    >
                      <div className="text-3xl mb-2" style={{ fontFamily: serif, fontWeight: 400 }}>
                        {opt.title}
                      </div>
                      <div className="text-sm" style={{ color: selected ? '#C9C2B8' : c.inkSoft }}>
                        {opt.sub}
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={goNext}
                className="px-8 py-4 text-xs uppercase tracking-widest gw-cta gw-cta-primary"
                style={{
                  background: c.accent,
                  color: c.bg,
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  border: 'none',
                  fontFamily: sans,
                }}
              >
                Continue to Assessment →
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="gw-fade">
              <div className="text-xs uppercase mb-6" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>
                Step 02 / Assessment
              </div>
              <h1
                className="text-4xl md:text-5xl mb-4 leading-[1.1]"
                style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.01em' }}
              >
                Tell us about yourself.<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400 }}>We&apos;ll find your match.</span>
              </h1>
              <p className="text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: c.inkSoft }}>
                A short structured assessment captures interests, skills, time commitment,
                and prior experience.
              </p>

              <div
                className="p-5 mb-12 max-w-2xl flex gap-4 items-start"
                style={{ background: c.bgDeep, border: `1px solid ${c.line}` }}
              >
                <span style={{ color: c.accent, fontSize: '14px', fontWeight: 600, fontStyle: 'italic' }}>i</span>
                <p className="text-sm leading-relaxed" style={{ color: c.inkSoft, fontStyle: 'italic' }}>
                  Sample profile shown. The full assessment in the live product also
                  includes deeper learning competency questions across mastery, identity,
                  and creativity.
                </p>
              </div>

              <div className="mb-12">
                <div className="text-xs uppercase mb-2" style={{ letterSpacing: '0.22em', color: c.inkMuted, fontWeight: 600 }}>
                  Topics that interest you
                </div>
                <div className="text-sm mb-6" style={{ color: c.inkSoft }}>Select all that apply</div>
                <div className="flex flex-wrap gap-2.5">
                  {TOPICS.map((t) => {
                    const selected = selectedTopics.has(t.id);
                    return (
                      <div
                        key={t.id}
                        className="px-4 py-2.5 text-sm"
                        style={{
                          background: selected ? c.ink : c.chipBg,
                          color: selected ? c.bg : c.ink,
                          border: `1px solid ${selected ? c.ink : c.line}`,
                          fontFamily: sans,
                          fontWeight: 500,
                          borderRadius: '999px',
                          opacity: selected ? 1 : 0.7,
                        }}
                      >
                        <span className="mr-1.5">{t.emoji}</span>
                        {t.label}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mb-12">
                <div className="text-xs uppercase mb-2" style={{ letterSpacing: '0.22em', color: c.inkMuted, fontWeight: 600 }}>
                  Skills you bring
                </div>
                <div className="text-sm mb-6" style={{ color: c.inkSoft }}>Select all that apply</div>
                <div className="flex flex-wrap gap-2.5">
                  {SKILLS.map((s) => {
                    const selected = selectedSkills.has(s);
                    return (
                      <div
                        key={s}
                        className="px-4 py-2.5 text-sm"
                        style={{
                          background: selected ? c.ink : c.chipBg,
                          color: selected ? c.bg : c.ink,
                          border: `1px solid ${selected ? c.ink : c.line}`,
                          fontFamily: sans,
                          fontWeight: 500,
                          borderRadius: '999px',
                          opacity: selected ? 1 : 0.7,
                        }}
                      >
                        {s}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mb-12">
                <div className="text-xs uppercase mb-2" style={{ letterSpacing: '0.22em', color: c.inkMuted, fontWeight: 600 }}>
                  Hours per week
                </div>
                <div className="text-sm mb-6" style={{ color: c.inkSoft }}>How much time can you commit?</div>
                <div className="flex flex-wrap gap-2.5">
                  {HOURS.map((h) => {
                    const selected = hours === h;
                    return (
                      <div
                        key={h}
                        className="px-5 py-2.5 text-sm"
                        style={{
                          background: selected ? c.ink : c.chipBg,
                          color: selected ? c.bg : c.ink,
                          border: `1px solid ${selected ? c.ink : c.line}`,
                          fontFamily: sans,
                          fontWeight: 500,
                          borderRadius: '999px',
                          opacity: selected ? 1 : 0.7,
                        }}
                      >
                        {h}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mb-16">
                <div className="text-xs uppercase mb-2" style={{ letterSpacing: '0.22em', color: c.inkMuted, fontWeight: 600 }}>
                  Prior experience{' '}
                  <span style={{ textTransform: 'none', letterSpacing: 0, color: c.inkMuted, fontWeight: 400 }}>
                    — optional
                  </span>
                </div>
                <div className="text-sm mb-6" style={{ color: c.inkSoft }}>
                  Any clubs, projects, or volunteer work that shaped how you think about service?
                </div>
                <div
                  className="w-full px-4 py-3 leading-relaxed text-base"
                  style={{
                    background: c.bg,
                    border: `1px solid ${c.line}`,
                    color: c.ink,
                    minHeight: '90px',
                  }}
                >
                  {priorExp}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={goBack}
                  className="px-8 py-4 text-xs uppercase tracking-widest gw-cta gw-cta-outline"
                  style={{
                    background: 'transparent',
                    color: c.ink,
                    border: `1px solid ${c.ink}`,
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    fontFamily: sans,
                  }}
                >
                  ← Back
                </button>
                <button
                  onClick={goNext}
                  className="px-8 py-4 text-xs uppercase tracking-widest gw-cta gw-cta-primary"
                  style={{
                    background: c.accent,
                    color: c.bg,
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    border: 'none',
                    fontFamily: sans,
                  }}
                >
                  Find My Matches →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="gw-fade">
              <div className="text-xs uppercase mb-6" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>
                Step 03 / Matches
              </div>
              <h1
                className="text-4xl md:text-5xl mb-4 leading-[1.1]"
                style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.01em' }}
              >
                Three partners,<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400 }}>chosen for you.</span>
              </h1>
              <p className="text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: c.inkSoft }}>
                Ranked by alignment with the assessment. Each partner is vetted for
                safeguarding, project-readiness, and bilateral fit.
              </p>

              <div
                className="p-6 mb-12"
                style={{ background: c.accentSoft, border: `1px solid ${c.line}` }}
              >
                <div className="text-xs uppercase mb-2" style={{ letterSpacing: '0.22em', color: c.accent, fontWeight: 600 }}>
                  How we chose these
                </div>
                <p className="text-sm leading-relaxed" style={{ color: c.ink }}>
                  Selected interests ({Array.from(selectedTopics).map(t => TOPICS.find(x => x.id === t)?.label).filter(Boolean).join(', ')}) and
                  skills ({Array.from(selectedSkills).join(', ')}) were
                  weighed against each partner&apos;s stated needs and current openings. Match
                  scores reflect topical alignment, skill fit, and capacity to host a
                  structured eight-week placement.
                </p>
              </div>

              <div className="space-y-5 mb-12">
                {matches.map((org) => {
                  const isChosen = chosenOrg === org.id;
                  return (
                    <div
                      key={org.id}
                      className="gw-card p-6 md:p-8"
                      style={{
                        background: isChosen ? c.bgDeep : c.bg,
                        border: `1px solid ${isChosen ? c.ink : c.line}`,
                      }}
                    >
                      <div className="flex items-start justify-between gap-6 mb-5">
                        <div className="flex items-start gap-4 flex-1 min-w-0">
                          <div
                            className="flex-shrink-0 flex items-center justify-center text-lg"
                            style={{
                              width: '52px',
                              height: '52px',
                              background: c.ink,
                              color: c.bg,
                              fontFamily: serif,
                              fontWeight: 500,
                            }}
                          >
                            {org.initials}
                          </div>
                          <div className="min-w-0">
                            <h3
                              className="text-xl md:text-2xl mb-1 leading-tight"
                              style={{ fontFamily: serif, fontWeight: 500 }}
                            >
                              {org.name}
                            </h3>
                            <div
                              className="text-xs uppercase"
                              style={{ letterSpacing: '0.22em', color: c.inkMuted, fontWeight: 500 }}
                            >
                              {org.category}
                            </div>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-right">
                          <div
                            className="text-3xl md:text-4xl"
                            style={{
                              fontFamily: serif,
                              fontWeight: 400,
                              color: c.accent,
                              lineHeight: 1,
                            }}
                          >
                            {org.matchScore}%
                          </div>
                          <div
                            className="text-xs uppercase mt-1"
                            style={{ letterSpacing: '0.22em', color: c.inkMuted, fontWeight: 500 }}
                          >
                            Match
                          </div>
                        </div>
                      </div>

                      <p className="text-base leading-relaxed mb-4" style={{ color: c.ink }}>
                        {org.description}
                      </p>

                      <div
                        className="text-sm leading-relaxed mb-5 pl-4"
                        style={{ color: c.inkSoft, borderLeft: `2px solid ${c.accent}` }}
                      >
                        <span style={{ fontWeight: 500, color: c.ink }}>Why this match: </span>
                        {org.reasoning}
                      </div>

                      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6 text-sm" style={{ color: c.inkSoft }}>
                        <div className="flex items-center gap-2">
                          <span style={{ color: c.accent }}>📍</span>
                          {org.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <span style={{ color: c.accent }}>
                            {org.mode === 'Remote' ? '💻' : org.mode === 'Onsite' ? '🏢' : '🔀'}
                          </span>
                          <span style={{ fontWeight: 500, color: c.ink }}>{org.mode}</span>
                          <span>· {org.modeDetail}</span>
                        </div>
                        {org.needsNow && (
                          <div
                            className="text-xs uppercase px-2.5 py-1"
                            style={{
                              background: c.accentSoft,
                              color: c.accent,
                              letterSpacing: '0.22em',
                              fontWeight: 600,
                            }}
                          >
                            Needs students now
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => goToConfirm(org.id)}
                        className="px-6 py-3 text-xs uppercase tracking-widest gw-cta"
                        style={{
                          background: 'transparent',
                          color: c.ink,
                          border: `1px solid ${c.ink}`,
                          fontWeight: 500,
                          letterSpacing: '0.2em',
                          fontFamily: sans,
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = c.ink;
                          e.currentTarget.style.color = c.bg;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = c.ink;
                        }}
                      >
                        Select this Partner →
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={goBack}
                  className="px-8 py-4 text-xs uppercase tracking-widest gw-cta gw-cta-outline"
                  style={{
                    background: 'transparent',
                    color: c.ink,
                    border: `1px solid ${c.ink}`,
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    fontFamily: sans,
                  }}
                >
                  ← Back to Assessment
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="gw-fade text-center">
              <div className="text-xs uppercase mb-6" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>
                Step 04 / Confirm
              </div>
              <h1
                className="text-4xl md:text-5xl mb-6 leading-[1.1]"
                style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.01em' }}
              >
                You&apos;re matched with<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400, color: c.accent }}>
                  {matches.find((m) => m.id === chosenOrg)?.name || matches[0].name}.
                </span>
              </h1>
              <p className="text-lg leading-relaxed mb-12 max-w-2xl mx-auto" style={{ color: c.inkSoft }}>
                Next, the student and partner co-design a real project together. Our AI
                walks both sides through the tensions between what the student wants to
                learn and what the partner actually needs — turning that conversation into
                a structured project brief.
              </p>

              <div
                className="p-8 mb-12 max-w-xl mx-auto text-left"
                style={{ background: c.bgDeep, border: `1px solid ${c.line}` }}
              >
                <div className="text-xs uppercase mb-3" style={{ letterSpacing: '0.22em', color: c.inkMuted, fontWeight: 600 }}>
                  What happens next
                </div>
                <ul className="space-y-3 text-sm" style={{ color: c.ink }}>
                  <li className="flex gap-3">
                    <span style={{ color: c.accent }}>—</span>
                    <span>Both student and partner complete co-design profiles</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: c.accent }}>—</span>
                    <span>The AI surfaces tensions and synergies between the student&apos;s goals and the partner&apos;s actual needs</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: c.accent }}>—</span>
                    <span>Together they negotiate a project brief mapped to deeper learning competencies</span>
                  </li>
                </ul>
              </div>

              <div
                className="mb-10 p-6 max-w-xl mx-auto"
                style={{
                  background: c.accentSoft,
                  border: `1px solid ${c.line}`,
                }}
              >
                <div
                  className="text-xs uppercase mb-3"
                  style={{ letterSpacing: '0.22em', color: c.accent, fontWeight: 600 }}
                >
                  Walkthrough Complete
                </div>
                <p className="text-sm leading-relaxed" style={{ color: c.ink }}>
                  This is the matching flow students experience before entering the
                  co-design tool. To enroll a student in the founding cohort, reserve a
                  spot below.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 text-xs uppercase tracking-widest gw-cta gw-cta-primary inline-block"
                  style={{
                    background: c.accent,
                    color: c.bg,
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    border: 'none',
                    fontFamily: sans,
                    textDecoration: 'none',
                  }}
                >
                  Reserve a Spot in the Founding Cohort →
                </a>
                <button
                  onClick={restart}
                  className="px-8 py-4 text-xs uppercase tracking-widest"
                  style={{
                    background: 'transparent',
                    color: c.inkSoft,
                    border: 'none',
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    fontFamily: sans,
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px',
                  }}
                >
                  Restart Walkthrough
                </button>
              </div>
            </div>
          )}

        </div>
      </main>

      <footer
        className="px-6 md:px-12 py-8 mt-12"
        style={{ borderTop: `1px solid ${c.line}` }}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center text-xs" style={{ color: c.inkMuted }}>
          <div>Gateway Impact Lab · Co-design Tool</div>
          <div>© 2026 Gateway Impact Lab, PBC</div>
        </div>
      </footer>
    </div>
  );
}
