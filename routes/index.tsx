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
    <div class="font-mono min-h-screen w-screen bg-gray-100 dark:bg-gray-800 pb-20 p-12 flex flex-col justify-start items-center gap-4">
      <Head>
        <title>Today</title>
      </Head>
      <h1 class="text-gray-900 dark:text-white">{formatDate(now)}</h1>
      <div class="flex flex-row items-start gap-6">
        <ol class="text-gray-400 font-mono text-xs grid grid-cols-3 gap-2">
          {MONTHS.map((month, monthIndex) => (
            <li
              key={month.name}
              class={
                monthIndex === currentMonth
                  ? "text-orange-500"
                  : monthIndex < currentMonth
                    ? "text-gray-800 dark:text-white"
                    : ""
              }
            >
              {month.name}
            </li>
          ))}
        </ol>
        <Clock />
      </div>

      <ol class="month">
        {allDays.map((day, i) => (
          <Day key={i} {...day} />
        ))}
      </ol>
      <footer class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-transparent px-6 py-3 flex flex-col gap-2">
        <div class="flex justify-between text-xs text-gray-400">
          <span>
            Day {dayOfYear} of {totalDays}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
          <div
            class="bg-orange-500 h-1.5 rounded-full"
            style={`width: ${progress}%`}
          ></div>
        </div>
      </footer>
    </div>
  );
});
