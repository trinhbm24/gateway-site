'use client';

import React, { useEffect, useState, useMemo } from 'react';

/**
 * Gateway Co-design Tool — Product Walkthrough
 * Lives at /co-design (because this file is at app/co-design/page.js)
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
  'Writing', 'Research', 'Teaching', 'Translation', 'Design',
  'Coding', 'Outreach', 'Video', 'Data', 'Leadership',
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
        Writing: 0.9, Teaching: 1.0, Leadership: 0.7,
        Outreach: 0.7, Translation: 0.7, Research: 0.5, Design: 0.5,
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
        'Children & Welfare': 1.0, 'Justice & Human Rights': 1.0,
        'Education & Youth': 0.6, 'Health & Wellbeing': 0.5,
      },
      skills: {
        Research: 0.9, Writing: 0.8, Translation: 1.0, Data: 0.7, Design: 0.5,
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
    mode: 'Hybrid',
    modeDetail: 'Project-based, regular site visits',
    needsNow: true,
    weights: {
      topics: {
        'Health & Wellbeing': 1.0, 'Education & Youth': 0.9,
        'Community Development': 0.8, 'Technology & Innovation': 0.6,
      },
      skills: {
        Research: 1.0, Data: 0.9, Writing: 0.7, Design: 0.7, Leadership: 0.6,
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
  if (topTopic) return `Your interest in ${topTopic.toLowerCase()} aligns directly with their core mission.`;
  if (topSkill) return `Your ${topSkill.toLowerCase()} skills match what they're actively looking for in volunteers right now.`;
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
    return () => { if (document.head.contains(fontLink)) document.head.removeChild(fontLink); };
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

  const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfwulLmtaB55wADoGW0nXgC9-p66LrGUmK1QlDPMU8-UmCQZg/viewform?usp=header';

  const pathway = SAMPLE.pathway;
  const selectedTopics = useMemo(() => new Set(SAMPLE.topics), []);
  const selectedSkills = useMemo(() => new Set(SAMPLE.skills), []);
  const hours = SAMPLE.hours;
  const priorExp = SAMPLE.priorExp;

  const [step, setStep] = useState(1);
  const [chosenOrg, setChosenOrg] = useState(null);
  const [orgReviewState, setOrgReviewState] = useState('waiting');

  const matches = useMemo(() => {
    return ORGS
      .map((org) => ({
        ...org,
        matchScore: calculateMatch(org, selectedTopics, selectedSkills),
        reasoning: generateReasoning(org, selectedTopics, selectedSkills),
      }))
      .sort((a, b) => b.matchScore - a.matchScore);
  }, [selectedTopics, selectedSkills]);

  const stepLabels = ['Pathway', 'Assessment', 'Matches', 'Select', 'Propose', 'Schedule', 'Org Review', 'Meeting', 'Final'];
  const TOTAL_STEPS = 9;

  const goNext = () => {
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const goBack = () => {
    setStep((s) => Math.max(s - 1, 1));
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const restart = () => {
    setStep(1);
    setChosenOrg(null);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToSelect = (orgId) => {
    setChosenOrg(orgId || matches[0].id);
    setStep(4);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedOrg = matches.find((m) => m.id === chosenOrg) || matches[0];

  // Shared button styles
  const btnPrimary = {
    background: c.accent, color: c.bg, fontWeight: 500,
    letterSpacing: '0.2em', border: 'none', fontFamily: sans,
  };
  const btnOutline = {
    background: 'transparent', color: c.ink, border: `1px solid ${c.ink}`,
    fontWeight: 500, letterSpacing: '0.2em', fontFamily: sans,
  };
  const btnClass = 'px-8 py-4 text-xs uppercase tracking-widest gw-cta';

  return (
    <div style={{ fontFamily: sans, background: c.bg, color: c.ink, minHeight: '100vh', WebkitFontSmoothing: 'antialiased' }}>
      <style>{`
        @keyframes gw-fade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .gw-fade { animation: gw-fade 0.5s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .gw-card { transition: all 0.2s ease; }
        .gw-card:hover { transform: translateY(-2px); }
        .gw-cta { transition: background 0.2s, color 0.2s; cursor: pointer; }
        .gw-cta-primary:hover { background: #8E3923 !important; }
        .gw-cta-dark:hover { background: #2C2521 !important; }
        .gw-cta-outline:hover { background: ${c.ink} !important; color: ${c.bg} !important; }
        .slot-available:hover { border-color: ${c.accent} !important; cursor: pointer; }
      `}</style>

      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-md" style={{ background: 'rgba(250, 246, 238, 0.88)', borderBottom: `1px solid ${c.line}` }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
          <a href="/" className="flex items-baseline gap-2">
            <span className="text-2xl" style={{ fontFamily: serif, fontWeight: 500, color: c.ink }}>Gateway</span>
            <span style={{ color: c.accent, fontFamily: serif }}>·</span>
            <span className="text-xs uppercase hidden sm:inline" style={{ letterSpacing: '0.22em', color: c.inkSoft, fontWeight: 500 }}>Co-design Tool</span>
          </a>
          <a href="/" className="text-xs uppercase tracking-widest" style={{ color: c.inkSoft, fontWeight: 500 }}>← Back to Home</a>
        </div>
      </nav>

      {/* Banner */}
      <div className="px-6 md:px-12 py-3" style={{ background: c.accentSoft, borderBottom: `1px solid ${c.line}` }}>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
          <span style={{ letterSpacing: '0.22em', fontWeight: 600, textTransform: 'uppercase', color: c.accent }}>Product Walkthrough</span>
          <span style={{ color: c.inkSoft }}>·</span>
          <span style={{ color: c.ink, fontWeight: 400 }}>Sample student journey from intake to final proposal. Use Continue and Back to step through.</span>
        </div>
      </div>

      {/* Step Indicator */}
      <div className="px-6 md:px-12 py-5" style={{ borderBottom: `1px solid ${c.line}`, background: c.bg }}>
        <div className="max-w-6xl mx-auto">
          {/* Phase labels */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs uppercase" style={{ letterSpacing: '0.2em', fontWeight: 600, color: step <= 4 ? c.accent : c.inkMuted }}>Match</span>
            <span className="text-xs" style={{ color: c.line }}>1–4</span>
            <div style={{ width: '24px', height: '1px', background: c.line }} />
            <span className="text-xs uppercase" style={{ letterSpacing: '0.2em', fontWeight: 600, color: step >= 5 ? c.accent : c.inkMuted }}>Co-Design</span>
            <span className="text-xs" style={{ color: c.line }}>5–9</span>
            <div style={{ flex: 1 }} />
            <span className="text-xs" style={{ color: c.inkMuted }}>Step {step} of {TOTAL_STEPS} · {stepLabels[step - 1]}</span>
          </div>
          {/* Dots */}
          <div className="flex items-center gap-1">
            {stepLabels.map((label, idx) => {
              const stepNum = idx + 1;
              const active = step === stepNum;
              const done = step > stepNum;
              return (
                <React.Fragment key={label}>
                  {idx === 4 && (
                    <div style={{ width: '16px', height: '1px', background: step > 4 ? c.accent : c.line, flexShrink: 0 }} />
                  )}
                  <div
                    className="flex-shrink-0 flex items-center justify-center text-xs"
                    style={{
                      width: '22px', height: '22px', borderRadius: '50%',
                      background: done || active ? c.accent : 'transparent',
                      color: done || active ? c.bg : c.inkMuted,
                      border: done || active ? 'none' : `1.5px solid ${c.line}`,
                      fontFamily: serif, fontSize: '10px', fontWeight: 500,
                    }}
                  >
                    {done ? '✓' : stepNum}
                  </div>
                  {idx < stepLabels.length - 1 && idx !== 3 && (
                    <div style={{ flex: 1, height: '1px', background: done ? c.accent : c.line, minWidth: '6px', maxWidth: '36px' }} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      <main className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">

          {/* ── STEP 1: PATHWAY ── */}
          {step === 1 && (
            <div className="gw-fade">
              <div className="text-xs uppercase mb-6" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>Step 01 / Pathway</div>
              <h1 className="text-4xl md:text-5xl mb-4 leading-[1.1]" style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.01em' }}>
                Are you applying<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400 }}>solo or as a team?</span>
              </h1>
              <p className="text-lg leading-relaxed mb-12 max-w-2xl" style={{ color: c.inkSoft }}>
                Students can apply individually or form a group of 2–5. Groups share one project but each member completes their own assessment.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {[{ id: 'solo', title: 'Solo', sub: 'Just me' }, { id: 'group', title: 'Group', sub: '2–5 students, one project' }].map((opt) => {
                  const selected = pathway === opt.id;
                  return (
                    <div key={opt.id} className="text-left p-8" style={{ background: selected ? c.ink : c.bg, color: selected ? c.bg : c.ink, border: `1px solid ${selected ? c.ink : c.line}` }}>
                      <div className="text-3xl mb-2" style={{ fontFamily: serif, fontWeight: 400 }}>{opt.title}</div>
                      <div className="text-sm" style={{ color: selected ? '#C9C2B8' : c.inkSoft }}>{opt.sub}</div>
                    </div>
                  );
                })}
              </div>
              <button onClick={goNext} className={`${btnClass} gw-cta-primary`} style={btnPrimary}>
                Continue to Assessment →
              </button>
            </div>
          )}

          {/* ── STEP 2: ASSESSMENT ── */}
          {step === 2 && (
            <div className="gw-fade">
              <div className="text-xs uppercase mb-6" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>Step 02 / Assessment</div>
              <h1 className="text-4xl md:text-5xl mb-4 leading-[1.1]" style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.01em' }}>
                Tell us about yourself.<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400 }}>We&apos;ll find your match.</span>
              </h1>
              <p className="text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: c.inkSoft }}>
                A short structured assessment captures interests, skills, time commitment, and prior experience.
              </p>
              <div className="p-5 mb-12 max-w-2xl flex gap-4 items-start" style={{ background: c.bgDeep, border: `1px solid ${c.line}` }}>
                <span style={{ color: c.accent, fontSize: '14px', fontWeight: 600, fontStyle: 'italic' }}>i</span>
                <p className="text-sm leading-relaxed" style={{ color: c.inkSoft, fontStyle: 'italic' }}>
                  Sample profile shown. The full assessment in the live product also includes deeper learning competency questions across mastery, identity, and creativity.
                </p>
              </div>
              <div className="mb-12">
                <div className="text-xs uppercase mb-2" style={{ letterSpacing: '0.22em', color: c.inkMuted, fontWeight: 600 }}>Topics that interest you</div>
                <div className="text-sm mb-6" style={{ color: c.inkSoft }}>Select all that apply</div>
                <div className="flex flex-wrap gap-2.5">
                  {TOPICS.map((t) => {
                    const selected = selectedTopics.has(t.id);
                    return (
                      <div key={t.id} className="px-4 py-2.5 text-sm" style={{ background: selected ? c.ink : c.chipBg, color: selected ? c.bg : c.ink, border: `1px solid ${selected ? c.ink : c.line}`, fontFamily: sans, fontWeight: 500, borderRadius: '999px', opacity: selected ? 1 : 0.7 }}>
                        <span className="mr-1.5">{t.emoji}</span>{t.label}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mb-12">
                <div className="text-xs uppercase mb-2" style={{ letterSpacing: '0.22em', color: c.inkMuted, fontWeight: 600 }}>Skills you bring</div>
                <div className="text-sm mb-6" style={{ color: c.inkSoft }}>Select all that apply</div>
                <div className="flex flex-wrap gap-2.5">
                  {SKILLS.map((s) => {
                    const selected = selectedSkills.has(s);
                    return (
                      <div key={s} className="px-4 py-2.5 text-sm" style={{ background: selected ? c.ink : c.chipBg, color: selected ? c.bg : c.ink, border: `1px solid ${selected ? c.ink : c.line}`, fontFamily: sans, fontWeight: 500, borderRadius: '999px', opacity: selected ? 1 : 0.7 }}>
                        {s}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mb-12">
                <div className="text-xs uppercase mb-2" style={{ letterSpacing: '0.22em', color: c.inkMuted, fontWeight: 600 }}>Hours per week</div>
                <div className="text-sm mb-6" style={{ color: c.inkSoft }}>How much time can you commit?</div>
                <div className="flex flex-wrap gap-2.5">
                  {HOURS.map((h) => {
                    const selected = hours === h;
                    return (
                      <div key={h} className="px-5 py-2.5 text-sm" style={{ background: selected ? c.ink : c.chipBg, color: selected ? c.bg : c.ink, border: `1px solid ${selected ? c.ink : c.line}`, fontFamily: sans, fontWeight: 500, borderRadius: '999px', opacity: selected ? 1 : 0.7 }}>
                        {h}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mb-16">
                <div className="text-xs uppercase mb-2" style={{ letterSpacing: '0.22em', color: c.inkMuted, fontWeight: 600 }}>Prior experience</div>
                <div className="text-sm mb-6" style={{ color: c.inkSoft }}>Any clubs, projects, or volunteer work that shaped how you think about service?</div>
                <div className="w-full px-4 py-3 leading-relaxed text-base" style={{ background: c.bg, border: `1px solid ${c.line}`, color: c.ink, minHeight: '90px' }}>
                  {priorExp}
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={goBack} className={`${btnClass} gw-cta-outline`} style={btnOutline}>← Back</button>
                <button onClick={goNext} className={`${btnClass} gw-cta-primary`} style={btnPrimary}>Find My Matches →</button>
              </div>
            </div>
          )}

          {/* ── STEP 3: MATCHES ── */}
          {step === 3 && (
            <div className="gw-fade">
              <div className="text-xs uppercase mb-6" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>Step 03 / Matches</div>
              <h1 className="text-4xl md:text-5xl mb-4 leading-[1.1]" style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.01em' }}>
                Three partners,<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400 }}>chosen for you.</span>
              </h1>
              <p className="text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: c.inkSoft }}>
                Ranked by alignment with the assessment. Each partner is vetted for safeguarding, project-readiness, and bilateral fit.
              </p>
              <div className="p-6 mb-12" style={{ background: c.accentSoft, border: `1px solid ${c.line}` }}>
                <div className="text-xs uppercase mb-2" style={{ letterSpacing: '0.22em', color: c.accent, fontWeight: 600 }}>How we chose these</div>
                <p className="text-sm leading-relaxed" style={{ color: c.ink }}>
                  Selected interests ({Array.from(selectedTopics).map(t => TOPICS.find(x => x.id === t)?.label).filter(Boolean).join(', ')}) and skills ({Array.from(selectedSkills).join(', ')}) were weighed against each partner&apos;s stated needs and current openings.
                </p>
              </div>
              <div className="space-y-5 mb-12">
                {matches.map((org) => {
                  const isChosen = chosenOrg === org.id;
                  return (
                    <div key={org.id} className="gw-card p-6 md:p-8" style={{ background: isChosen ? c.bgDeep : c.bg, border: `1px solid ${isChosen ? c.ink : c.line}` }}>
                      <div className="flex items-start justify-between gap-6 mb-5">
                        <div className="flex items-start gap-4 flex-1 min-w-0">
                          <div className="flex-shrink-0 flex items-center justify-center text-lg" style={{ width: '52px', height: '52px', background: c.ink, color: c.bg, fontFamily: serif, fontWeight: 500 }}>{org.initials}</div>
                          <div className="min-w-0">
                            <h3 className="text-xl md:text-2xl mb-1 leading-tight" style={{ fontFamily: serif, fontWeight: 500 }}>{org.name}</h3>
                            <div className="text-xs uppercase" style={{ letterSpacing: '0.22em', color: c.inkMuted, fontWeight: 500 }}>{org.category}</div>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-right">
                          <div className="text-3xl md:text-4xl" style={{ fontFamily: serif, fontWeight: 400, color: c.accent, lineHeight: 1 }}>{org.matchScore}%</div>
                          <div className="text-xs uppercase mt-1" style={{ letterSpacing: '0.22em', color: c.inkMuted, fontWeight: 500 }}>Match</div>
                        </div>
                      </div>
                      <p className="text-base leading-relaxed mb-4" style={{ color: c.ink }}>{org.description}</p>
                      <div className="text-sm leading-relaxed mb-5 pl-4" style={{ color: c.inkSoft, borderLeft: `2px solid ${c.accent}` }}>
                        <span style={{ fontWeight: 500, color: c.ink }}>Why this match: </span>{org.reasoning}
                      </div>
                      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6 text-sm" style={{ color: c.inkSoft }}>
                        <div className="flex items-center gap-2"><span style={{ color: c.accent }}>📍</span>{org.location}</div>
                        <div className="flex items-center gap-2">
                          <span style={{ color: c.accent }}>{org.mode === 'Remote' ? '💻' : org.mode === 'Onsite' ? '🏢' : '🔀'}</span>
                          <span style={{ fontWeight: 500, color: c.ink }}>{org.mode}</span>
                          <span>· {org.modeDetail}</span>
                        </div>
                        {org.needsNow && (
                          <div className="text-xs uppercase px-2.5 py-1" style={{ background: c.accentSoft, color: c.accent, letterSpacing: '0.22em', fontWeight: 600 }}>Needs students now</div>
                        )}
                      </div>
                      <button
                        onClick={() => goToSelect(org.id)}
                        className="px-6 py-3 text-xs uppercase tracking-widest gw-cta"
                        style={{ background: 'transparent', color: c.ink, border: `1px solid ${c.ink}`, fontWeight: 500, letterSpacing: '0.2em', fontFamily: sans, transition: 'all 0.2s' }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = c.ink; e.currentTarget.style.color = c.bg; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = c.ink; }}
                      >
                        Select this Partner →
                      </button>
                    </div>
                  );
                })}
              </div>
              <button onClick={goBack} className={`${btnClass} gw-cta-outline`} style={btnOutline}>← Back to Assessment</button>
            </div>
          )}

          {/* ── STEP 4: SELECT ── */}
          {step === 4 && (
            <div className="gw-fade">
              <div className="text-xs uppercase mb-6" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>Step 04 / Select</div>
              <h1 className="text-4xl md:text-5xl mb-6 leading-[1.1]" style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.01em' }}>
                You&apos;re matched with<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400, color: c.accent }}>{selectedOrg.name}.</span>
              </h1>
              <p className="text-lg leading-relaxed mb-12 max-w-2xl" style={{ color: c.inkSoft }}>
                The match is confirmed. Next, you and your partner co-design the actual project — scoping what you&apos;ll do, what you&apos;ll learn, and how you&apos;ll measure it.
              </p>
              <div className="p-8 mb-12 max-w-2xl text-left" style={{ background: c.bgDeep, border: `1px solid ${c.line}` }}>
                <div className="text-xs uppercase mb-3" style={{ letterSpacing: '0.22em', color: c.inkMuted, fontWeight: 600 }}>What happens in co-design</div>
                <ul className="space-y-3 text-sm" style={{ color: c.ink }}>
                  {[
                    'You write a proposal grounded in a 4-criteria rubric — with Sage, our writing coach, giving feedback in the margin',
                    'You book a 30-minute kickoff call with Saigon Children\'s Charity',
                    'The partner reviews and confirms — or asks for revision',
                    'You meet, take notes, and write a final proposal from the conversation',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span style={{ color: c.accent }}>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={goBack} className={`${btnClass} gw-cta-outline`} style={btnOutline}>← Back</button>
                <button onClick={goNext} className={`${btnClass} gw-cta-primary`} style={btnPrimary}>Continue to Propose →</button>
              </div>
            </div>
          )}

          {/* ── STEP 5: PROPOSE ── */}
          {step === 5 && (
            <div className="gw-fade">
              <div className="text-xs uppercase mb-6" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>Step 05 / Propose</div>
              <h1 className="text-4xl md:text-5xl mb-4 leading-[1.1]" style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.01em' }}>
                Now write your proposal —<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400 }}>with a coach in the margin.</span>
              </h1>
              <p className="text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: c.inkSoft }}>
                Students draft a 500-word proposal grounded in a 4-criteria rubric. Sage, our writing coach, gives feedback against each criterion — without writing for them.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Left: sample proposal */}
                <div>
                  <div className="text-xs uppercase mb-3" style={{ letterSpacing: '0.22em', color: c.inkMuted, fontWeight: 600 }}>Your Draft</div>
                  <div className="p-6 mb-3 leading-relaxed text-sm" style={{ background: c.bg, border: `1px solid ${c.line}`, color: c.ink, minHeight: '220px' }}>
                    I will lead two literacy workshops per month for Saigon Children&apos;s Charity, focused on reading comprehension for grade 4–5 students in District 1. As a former IB English student who tutored younger peers for two years at SSIS, I bring both content knowledge and the patience to work with kids who struggle with English. I can commit five hours per week through August...
                  </div>
                  <div className="flex justify-between text-xs" style={{ color: c.inkMuted }}>
                    <span>129 / 500 words</span>
                    <span style={{ color: c.accent }}>✓ Auto-saved</span>
                  </div>
                </div>

                {/* Right: rubric */}
                <div>
                  <div className="text-xs uppercase mb-3" style={{ letterSpacing: '0.22em', color: c.inkMuted, fontWeight: 600 }}>Rubric · Sage&apos;s Feedback</div>
                  <div className="space-y-3">
                    {/* Claim - expanded */}
                    <div className="p-5" style={{ border: `1px solid ${c.accent}`, background: c.bg }}>
                      <div className="text-xs uppercase mb-2" style={{ letterSpacing: '0.22em', color: c.accent, fontWeight: 600 }}>Claim</div>
                      <p className="text-sm leading-relaxed mb-3" style={{ color: c.inkSoft }}>State clearly what you want to do and why it matters. Name a concrete action — not a vague intention.</p>
                      <div className="p-3 text-sm leading-relaxed" style={{ background: c.accentSoft, fontStyle: 'italic', color: c.ink }}>
                        &ldquo;I will design and lead two literacy workshops per month for Saigon Children&apos;s Charity grade 4–5 readers, because the gap between Vietnamese-language reading and English literacy is where their students stall.&rdquo;
                      </div>
                    </div>
                    {/* Contribution - expanded */}
                    <div className="p-5" style={{ border: `1px solid ${c.line}`, background: c.bg }}>
                      <div className="text-xs uppercase mb-2" style={{ letterSpacing: '0.22em', color: c.accent, fontWeight: 600 }}>Contribution</div>
                      <p className="text-sm leading-relaxed mb-3" style={{ color: c.inkSoft }}>Show what unique skills or experience you bring. Be concrete — this is not the place to be modest.</p>
                      <div className="p-3 text-sm leading-relaxed" style={{ background: c.accentSoft, fontStyle: 'italic', color: c.ink }}>
                        &ldquo;Two years of peer tutoring at SSIS plus my IB English background match what Saigon Children&apos;s Charity needs from volunteers who can hold the room with kids learning to read in a second language.&rdquo;
                      </div>
                    </div>
                    {/* Collapsed pills */}
                    <div className="flex gap-2">
                      {['Commitment', 'Closing'].map((label) => (
                        <div key={label} className="px-4 py-2 text-xs uppercase" style={{ border: `1px solid ${c.line}`, color: c.inkMuted, letterSpacing: '0.18em', fontWeight: 500 }}>{label}</div>
                      ))}
                    </div>
                    <p className="text-xs" style={{ color: c.inkMuted }}>Sage&apos;s assessment is shown on the next screen.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={goBack} className={`${btnClass} gw-cta-outline`} style={btnOutline}>← Back</button>
                <button onClick={goNext} className={`${btnClass} gw-cta-primary`} style={btnPrimary}>Continue to Scheduling →</button>
              </div>
            </div>
          )}

          {/* ── STEP 6: SCHEDULE ── */}
          {step === 6 && (
            <div className="gw-fade">
              <div className="text-xs uppercase mb-6" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>Step 06 / Schedule</div>
              <h1 className="text-4xl md:text-5xl mb-4 leading-[1.1]" style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.01em' }}>
                Book the kickoff meeting.
              </h1>
              <p className="text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: c.inkSoft }}>
                Once the proposal is submitted, students pick a 30-minute intro call with the partner organization. The partner confirms or asks for revision.
              </p>

              <div className="mb-8">
                <div className="text-xs uppercase mb-4" style={{ letterSpacing: '0.22em', color: c.inkMuted, fontWeight: 600 }}>Week of June 9, 2026 · Saigon Children&apos;s Charity</div>
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {[
                    { day: 'Mon 9', time: '4:00 PM', state: 'available' },
                    { day: 'Mon 9', time: '5:30 PM', state: 'taken' },
                    { day: 'Tue 10', time: '3:30 PM', state: 'selected' },
                    { day: 'Tue 10', time: '5:00 PM', state: 'available' },
                    { day: 'Wed 11', time: '4:00 PM', state: 'available' },
                    { day: 'Thu 12', time: '3:30 PM', state: 'taken' },
                    { day: 'Thu 12', time: '5:00 PM', state: 'available' },
                    { day: 'Fri 13', time: '3:00 PM', state: 'available' },
                    { day: 'Fri 13', time: '4:30 PM', state: 'taken' },
                  ].map((slot, i) => (
                    <div
                      key={i}
                      className={slot.state === 'available' ? 'slot-available' : ''}
                      style={{
                        padding: '14px 12px',
                        border: slot.state === 'selected' ? `2px solid ${c.accent}` : `1px solid ${c.line}`,
                        background: slot.state === 'selected' ? c.accentSoft : slot.state === 'taken' ? '#F5F0E8' : c.bg,
                        opacity: slot.state === 'taken' ? 0.45 : 1,
                        textAlign: 'center',
                      }}
                    >
                      <div className="text-xs uppercase mb-1" style={{ letterSpacing: '0.15em', color: slot.state === 'selected' ? c.accent : c.inkMuted, fontWeight: 600 }}>{slot.day}</div>
                      <div className="text-sm" style={{ fontWeight: slot.state === 'selected' ? 600 : 400, color: slot.state === 'taken' ? c.inkMuted : c.ink }}>{slot.time}</div>
                      {slot.state === 'taken' && <div className="text-xs mt-1" style={{ color: c.inkMuted }}>Taken</div>}
                      {slot.state === 'selected' && <div className="text-xs mt-1" style={{ color: c.accent, fontWeight: 600 }}>✓ Selected</div>}
                    </div>
                  ))}
                </div>

                {/* Confirmation card */}
                <div className="p-5 flex gap-4 items-start" style={{ background: c.bgDeep, border: `1px solid ${c.line}` }}>
                  <span style={{ fontSize: '20px' }}>📅</span>
                  <div>
                    <div className="text-sm font-medium mb-1" style={{ color: c.ink, fontWeight: 600 }}>Tuesday June 10, 3:30 PM · 30 min with Saigon Children&apos;s Charity</div>
                    <div className="text-sm" style={{ color: c.inkSoft }}>Zoom link sent on confirmation</div>
                  </div>
                </div>

                <p className="text-sm mt-4" style={{ color: c.inkMuted, fontStyle: 'italic' }}>
                  Before the call: jot down 3 things you&apos;re excited to work on and 2 questions for the partner.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={goBack} className={`${btnClass} gw-cta-outline`} style={btnOutline}>← Back</button>
                <button onClick={goNext} className={`${btnClass} gw-cta-primary`} style={btnPrimary}>Continue to Org Review →</button>
              </div>
            </div>
          )}

          {/* ── STEP 7: ORG REVIEW ── */}
          {step === 7 && (
            <div className="gw-fade">
              <div className="text-xs uppercase mb-6" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>Step 07 / Org Review</div>
              <h1 className="text-4xl md:text-5xl mb-4 leading-[1.1]" style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.01em' }}>
                The org reviews and confirms.
              </h1>
              <p className="text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: c.inkSoft }}>
                Partner organizations see the proposal and meeting request together. They accept, request a revision, or suggest a different time.
              </p>

              {/* Toggle */}
              <div className="flex gap-2 mb-8">
                {['waiting', 'accepted'].map((state) => (
                  <button
                    key={state}
                    onClick={() => setOrgReviewState(state)}
                    className="px-5 py-2 text-xs uppercase"
                    style={{
                      letterSpacing: '0.18em', fontWeight: 600, fontFamily: sans,
                      background: orgReviewState === state ? c.ink : 'transparent',
                      color: orgReviewState === state ? c.bg : c.inkMuted,
                      border: `1px solid ${orgReviewState === state ? c.ink : c.line}`,
                      cursor: 'pointer',
                    }}
                  >
                    {state === 'waiting' ? 'Waiting State' : 'Accepted State'}
                  </button>
                ))}
              </div>

              {orgReviewState === 'waiting' && (
                <div className="p-8 max-w-xl" style={{ border: `1px solid ${c.line}`, background: c.bg }}>
                  <div className="text-4xl mb-4">⏳</div>
                  <div className="text-xl mb-2" style={{ fontFamily: serif, fontWeight: 400 }}>Waiting for Saigon Children&apos;s Charity</div>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: c.inkSoft }}>
                    Your proposal and meeting request have been sent. Partners typically respond within 48 hours.
                  </p>
                  <ul className="space-y-2 text-sm" style={{ color: c.ink }}>
                    {['Proposal submitted', 'Meeting requested: Tue June 10, 3:30 PM', 'CV attached'].map((item) => (
                      <li key={item} className="flex gap-3 items-center">
                        <span style={{ color: c.accent }}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {orgReviewState === 'accepted' && (
                <div className="p-8 max-w-xl" style={{ border: `1px solid ${c.accent}`, background: c.bg }}>
                  <div className="text-4xl mb-4">✅</div>
                  <div className="text-xl mb-2" style={{ fontFamily: serif, fontWeight: 400, color: c.accent }}>Saigon Children&apos;s Charity accepted!</div>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: c.inkSoft }}>
                    Meeting confirmed for Tuesday June 10, 3:30 PM. Zoom link sent to your email.
                  </p>
                  <div className="p-4 text-sm leading-relaxed" style={{ background: c.accentSoft, color: c.ink }}>
                    🎙 Meeting will be recorded with consent. Transcript guides the final proposal.
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <button onClick={goBack} className={`${btnClass} gw-cta-outline`} style={btnOutline}>← Back</button>
                <button onClick={goNext} className={`${btnClass} gw-cta-primary`} style={btnPrimary}>Continue to Meeting →</button>
              </div>
            </div>
          )}

          {/* ── STEP 8: MEETING ── */}
          {step === 8 && (
            <div className="gw-fade">
              <div className="text-xs uppercase mb-6" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>Step 08 / Meeting</div>
              <h1 className="text-4xl md:text-5xl mb-4 leading-[1.1]" style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.01em' }}>
                The conversation that<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400 }}>shapes the project.</span>
              </h1>
              <p className="text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: c.inkSoft }}>
                Students and partners meet for 30 minutes. The platform captures key points so the student can write a refined final proposal afterward.
              </p>

              <div className="grid md:grid-cols-2 gap-10 mb-10">
                {/* Left: call UI */}
                <div>
                  <div className="flex gap-4 mb-6">
                    {[{ initials: 'JL', label: 'Jamie Lee', sub: 'Sample student' }, { initials: 'SC', label: 'Saigon Children\'s Charity', sub: 'Partner org' }].map((p) => (
                      <div key={p.initials} className="flex-1 text-center">
                        <div className="flex items-center justify-center mx-auto mb-3 text-2xl" style={{ width: '72px', height: '72px', background: c.bgDeep, border: `1px solid ${c.line}`, fontFamily: serif, fontWeight: 500, color: c.ink }}>
                          {p.initials}
                        </div>
                        <div className="text-sm font-medium" style={{ color: c.ink, fontWeight: 600 }}>{p.label}</div>
                        <div className="text-xs" style={{ color: c.inkMuted }}>{p.sub}</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2" style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '0.05em', color: c.ink }}>00:18:42</div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase" style={{ background: c.accentSoft, color: c.accent, letterSpacing: '0.18em', fontWeight: 600, borderRadius: '999px' }}>
                      <span style={{ fontSize: '8px' }}>●</span> Recording &amp; transcribing
                    </div>
                  </div>
                </div>

                {/* Right: live highlights */}
                <div>
                  <div className="text-xs uppercase mb-4" style={{ letterSpacing: '0.22em', color: c.inkMuted, fontWeight: 600 }}>Live Highlights</div>
                  <ul className="space-y-4">
                    {[
                      "Saigon Children's Charity needs literacy support for grade 4–5 readers in District 1.",
                      'They suggested co-leading two sessions in the May curriculum starting June 24.',
                      'Success measured by reading-level progression across the eight-week placement.',
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: c.ink }}>
                        <span style={{ color: c.accent, flexShrink: 0, fontWeight: 600 }}>—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm mt-6" style={{ color: c.inkMuted, fontStyle: 'italic' }}>
                    After the meeting, the student writes their final proposal with these insights as a guide.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={goBack} className={`${btnClass} gw-cta-outline`} style={btnOutline}>← Back</button>
                <button onClick={goNext} className={`${btnClass} gw-cta-primary`} style={btnPrimary}>Continue to Final →</button>
              </div>
            </div>
          )}

          {/* ── STEP 9: FINAL ── */}
          {step === 9 && (
            <div className="gw-fade">
              <div className="text-xs uppercase mb-6" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>Step 09 / Final</div>
              <h1 className="text-4xl md:text-5xl mb-4 leading-[1.1]" style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.01em' }}>
                From conversation<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400 }}>to commitment.</span>
              </h1>
              <p className="text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: c.inkSoft }}>
                After the meeting, the student writes a final proposal incorporating what they learned. Sage asks questions — students write the answers.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                {/* Left: final draft */}
                <div>
                  <div className="text-xs uppercase mb-3" style={{ letterSpacing: '0.22em', color: c.inkMuted, fontWeight: 600 }}>Final Proposal Draft</div>
                  <div className="p-6 mb-3 leading-relaxed text-sm" style={{ background: c.bg, border: `1px solid ${c.line}`, color: c.ink, minHeight: '200px' }}>
                    Following our meeting on June 10, I will co-lead two of the four sessions in Saigon Children&apos;s Charity&apos;s June literacy block. My specific role is to design and facilitate the comprehension portion of each session. Success will be measured by reading-level progression across the eight-week placement, tracked using Saigon Children&apos;s Charity&apos;s existing assessment rubric. I am asking for one staff supervisor to debrief with me weekly...
                  </div>
                  <div className="flex justify-between text-xs" style={{ color: c.inkMuted }}>
                    <span>187 / 500 words</span>
                    <span style={{ color: c.accent }}>✓ Auto-saved</span>
                  </div>
                </div>

                {/* Right: from meeting + Sage */}
                <div className="space-y-6">
                  <div>
                    <div className="text-xs uppercase mb-3" style={{ letterSpacing: '0.22em', color: c.inkMuted, fontWeight: 600 }}>From Your Meeting</div>
                    <ul className="space-y-2 text-sm" style={{ color: c.inkSoft }}>
                      {[
                        "Saigon Children's Charity needs literacy support for grade 4–5 readers",
                        'You can co-lead two of the four sessions starting June 24',
                        'Resources available: classroom space, printed materials, basic supplies',
                        'Success measured by reading-level progression',
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <span style={{ color: c.accent }}>—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5" style={{ background: c.bgDeep, border: `1px solid ${c.line}` }}>
                    <div className="text-xs uppercase mb-3" style={{ letterSpacing: '0.22em', color: c.accent, fontWeight: 600 }}>Sage · Final Proposal Coach</div>
                    <ul className="space-y-3 text-sm" style={{ color: c.ink }}>
                      {[
                        "What is your specific role? Be concrete — 'I will design and lead 2 of the 4 sessions.'",
                        "How will you know it worked? Saigon Children's Charity uses reading-level progression — can you tie your project to that measure?",
                        'What do you need from them? Resources, time, a supervisor?',
                      ].map((q, i) => (
                        <li key={i} className="flex gap-3 leading-relaxed">
                          <span style={{ color: c.accent, flexShrink: 0 }}>→</span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs mt-4" style={{ color: c.inkMuted, fontStyle: 'italic' }}>Sage asks questions. The student writes the proposal.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="p-8 mb-10 text-center" style={{ background: c.accentSoft, border: `1px solid ${c.line}` }}>
                <div className="text-xs uppercase mb-3" style={{ letterSpacing: '0.22em', color: c.accent, fontWeight: 600 }}>This is what Gateway produces</div>
                <p className="text-sm leading-relaxed mb-6 max-w-xl mx-auto" style={{ color: c.ink }}>
                  A documented, structured, measurable placement — with a real project brief, a real partner, and a real outcome. Enroll a student in the founding cohort to start the process.
                </p>
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btnClass} gw-cta-primary inline-block`}
                  style={{ ...btnPrimary, textDecoration: 'none' }}
                >
                  Reserve a Spot in the Founding Cohort →
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={goBack} className={`${btnClass} gw-cta-outline`} style={btnOutline}>← Back</button>
                <button onClick={restart} className="px-8 py-4 text-xs uppercase tracking-widest" style={{ background: 'transparent', color: c.inkSoft, border: 'none', fontWeight: 500, letterSpacing: '0.2em', fontFamily: sans, cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                  Restart Walkthrough
                </button>
              </div>
            </div>
          )}

        </div>
      </main>

      <footer className="px-6 md:px-12 py-8 mt-12" style={{ borderTop: `1px solid ${c.line}` }}>
        <div className="max-w-6xl mx-auto flex justify-between items-center text-xs" style={{ color: c.inkMuted }}>
          <div>Gateway Impact Lab · Co-design Tool</div>
          <div>© 2026 Gateway Impact Lab, PBC</div>
        </div>
      </footer>
    </div>
  );
}
