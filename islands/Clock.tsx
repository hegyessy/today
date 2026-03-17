import { useEffect, useState } from "preact/hooks";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const s = time.getSeconds();
  const m = time.getMinutes();
  const h = time.getHours() % 12;

  const sDeg = s * 6;
  const mDeg = m * 6 + s * 0.1;
  const hDeg = h * 30 + m * 0.5;

  const hand = (deg: number, length: number, width: number) => {
    const r = deg * (Math.PI / 180);
    const x = 36 + Math.sin(r) * length;
    const y = 36 - Math.cos(r) * length;
    return (
      <line
        x1="36"
        y1="36"
        x2={x}
        y2={y}
        stroke-width={width}
        stroke-linecap="round"
      />
    );
  };

  return (
    <svg width="72" height="72" viewBox="0 0 72 72">
      <defs>
        <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="neon-glow-strong" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Face */}
      <circle cx="36" cy="36" r="34" fill="rgba(6,0,26,0.85)" stroke="#FF0080" stroke-width="1.5" filter="url(#neon-glow)" />

      {/* 12 hour tick marks */}
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i * 30) * (Math.PI / 180);
        return <line key={i}
          x1={36 + Math.sin(angle) * 28} y1={36 - Math.cos(angle) * 28}
          x2={36 + Math.sin(angle) * 32} y2={36 - Math.cos(angle) * 32}
          stroke="#00F5FF" stroke-width="1" stroke-linecap="round" filter="url(#neon-glow)" />;
      })}

      {/* Hour + minute hands — cyan */}
      <g stroke="#00F5FF" filter="url(#neon-glow)">
        {hand(hDeg, 18, 2.5)}
        {hand(mDeg, 24, 1.5)}
      </g>

      {/* Second hand — hot pink */}
      <g stroke="#FF0080" filter="url(#neon-glow-strong)">
        {hand(sDeg, 28, 1)}
      </g>

      {/* Center dot */}
      <circle cx="36" cy="36" r="2.5" fill="#FF0080" filter="url(#neon-glow-strong)" />
    </svg>
  );
}
