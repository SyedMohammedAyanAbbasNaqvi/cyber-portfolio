import React, { useState, useEffect } from "react";

export const LiveClock: React.FC = () => {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      
      setTimeString(`${hours}:${minutes}:${seconds} IST`);
    };

    updateTime(); // Initial call
    const timerId = setInterval(updateTime, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div
      style={{
        fontFamily: "var(--font-family-mono)",
        fontSize: "var(--font-size-xs)",
        color: "var(--color-intelligence)",
        fontWeight: "bold",
        letterSpacing: "0.05em",
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
      }}
    >
      <span
        style={{
          width: "6px",
          height: "6px",
          backgroundColor: "var(--color-intelligence)",
          display: "inline-block",
        }}
      />
      <span>{timeString || "00:00:00 IST"}</span>
    </div>
  );
};
