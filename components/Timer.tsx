import { useEffect, useState } from "react";

export default function CurrentTime() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      
      // Format date: short weekday, short month, numeric day
      const date = now.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });

      // Format time: hh:mm AM/PM
      const time = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      setDateTime(`${date},  ${time}`);
    };

    updateDateTime(); // set immediately
    const interval = setInterval(updateDateTime, 1000); // update every second
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="text-sm sm:text-base font-semibold"
      style={{ color: "var(--text-secondary)" }}
    >
      {dateTime}
    </div>
  );
}
