'use client';
import React from 'react';

export default function SharedFooter({ c, serif }) {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-12" style={{ borderTop: `1px solid ${c.line}` }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-2xl" style={{ fontFamily: serif, fontWeight: 500 }}>Gateway</span>
            <span style={{ color: c.accent, fontFamily: serif }}>·</span>
            <span className="text-xs uppercase" style={{ letterSpacing: '0.22em', color: c.inkSoft, fontWeight: 500 }}>Impact Lab</span>
          </div>
          <div className="text-sm mb-3" style={{ color: c.inkSoft }}>San Francisco Bay Area · Cambridge, MA</div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase mb-3" style={{ letterSpacing: '0.18em', color: c.inkMuted }}>
            <a href="/" className="gw-link" style={{ color: c.inkMuted, fontWeight: 500 }}>Home</a>
            <span style={{ color: c.line }}>·</span>
            <a href="/co-design" className="gw-link" style={{ color: c.inkMuted, fontWeight: 500 }}>One Project</a>
            <span style={{ color: c.line }}>·</span>
            <a href="/partners" className="gw-link" style={{ color: c.inkMuted, fontWeight: 500 }}>For Organizations</a>
            <span style={{ color: c.line }}>·</span>
            <a href="/contact" className="gw-link" style={{ color: c.inkMuted, fontWeight: 500 }}>Contact</a>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm" style={{ color: c.inkMuted }}>
            <a
              href="https://www.linkedin.com/in/long-trinh-47b61042/"
              target="_blank"
              rel="noopener noreferrer"
              className="gw-link"
              style={{ color: c.inkMuted, textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              LinkedIn
            </a>
            <a
              href="mailto:long_trinh@gse.harvard.edu"
              className="gw-link"
              style={{ color: c.inkMuted, textDecoration: 'underline', textUnderlineOffset: '3px' }}
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
  );
}
