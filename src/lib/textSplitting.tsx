import React from "react";

export interface SplitTextProps {
  text: string;
  className?: string;
  charClassName?: string;
  wordClassName?: string;
  mode?: "words" | "chars";
  style?: React.CSSProperties;
}

/**
 * Accessible Text-Splitting Component
 * 
 * Separates accessible screen-reader text (`sr-only`) from visual GSAP animation targets (`aria-hidden="true"`).
 * Prevents duplicate screen-reader announcements when animating words/characters.
 */
export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  charClassName = "split-char",
  wordClassName = "split-word",
  mode = "words",
  style,
}) => {
  const words = text.split(" ");

  return (
    <span className={`split-text-root ${className}`} style={{ display: "inline-block", ...style }}>
      {/* Accessible text for screen readers */}
      <span className="sr-only">{text}</span>

      {/* Visual elements for GSAP animation */}
      <span aria-hidden="true" style={{ display: "inline-block" }}>
        {mode === "words"
          ? words.map((word, wIdx) => (
              <React.Fragment key={wIdx}>
                <span
                  className={wordClassName}
                  style={{
                    display: "inline-block",
                    willChange: "transform, opacity",
                  }}
                >
                  {word}
                </span>
                {wIdx < words.length - 1 && <span style={{ display: "inline-block" }}>&nbsp;</span>}
              </React.Fragment>
            ))
          : words.map((word, wIdx) => (
              <React.Fragment key={wIdx}>
                <span className={wordClassName} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                  {word.split("").map((char, cIdx) => (
                    <span
                      key={cIdx}
                      className={charClassName}
                      style={{
                        display: "inline-block",
                        willChange: "transform, opacity",
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
                {wIdx < words.length - 1 && <span style={{ display: "inline-block" }}>&nbsp;</span>}
              </React.Fragment>
            ))}
      </span>
    </span>
  );
};
