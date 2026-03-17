export interface DayProps {
  today?: boolean;
  completed?: boolean;
  date?: string;
  delay?: number;
}

export function Day({ today, completed, date, delay = 0 }: DayProps) {
  const classes = ["day", completed && "completed", today && "today"]
    .filter(Boolean)
    .join(" ");

  return <li class={classes} data-date={date} style={`--d:${delay}ms`}></li>;
}
