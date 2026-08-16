import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

export interface BootSequenceProps {
  onComplete: () => void;
}

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0);
  const [isSkipped, setIsSkipped] = useState<boolean>(false);
  const [isGlitching, setIsGlitching] = useState<boolean>(false);

  const bootLines = [
    "INITIALIZING PORTFOLIO ACCESS...",
    "SCANNING PROFILE...",
    "IDENTITY MATCH: AYAN_ABBAS",
    "CLEARANCE REQUESTED...",
    "ACCESS GRANTED",
  ];

  const handleFinish = useCallback(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("portfolio_boot_complete", "true");
    }
    onComplete();
  }, [onComplete]);

  // Handle instant skip
  const handleSkip = useCallback(() => {
    if (isSkipped) return;
    setIsSkipped(true);
    setIsGlitching(true);
    setTimeout(() => {
      handleFinish();
    }, 200);
  }, [isSkipped, handleFinish]);

  // Keypress / Click listener for skip
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleSkip();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleSkip]);

  // Automated typewriter / line reveal step timer
  useEffect(() => {
    if (isSkipped) return;

    if (currentLineIndex < bootLines.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      // Final ACCESS GRANTED phase
      const endTimer = setTimeout(() => {
        setIsGlitching(true);
        setTimeout(() => {
          handleFinish();
        }, 300);
      }, 600);
      return () => clearTimeout(endTimer);
    }
  }, [currentLineIndex, isSkipped, bootLines.length, handleFinish]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isGlitching ? 0.8 : 1, filter: isGlitching ? "contrast(150%) hue-rotate(90deg)" : "none" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={handleSkip}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "#0B0D10",
          zIndex: "var(--z-boot)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-family-mono)",
          padding: "var(--space-6)",
          boxSizing: "border-box",
          cursor: "pointer",
        }}
      >
        <div style={{ maxWidth: "600px", width: "100%" }}>
          {/* Header Code Tag */}
          <div
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-xs)",
              marginBottom: "var(--space-6)",
              letterSpacing: "0.05em",
            }}
          >
            [ SECURE BOOT // AYAN ABBAS DOSSIER ]
          </div>

          {/* Sequential Monospace Lines */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", minHeight: "180px" }}>
            {bootLines.slice(0, currentLineIndex + 1).map((line, idx) => {
              const isAccessGranted = line === "ACCESS GRANTED";
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    fontSize: isAccessGranted ? "var(--font-size-lg)" : "var(--font-size-sm)",
                    fontWeight: isAccessGranted ? "bold" : "normal",
                    color: isAccessGranted ? "var(--color-success)" : "var(--color-text-primary)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span style={{ color: isAccessGranted ? "var(--color-success)" : "var(--color-intelligence)" }}>
                    &gt;&gt;
                  </span>
                  <span>{line}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Skip Hint */}
          <div
            style={{
              marginTop: "var(--space-8)",
              fontSize: "10px",
              color: "var(--color-text-dim)",
              borderTop: "1px solid var(--color-surface-border)",
              paddingTop: "var(--space-4)",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>[CLICK / PRESS ANY KEY TO SKIP]</span>
            <span>CLEARANCE: LVL-05</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
