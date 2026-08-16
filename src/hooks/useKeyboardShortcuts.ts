import { useEffect, useRef } from "react";
import { getLenis } from "../lib/lenis";

export interface KeyboardShortcutHandlers {
  onSectionSelect?: (sectionId: string) => void;
  onActionSelect?: (actionKey: "J" | "S") => void;
}

export function useKeyboardShortcuts(handlers: KeyboardShortcutHandlers) {
  const handlersRef = useRef(handlers);
  handlersRef.current = handlers;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if user is typing inside an input field
      const activeEl = document.activeElement;
      if (
        activeEl &&
        (activeEl.tagName === "INPUT" ||
          activeEl.tagName === "TEXTAREA" ||
          activeEl.tagName === "SELECT" ||
          (activeEl as HTMLElement).isContentEditable)
      ) {
        return;
      }

      // Ignore ctrl/cmd/alt/shift combinations
      if (e.ctrlKey || e.altKey || e.metaKey) return;

      const key = e.key.toUpperCase();

      const sectionMap: Record<string, string> = {
        "1": "identity",
        "2": "capabilities",
        "3": "operations",
        "4": "field-operations",
        "5": "clearance",
        "6": "access",
      };

      if (sectionMap[key]) {
        e.preventDefault();
        const sectionId = sectionMap[key];
        handlersRef.current.onSectionSelect?.(sectionId);

        const targetEl = document.getElementById(sectionId);
        if (targetEl) {
          const lenis = getLenis();
          if (lenis) {
            lenis.scrollTo(targetEl);
          } else {
            targetEl.scrollIntoView({ behavior: "smooth" });
          }
        }
      } else if (key === "J" || key === "S") {
        e.preventDefault();
        handlersRef.current.onActionSelect?.(key as "J" | "S");

        const actionTargetMap: Record<string, string> = {
          J: "operation-jarvis",
          S: "operation-sentinel",
        };

        const targetId = actionTargetMap[key];
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          const lenis = getLenis();
          if (lenis) {
            lenis.scrollTo(targetEl);
          } else {
            targetEl.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}

