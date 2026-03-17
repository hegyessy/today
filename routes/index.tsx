import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import { Day } from "../components/Day.tsx";
import Clock from "../islands/Clock.tsx";

const year = new Date().getFullYear();
const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

const MONTHS = [
  { name: "Jan", days: 31 },
  { name: "Feb", days: isLeap ? 29 : 28 },
  { name: "Mar", days: 31 },
  { name: "Apr", days: 30 },
  { name: "May", days: 31 },
  { name: "Jun", days: 30 },
  { name: "Jul", days: 31 },
  { name: "Aug", days: 31 },
  { name: "Sep", days: 30 },
  { name: "Oct", days: 31 },
  { name: "Nov", days: 30 },
  { name: "Dec", days: 31 },
];

const JP_MONTHS = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];

function ordinal(n: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] ?? s[v] ?? s[0]);
}

function formatDate(date: Date): string {
  const parts = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    month: "long",
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return `${get("weekday")} ${ordinal(date.getDate())}, ${get(
    "month",
  )} ${date.getFullYear()}`;
}

export default define.page(function Home(ctx) {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentDay = now.getDate();

  const dayOfYear =
    MONTHS.slice(0, currentMonth).reduce((sum, m) => sum + m.days, 0) +
    currentDay;
  const totalDays = isLeap ? 366 : 365;

  const allDays = MONTHS.flatMap((month, monthIndex) =>
    Array.from({ length: month.days }, (_, dayIndex) => {
      const dayNumber = dayIndex + 1;
      const isCurrentMonth = monthIndex === currentMonth;
      const isCompletedMonth = monthIndex < currentMonth;
      return {
        today: isCurrentMonth && dayNumber === currentDay,
        completed:
          isCompletedMonth || (isCurrentMonth && dayNumber < currentDay),
      };
    }),
  );

  const progress = (dayOfYear / totalDays) * 100;

  return (
    <div class="min-h-screen w-screen pb-20 p-8 flex flex-col justify-start items-center gap-6">
      <Head>
        <title>Today</title>
      </Head>
      <div class="marquee-track w-full max-w-2xl">
        <span class="marquee-content">
          ★ がんばって！ ★ 今日も最高！ ★ 一日一日を大切に ★ 諦めないで ★ 夢を追いかけろ ★ 頑張れ！ ★ がんばって！ ★
        </span>
      </div>
      <h1 class="heading-pixel">{formatDate(now)}</h1>
      <div class="flex gap-4">
        <span class="deco-scatter">★</span>
        <span class="deco-scatter" style="color:#FFE600;text-shadow:0 0 8px #FFE600">✿</span>
        <span class="deco-scatter">★</span>
        <span class="deco-scatter" style="color:#00F5FF;text-shadow:0 0 8px #00F5FF">✦</span>
        <span class="deco-scatter">★</span>
      </div>
      <div class="flex flex-row items-start gap-6">
        <ol class="month-list">
          {MONTHS.map((month, monthIndex) => (
            <li key={month.name} class={
              monthIndex === currentMonth ? "month-item-current"
              : monthIndex < currentMonth ? "month-item-past"
              : "month-item-future"
            }>
              {month.name} {JP_MONTHS[monthIndex]}
            </li>
          ))}
        </ol>
        <div class="clock-panel">
          <Clock />
        </div>
      </div>

      <ol class="month">
        {allDays.map((day, i) => (
          <Day key={i} {...day} />
        ))}
      </ol>
      <footer class="neon-footer">
        <div class="neon-footer-labels">
          <span>DAY {dayOfYear} / {totalDays}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div class="neon-progress-track">
          <div class="neon-progress-fill" style={`width: ${progress}%`}></div>
        </div>
      </footer>
    </div>
  );
});
