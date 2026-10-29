'use client';

import React, { useEffect } from 'react';
import SharedFooter from '../components/SharedFooter';

export default function OneProject() {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=DM+Sans:wght@300;400;500;600&display=swap';
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
  };

  const sc = {
    fontSize: '0.65rem',
    letterSpacing: '0.22em',
    fontWeight: 600,
    textTransform: 'uppercase',
  };

  const artifactLabel = (text) => (
    <div style={{ ...sc, color: c.inkMuted, marginBottom: '1rem' }}>{text}</div>
  );

  const artifactRow = (label, value) => (
    <div className="py-2" style={{ borderBottom: `1px solid ${c.line}` }}>
      <span style={{ ...sc, color: c.inkMuted }}>{label}</span>
      <p className="mt-1 text-sm leading-relaxed" style={{ color: c.ink }}>{value}</p>
    </div>
  );

  const statusLine = (text) => (
    <div className="mt-10 flex gap-4 items-start">
      <span style={{ ...sc, color: c.accent, flexShrink: 0 }}>Status</span>
      <p className="text-sm leading-relaxed" style={{ color: c.inkSoft }}>{text}</p>
    </div>
  );

  return (
    <div style={{ fontFamily: sans, background: c.bg, color: c.ink, minHeight: '100vh', WebkitFontSmoothing: 'antialiased' }}>
      <style>{`
        .gw-link { transition: color 0.2s; }
        .gw-link:hover { color: ${c.accent}; }
      `}</style>

      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-md" style={{ background: 'rgba(250, 246, 238, 0.88)', borderBottom: `1px solid ${c.line}` }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-5 flex justify-between items-center">
          <a href="/" className="flex items-baseline gap-2">
            <span className="text-2xl" style={{ fontFamily: serif, fontWeight: 500, color: c.ink }}>Gateway</span>
            <span style={{ color: c.accent, fontFamily: serif }}>·</span>
            <span className="text-xs uppercase hidden sm:inline" style={{ letterSpacing: '0.22em', color: c.inkSoft, fontWeight: 500 }}>One project</span>
          </a>
          <a href="/" className="text-xs uppercase tracking-widest gw-link" style={{ color: c.inkSoft, fontWeight: 500 }}>← Back to Home</a>
        </div>
      </nav>

      {/* Page header */}
      <section className="px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-20 md:pb-28" style={{ borderBottom: `1px solid ${c.line}` }}>
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div className="text-xs uppercase md:sticky md:top-24" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>
              One project, start to finish
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h1
              className="text-4xl md:text-6xl mb-10 leading-[1.05]"
              style={{ fontFamily: serif, fontWeight: 300, letterSpacing: '-0.02em' }}
            >
              What the four moves look like on one project.
            </h1>
            <p className="text-lg leading-relaxed max-w-3xl" style={{ color: c.inkSoft }}>
              The student and the organization below are made up. The questions, the brief, and the reflection prompts are the ones I would use, and the status line under each move says which parts have been tried and which have not. Nothing on this page has yet been done with a real student from beginning to end. That is the study.
            </p>
          </div>
        </div>
      </section>

      {/* Section 01: Discover */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28" style={{ borderBottom: `1px solid ${c.line}` }}>
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div className="text-xs uppercase md:sticky md:top-24" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>
              01 / Discover
            </div>
          </div>
          <div className="col-span-12 md:col-span-9 space-y-10">
            <p className="text-lg leading-relaxed" style={{ color: c.ink }}>
              A conversation of about an hour, in person or on a call, working through what the student already cares about, what they can do, and where they want to grow. I take notes against the three strands and read them back to the student at the end so they can correct me. What comes out is a one-page profile the student owns.
            </p>

            {/* Artifact */}
            <div className="p-6 md:p-8" style={{ border: `1px solid ${c.line}` }}>
              {artifactLabel('Discovery Profile · Jamie Lee, Rising Junior, San Jose')}
              <div className="space-y-0">
                {artifactRow('What I care about', 'Kids who are behind in reading. I was one of them until fourth grade.')}
                {artifactRow('What I can do', 'Explain things patiently. I tutored at the library for two summers, mostly homework help. I write well when I care about the subject.')}
                {artifactRow('Where I want to grow', 'Planning something myself instead of showing up to someone else\'s plan. Speaking in front of adults.')}
                {artifactRow('Time', 'Four to five hours a week through the spring semester.')}
                {artifactRow('Mastery (my notes)', 'Has tutored but never designed a session. Wants to know whether she is any good at teaching, not just whether she likes it.')}
                {artifactRow('Identity (my notes)', 'Came in saying she needed something sustained for college applications, and said so plainly. By the end of the hour she was talking about one specific fourth grader at the library. Both are true at once.')}
                {artifactRow('Creativity (my notes)', 'Has never made anything for a learner, a lesson, a worksheet, a game. Wants to.')}
              </div>
            </div>

            {statusLine('The profile format exists and has been used in interviews with students. It has not yet been the start of a placement.')}
          </div>
        </div>
      </section>

      {/* Section 02: Match */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28" style={{ borderBottom: `1px solid ${c.line}`, background: c.bgDeep }}>
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div className="text-xs uppercase md:sticky md:top-24" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>
              02 / Match
            </div>
          </div>
          <div className="col-span-12 md:col-span-9 space-y-10">
            <p className="text-lg leading-relaxed" style={{ color: c.ink }}>
              I keep a list of organizations whose day-to-day work could overlap with a profile like this one, and I talk with two or three of them about the student before anything is proposed. The pairing is a judgment about fit on both sides, made in conversation, and either side can say no. For Jamie the overlap was with a literacy organization that already runs reading groups for fourth and fifth graders and needs more hands in the room, not with the organizations that would have given her the most hours or the most impressive name.
            </p>

            {/* Artifact */}
            <div className="p-6 md:p-8" style={{ border: `1px solid ${c.line}`, background: c.bg }}>
              {artifactLabel('The Pairing · Bay Vista Literacy, East San Jose')}
              <div className="space-y-0">
                {artifactRow('What they do', 'Reading groups for fourth and fifth graders two afternoons a week, run by two staff and whatever volunteers turn up.')}
                {artifactRow('What they need', 'Someone who comes every week, prepares, and can take a group of four so the staff can work with the children who are furthest behind.')}
                {artifactRow('Why this pairing', "Jamie's reason for caring is their work. Their constraint, continuity, is the thing she said she wanted to practice.")}
                {artifactRow('The person', 'Mara, who runs the afternoon program and would be the one Jamie plans with.')}
              </div>
            </div>

            {statusLine('The organizations I have spoken with described needs like this one. No pairing has yet been made.')}
          </div>
        </div>
      </section>

      {/* Section 03: Co-design */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28" style={{ borderBottom: `1px solid ${c.line}` }}>
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div className="text-xs uppercase md:sticky md:top-24" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>
              03 / Co-design
            </div>
          </div>
          <div className="col-span-12 md:col-span-9 space-y-10">
            <p className="text-lg leading-relaxed" style={{ color: c.ink }}>
              Jamie, Mara, and I meet once for about an hour. I ask the questions, they answer them, and I write down what they agree to. The point of the questions is to make the tension visible between what Jamie wants to learn and what Bay Vista needs done, early, where it can be worked out, instead of three weeks in. What comes out is a brief both sides sign.
            </p>

            {/* Artifact 1: Q&A */}
            <div className="p-6 md:p-8" style={{ border: `1px solid ${c.line}` }}>
              {artifactLabel('The questions, and what each side said')}
              <div className="space-y-8">

                {/* Q1 */}
                <div>
                  <p className="text-base mb-4" style={{ fontWeight: 500, color: c.ink }}>
                    1. What does a good semester look like for each of you, separately?
                  </p>
                  <div className="space-y-3 pl-4" style={{ borderLeft: `2px solid ${c.line}` }}>
                    <div>
                      <div style={{ ...sc, color: c.inkMuted, marginBottom: '0.25rem' }}>Jamie</div>
                      <p className="text-sm leading-relaxed" style={{ color: c.ink }}>I planned the sessions myself, and the kids in my group can read something in May they couldn&apos;t in January.</p>
                    </div>
                    <div>
                      <div style={{ ...sc, color: c.inkMuted, marginBottom: '0.25rem' }}>Mara</div>
                      <p className="text-sm leading-relaxed" style={{ color: c.ink }}>A volunteer who shows up every single week so I can stop re-teaching routines, and my two furthest-behind kids get real time with me.</p>
                    </div>
                  </div>
                </div>

                {/* Q2 */}
                <div>
                  <p className="text-base mb-4" style={{ fontWeight: 500, color: c.ink }}>
                    2. Where do those two pictures pull against each other?
                  </p>
                  <div className="space-y-3 pl-4" style={{ borderLeft: `2px solid ${c.line}` }}>
                    <div>
                      <div style={{ ...sc, color: c.inkMuted, marginBottom: '0.25rem' }}>Jamie</div>
                      <p className="text-sm leading-relaxed" style={{ color: c.ink }}>I want to design things. You need someone reliable who follows your routine.</p>
                    </div>
                    <div>
                      <div style={{ ...sc, color: c.inkMuted, marginBottom: '0.25rem' }}>Mara</div>
                      <p className="text-sm leading-relaxed" style={{ color: c.ink }}>Right. I don&apos;t have time to review new lesson plans every week.</p>
                    </div>
                    <div className="pt-1" style={{ color: c.inkSoft }}>
                      <div style={{ ...sc, color: c.accent, marginBottom: '0.25rem' }}>Agreed</div>
                      <p className="text-sm leading-relaxed">Jamie follows the existing routine for the first four weeks, then designs the comprehension part of each session from week five, with Mara looking at the plan the Friday before.</p>
                    </div>
                  </div>
                </div>

                {/* Q3 */}
                <div>
                  <p className="text-base mb-4" style={{ fontWeight: 500, color: c.ink }}>
                    3. What would make this not worth it for the organization?
                  </p>
                  <div className="space-y-3 pl-4" style={{ borderLeft: `2px solid ${c.line}` }}>
                    <div>
                      <div style={{ ...sc, color: c.inkMuted, marginBottom: '0.25rem' }}>Mara</div>
                      <p className="text-sm leading-relaxed" style={{ color: c.ink }}>Missed weeks. One missed week with these kids costs me two.</p>
                    </div>
                    <div className="pt-1" style={{ color: c.inkSoft }}>
                      <div style={{ ...sc, color: c.accent, marginBottom: '0.25rem' }}>Agreed</div>
                      <p className="text-sm leading-relaxed">A fixed day and time. If Jamie has to miss, she tells Mara by Wednesday and the week is made up, not skipped.</p>
                    </div>
                  </div>
                </div>

                {/* Q4 */}
                <div>
                  <p className="text-base mb-4" style={{ fontWeight: 500, color: c.ink }}>
                    4. What would make this not worth it for the student?
                  </p>
                  <div className="space-y-3 pl-4" style={{ borderLeft: `2px solid ${c.line}` }}>
                    <div>
                      <div style={{ ...sc, color: c.inkMuted, marginBottom: '0.25rem' }}>Jamie</div>
                      <p className="text-sm leading-relaxed" style={{ color: c.ink }}>If I&apos;m just handing out worksheets for four months.</p>
                    </div>
                    <div className="pt-1" style={{ color: c.inkSoft }}>
                      <div style={{ ...sc, color: c.accent, marginBottom: '0.25rem' }}>Agreed</div>
                      <p className="text-sm leading-relaxed">The design role from week five is in the brief, not a maybe.</p>
                    </div>
                  </div>
                </div>

                {/* Q5 */}
                <div>
                  <p className="text-base mb-4" style={{ fontWeight: 500, color: c.ink }}>
                    5. How will each of you know, at the end, whether it worked?
                  </p>
                  <div className="space-y-3 pl-4" style={{ borderLeft: `2px solid ${c.line}` }}>
                    <div>
                      <div style={{ ...sc, color: c.inkMuted, marginBottom: '0.25rem' }}>Mara</div>
                      <p className="text-sm leading-relaxed" style={{ color: c.ink }}>Bay Vista already tracks reading levels each term. If her group moves like the others or better, it worked. And whether I&apos;d take her back.</p>
                    </div>
                    <div>
                      <div style={{ ...sc, color: c.inkMuted, marginBottom: '0.25rem' }}>Jamie</div>
                      <p className="text-sm leading-relaxed" style={{ color: c.ink }}>If I can show the sessions I built and say what I&apos;d change.</p>
                    </div>
                  </div>
                </div>

                {/* Q6 */}
                <div>
                  <p className="text-base mb-4" style={{ fontWeight: 500, color: c.ink }}>
                    6. What does each of you need from the other to make that happen?
                  </p>
                  <div className="space-y-3 pl-4" style={{ borderLeft: `2px solid ${c.line}` }}>
                    <div>
                      <div style={{ ...sc, color: c.inkMuted, marginBottom: '0.25rem' }}>Jamie</div>
                      <p className="text-sm leading-relaxed" style={{ color: c.ink }}>Fifteen minutes with Mara after each session.</p>
                    </div>
                    <div>
                      <div style={{ ...sc, color: c.inkMuted, marginBottom: '0.25rem' }}>Mara</div>
                      <p className="text-sm leading-relaxed" style={{ color: c.ink }}>A short written note each week on what happened in the group, so I&apos;m not relying on memory when I write the end-of-term report.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Artifact 2: Brief */}
            <div className="p-6 md:p-8" style={{ border: `1px solid ${c.line}` }}>
              {artifactLabel('The brief both sides sign')}
              <div className="space-y-0">
                {artifactRow('Project', 'Lead a reading group of four fourth graders at Bay Vista Literacy, Tuesdays and Thursdays, 3:30 to 5:00, January through May.')}
                {artifactRow('The need it meets', 'Continuity for one group, and staff time freed for the children furthest behind.')}
                {artifactRow('The growth it is built around', 'Designing the comprehension segment from week five onward (mastery and creativity); running a group of her own and reporting on it to an adult who depends on the work (identity).')}
                {artifactRow('Jamie commits to', 'Every session, preparation on Mondays, and a short note each week.')}
                {artifactRow("Bay Vista commits to", "Mara's fifteen minutes after each session, her read of the plan from week five, and the term's reading-level numbers for the group.")}
                {artifactRow('I commit to', "A check-in with Jamie every week for the first month and every two weeks after that, and the end-of-term write-up with both of them.")}
                {artifactRow('How it will be judged', "Bay Vista's own reading-level numbers for the group; Mara's answer to whether she would take Jamie back; Jamie's record of the sessions she designed and what she changed.")}
                {artifactRow('Agreed to by', 'Jamie Lee; Mara, for Bay Vista Literacy; Long Trinh.')}
              </div>
            </div>

            {statusLine('The questions and the brief exist and have been run on sample pairings only. This meeting has not yet happened with a real student and a real organization.')}
          </div>
        </div>
      </section>

      {/* Section 04: Document */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28" style={{ borderBottom: `1px solid ${c.line}`, background: c.bgDeep }}>
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div className="text-xs uppercase md:sticky md:top-24" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>
              04 / Document
            </div>
          </div>
          <div className="col-span-12 md:col-span-9 space-y-10">
            <p className="text-lg leading-relaxed" style={{ color: c.ink }}>
              The record is kept while the work happens, not written afterward. Three things go into it: Jamie&apos;s short weekly notes, Mara&apos;s feedback at the midpoint and at the end, and a competency tracker I fill in with Jamie against the three strands every few weeks, which she can disagree with. At the end, Jamie writes a short narrative of the project with the whole record in front of her, and Mara&apos;s account sits next to it. A school counselor or an admissions reader who picked this up would see what was planned, what happened, what the organization got, and what Jamie thinks she learned, in that order.
            </p>

            {/* Artifact 1 */}
            <div className="p-6 md:p-8" style={{ border: `1px solid ${c.line}`, background: c.bg }}>
              {artifactLabel("Week 6 · Jamie's note")}
              <p className="text-sm leading-relaxed" style={{ color: c.ink }}>
                First week running my own comprehension segment. I used a prediction game I made and it went badly with two of the kids because the passage was too long. Mara said the idea was right and the passage was wrong. Next week, half the length. One thing I noticed: I&apos;m less nervous talking to Mara now than I was in January, and I didn&apos;t think that was something I&apos;d learn here.
              </p>
            </div>

            {/* Artifact 2 */}
            <div className="p-6 md:p-8" style={{ border: `1px solid ${c.line}`, background: c.bg }}>
              {artifactLabel("Midpoint · Mara's feedback")}
              <p className="text-sm leading-relaxed" style={{ color: c.ink }}>
                Has not missed a session. The group&apos;s routine is solid, which has given me the time with my two kids I asked for. The new comprehension segments need shorter passages, and she already knows that. Would I take her back: yes, and I&apos;d give her a bigger group.
              </p>
            </div>

            {/* Artifact 3 */}
            <div className="p-6 md:p-8" style={{ border: `1px solid ${c.line}`, background: c.bg }}>
              {artifactLabel('Competency tracker · Week 8, excerpt')}
              <div className="space-y-0">
                {artifactRow('Mastery', 'Can run a routine without prompting; has designed three segments; cannot yet judge passage difficulty for this age, and knows it.')}
                {artifactRow('Identity', 'Describes herself as "the person who runs the Tuesday group," which she did not in January. Still names college applications as a reason she is here, less often.')}
                {artifactRow('Creativity', 'Three original segments, one of which Bay Vista kept for other volunteers.')}
              </div>
            </div>

            {statusLine('The weekly note, the feedback form, and the tracker exist and were developed in coursework. They have never been used across a full placement. This is the part of the method I most want to test, and the part I trust least until it has been compared with how students write about the same work when nobody is keeping a record.')}
          </div>
        </div>
      </section>

      {/* Closing section */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28" style={{ borderBottom: `1px solid ${c.line}` }}>
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div className="text-xs uppercase md:sticky md:top-24" style={{ letterSpacing: '0.28em', color: c.accent, fontWeight: 500 }}>
              What this doesn&apos;t show
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-10">
            <p className="text-lg leading-relaxed" style={{ color: c.ink }}>
              Whether any of it holds up. Whether a student who came for the application line ends up owning the work, whether a reader who does not know how the record was made finds it more credible than an essay, and whether Bay Vista would say, at the end, that it got real work rather than a well-documented visitor. Those are the questions on the home page, and they are the reason this needs a study rather than a nicer demo.
            </p>
            <div>
              <a
                href="/"
                className="text-base gw-link"
                style={{ color: c.ink, textDecoration: 'underline', textUnderlineOffset: '4px' }}
              >
                ← Back to the question
              </a>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter c={c} serif={serif} />
    </div>
  );
}
