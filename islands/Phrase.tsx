import { useState } from "preact/hooks";

const PHRASES = [
  "がんばって！",
  "今日も最高！",
  "一日一日を大切に",
  "諦めないで",
  "夢を追いかけろ",
  "頑張れ！",
  "できる！",
  "前に進め",
];

export default function Phrase() {
  const [index, setIndex] = useState(0);

  function handleIteration() {
    setIndex((current) => {
      let next;
      do {
        next = Math.floor(Math.random() * PHRASES.length);
      } while (next === current);
      return next;
    });
  }

  return (
    <div class="phrase-display" onAnimationIteration={handleIteration}>
      {PHRASES[index]}
    </div>
  );
}
