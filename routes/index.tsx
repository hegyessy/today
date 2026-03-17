import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import { Day } from "../components/Day.tsx";
import Clock from "../islands/Clock.tsx";
import Phrase from "../islands/Phrase.tsx";

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

const JP_MONTHS = [
  "一月",
  "二月",
  "三月",
  "四月",
  "五月",
  "六月",
  "七月",
  "八月",
  "九月",
  "十月",
  "十一月",
  "十二月",
];

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

  return (
    <div class="min-h-screen w-screen p-4 flex flex-col justify-start items-center gap-2">
      <Head>
        <title>Today</title>
      </Head>
      {/* Fixed background cell grid */}
      <div class="relative z-10 w-full flex flex-col items-center gap-2">
        <Phrase />

        <div class="clock-panel">
          <Clock />
        </div>
        <h1 class="heading-pixel">{formatDate(now)}</h1>

        <div class="year-grid">
          {MONTHS.map((month, monthIndex) => {
            const isPast = monthIndex < currentMonth;
            const isCurrent = monthIndex === currentMonth;
            const days = Array.from({ length: month.days }, (_, dayIndex) => {
              const dayNumber = dayIndex + 1;
              return {
                today: isCurrent && dayNumber === currentDay,
                completed: isPast || (isCurrent && dayNumber < currentDay),
                delay: monthIndex * 80 + dayIndex * 25,
              };
            });
            return (
              <div class="month-col" key={month.name}>
                <div
                  class={`month-col-label ${isCurrent ? "month-col-label--current" : isPast ? "month-col-label--past" : "month-col-label--future"}`}
                >
                  {JP_MONTHS[monthIndex]}
                </div>
                <ol class="month-col-days">
                  {days.map((day, i) => (
                    <Day key={i} {...day} />
                  ))}
                </ol>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});
