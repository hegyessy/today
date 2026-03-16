export interface DayProps {
  today?: boolean;
  completed?: boolean;
  date?: string;
}

export function Day({ today, completed, date }: DayProps) {
  const classes = ["day", completed && "completed", today && "today"]
    .filter(Boolean)
    .join(" ");

  return <li class={classes} data-date={date}></li>;
}
