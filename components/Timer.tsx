import { useEffect, useState } from "react";

export default function CurrentTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setTime(formatted);
    };

    updateTime(); // set immediately
    const interval = setInterval(updateTime, 1000); // update every second
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="text-sm sm:text-base font-semibold"
      style={{ color: "var(--text-secondary)" }}
    >
      {time}
    </div>
  );
}
