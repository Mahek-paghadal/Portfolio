import React, { useEffect, useRef, useState } from 'react';

const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

const LOGS = [
  '[BOOT]     Initializing system kernel...',
  '[SYS]      Loading environment variables... OK',
  '[NET]      Establishing secure connection... OK',
  '[AUTH]     Verifying identity token... OK',
  '[DB]       Connecting to database... OK',
  '[CACHE]    Warming up cache layer... OK',
  '[API]      Mounting REST endpoints... OK',
  '[UI]       Hydrating component tree... OK',
  '[READY]    All systems operational. Welcome, Mahek.',
];

const THEME = {
  bg: '#1f252d',
  cardBg: '#1b222b',
  barBg: '#212a34',
  border: 'rgba(255,255,255,0.1)',
  accent: '#22d3ee',
  accent2: '#67e8f9',
  text: '#e2e8f0',
  textMuted: '#94a3b8',
  textPanel: '#cbd5e1',
  glow: 'rgba(0,196,200,0.25)',
};

const PREFIX_COLORS: Record<string, string> = {
  '[BOOT]': '#67e8f9',
  '[SYS]': '#22d3ee',
  '[NET]': '#a5f3fc',
  '[AUTH]': '#7dd3fc',
  '[DB]': '#94a3b8',
  '[CACHE]': '#5eead4',
  '[API]': '#22d3ee',
  '[UI]': '#67e8f9',
  '[READY]': '#ffffff',
};

interface LoadingScreenProps {
  onComplete: () => void;
}

type LineState = {
  id: number;
  line: string;
  timestamp: string;
  typed: number;
};

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<LineState[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  const [exiting, setExiting] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);
  const runId = useRef(0);

  useEffect(() => {
    runId.current += 1;
    const currentRun = runId.current;
    let mounted = true;
    let cursorBlink: ReturnType<typeof setInterval>;
    (async () => {
      setLines([]);
      setExiting(false);
      for (let i = 0; i < LOGS.length; i++) {
        const line = LOGS[i];
        const timestamp = new Date().toLocaleTimeString([], { hour12: false });
        if (!mounted || currentRun !== runId.current) return;
        setLines(prev => [...prev, { id: i, line, timestamp, typed: 0 }]);
        for (let c = 0; c <= line.length; c++) {
          if (!mounted || currentRun !== runId.current) return;
          setLines(prev => prev.map(item => item.id === i ? { ...item, typed: c } : item));
          await sleep(16 + Math.floor(Math.random() * 10 - 5));
        }
        await sleep(120 + Math.floor(Math.random() * 80));
      }
      if (!mounted || currentRun !== runId.current) return;
      await sleep(700);
      setExiting(true);
      await sleep(500);
      if (mounted) onComplete();
    })();
    cursorBlink = setInterval(() => setShowCursor(c => !c), 700);
    return () => {
      mounted = false;
      clearInterval(cursorBlink);
    };
  }, [onComplete]);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [lines]);

  // Exit transition: fade + scale
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${exiting ? 'opacity-0' : 'opacity-100'}`}
      style={{
        background: `${THEME.bg} radial-gradient(circle at 0 0, rgba(0,196,200,0.12) 0%, transparent 70%)`,
      }}
    >
      <div className="flex w-full flex-col items-center gap-4">
        <div className="text-center">
          <h1 style={{ fontFamily: 'Zilla Slab, serif' }} className="text-[34px] font-semibold tracking-[0.12em]">
            <span style={{ color: THEME.accent }}>PORT</span>
            <span style={{ color: THEME.text }}>FOLIO</span>
          </h1>
          <p style={{ fontFamily: 'Zilla Slab, serif' }} className="text-[16px] tracking-[0.14em]">
            <span style={{ color: THEME.textMuted }}>BACKEND</span>
            <span style={{ color: THEME.accent2 }}> & </span>
            <span style={{ color: THEME.accent }}>FLUTTER</span>
            <span style={{ color: THEME.textMuted }}> DEVELOPER</span>
          </p>
        </div>
        <div
        className={`relative flex flex-col w-[min(860px,92vw)] h-[min(460px,75vh)] bg-[#1b222b] border border-[rgba(255,255,255,0.1)] rounded-2xl shadow-xl transition-all duration-400 ${exiting ? 'scale-95' : 'scale-100'} animate-fadein`}
        style={{
          boxShadow:
            '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,196,200,0.08), 0 0 60px rgba(0,196,200,0.06)',
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center justify-between h-11 px-4 border-b border-[rgba(255,255,255,0.08)] bg-[#212a34] rounded-t-2xl"
          style={{ fontFamily: 'monospace', fontSize: 13 }}
        >
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
            <span className="inline-block w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
            <span className="inline-block w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
            <span className="ml-4 text-[#94a3b8] tracking-wide" style={{ fontFamily: 'monospace', fontSize: 13 }}>
              portfolio-os — bash — 80×24
            </span>
          </div>
        </div>
        {/* Log area */}
        <div
          ref={logRef}
          className="flex-1 overflow-y-auto px-6 py-5"
          style={{
            fontFamily: 'Courier New, Courier, monospace',
            fontSize: 13.5,
            lineHeight: 1.7,
            color: THEME.textPanel,
            scrollbarColor: 'rgba(34,211,238,0.3) transparent',
            background: 'none',
          }}
        >
          {lines.map((item, index) => {
            const prefixEnd = item.line.indexOf(']') + 1;
            const typedLine = item.line.slice(0, item.typed);
            const typedPrefix = typedLine.slice(0, Math.min(typedLine.length, prefixEnd));
            const typedMessage = typedLine.length > prefixEnd ? typedLine.slice(prefixEnd) : '';
            const prefix = item.line.slice(0, prefixEnd);
            const isReady = prefix === '[READY]';
            const isLast = index === lines.length - 1;
            const showTypingCursor = isLast && item.typed < item.line.length && showCursor;
            return (
              <div key={`log-${item.id}`}>
                <span style={{ color: THEME.textMuted, marginRight: 8 }}>[{item.timestamp}]</span>
                <span style={{ color: PREFIX_COLORS[prefix] || THEME.accent, fontWeight: 700 }}>{typedPrefix}</span>
                <span style={{ color: isReady ? '#ffffff' : THEME.textPanel, marginLeft: 8, textShadow: isReady ? '0 0 10px rgba(34,211,238,0.6)' : 'none' }}>{typedMessage}</span>
                {showTypingCursor && (
                  <span style={{ color: THEME.accent, fontWeight: 700, animation: 'blink 1.4s steps(2) infinite' }}>▌</span>
                )}
              </div>
            );
          })}
        </div>
        {/* Status bar */}
        <div
          className="flex items-center justify-between h-8 px-4 border-t border-[rgba(255,255,255,0.06)] bg-[#212a34] rounded-b-2xl"
          style={{ fontFamily: 'monospace', fontSize: 12 }}
        >
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full mr-1" style={{ background: '#22c55e' }} />
            <span className="text-[#94a3b8]">connected</span>
          </div>
        </div>
        <style>{`
          @keyframes fadein { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }
          .animate-fadein { animation: fadein 0.4s cubic-bezier(.4,0,.2,1) both; }
          @keyframes blink { 0%,49%{opacity:1;} 50%,100%{opacity:0;} }
        `}</style>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
