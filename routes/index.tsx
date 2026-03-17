import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import Clock from "../islands/Clock.tsx";
import Phrase from "../islands/Phrase.tsx";
import DateHeading from "../islands/DateHeading.tsx";
import YearGrid from "../islands/YearGrid.tsx";

export default define.page(function Home(ctx) {
  return (
    <div class="min-h-screen w-screen p-4 flex flex-col justify-start items-center gap-2">
      <Head>
        <title>Today</title>
      </Head>
      <div class="relative z-10 w-full flex flex-col items-center gap-2">
        <Phrase />

        <div class="clock-panel">
          <Clock />
        </div>
        <DateHeading />

        <YearGrid />
      </div>
    </div>
  );
});
