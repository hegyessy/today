import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

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
  const get = (type: string) =>
    parts.find((p) => p.type === type)?.value ?? "";
  return `${get("weekday")} ${ordinal(date.getDate())}, ${get(
    "month",
  )} ${date.getFullYear()}`;
}

export default function DateHeading() {
  const text = useSignal("");

  useEffect(() => {
    text.value = formatDate(new Date());
  }, []);

  return <h1 class="heading-pixel">{text.value}</h1>;
}
