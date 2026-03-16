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
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      class="text-gray-400 dark:text-gray-500"
    >
      {/* Face */}
      <circle
        cx="36"
        cy="36"
        r="34"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      />
      {/* Center dot */}
      <circle cx="36" cy="36" r="2" fill="currentColor" />
      {/* Hands */}
      <g stroke="currentColor">
        {hand(hDeg, 18, 2.5)}
        {hand(mDeg, 24, 1.5)}
      </g>
      {/* Second hand */}
      <g stroke="rgb(249 115 22)">
        {hand(sDeg, 28, 1)}
      </g>
    </svg>
  );
}
