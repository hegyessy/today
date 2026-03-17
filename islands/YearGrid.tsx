import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { Day } from "../components/Day.tsx";

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

function getMonths(year: number) {
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  return [
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
}

export default function YearGrid() {
  const ready = useSignal(false);
  const year = useSignal(new Date().getFullYear());
  const currentMonth = useSignal(new Date().getMonth());
  const currentDay = useSignal(new Date().getDate());

  useEffect(() => {
    const now = new Date();
    year.value = now.getFullYear();
    currentMonth.value = now.getMonth();
    currentDay.value = now.getDate();
    ready.value = true;
  }, []);

  const months = getMonths(year.value);

  if (!ready.value) {
    return <div class="year-grid" />;
  }

  return (
    <div class="year-grid">
      {months.map((month, monthIndex) => {
        const isPast = monthIndex < currentMonth.value;
        const isCurrent = monthIndex === currentMonth.value;
        const days = Array.from({ length: month.days }, (_, dayIndex) => {
          const dayNumber = dayIndex + 1;
          return {
            today: isCurrent && dayNumber === currentDay.value,
            completed: isPast || (isCurrent && dayNumber < currentDay.value),
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
  );
}
