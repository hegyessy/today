import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export default function Clock() {
  const time = useSignal(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      time.value = new Date();
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const h = String(time.value.getHours()).padStart(2, "0");
  const m = String(time.value.getMinutes()).padStart(2, "0");
  const s = String(time.value.getSeconds()).padStart(2, "0");

  return (
    <div class="casio-clock">
      <div class="casio-screen">
        <div class="casio-time">{h}:{m}:{s}</div>
      </div>
    </div>
  );
}
