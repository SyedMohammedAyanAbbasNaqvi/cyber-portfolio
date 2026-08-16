import React from "react";
import { getLenis } from "../../lib/lenis";

export interface NavigationItem {
  id: string;
  num: string;
  label: string;
}

export const NAV_ITEMS: NavigationItem[] = [
  { id: "identity", num: "01", label: "IDENTITY" },
  { id: "capabilities", num: "02", label: "CAPABILITIES" },
  { id: "operations", num: "03", label: "OPERATIONS" },
  { id: "field-operations", num: "04", label: "FIELD OPERATIONS" },
  { id: "clearance", num: "05", label: "CLEARANCE" },
  { id: "access", num: "06", label: "ACCESS" },
];




export interface CommandNavigationProps {
  activeSection: string;
  onNavigate?: (id: string) => void;
}

export const CommandNavigation: React.FC<CommandNavigationProps> = ({ activeSection, onNavigate }) => {
  const handleScrollTo = (id: string) => {
    onNavigate?.(id);
    const targetEl = document.getElementById(id);
    if (targetEl) {
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(targetEl);
      } else {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      aria-label="Command Center Navigation"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-2)",
        fontFamily: "var(--font-family-mono)",
        fontSize: "var(--font-size-xs)",
      }}
    >
      <div
        style={{
          color: "var(--color-accent)",
          fontWeight: "bold",
          borderBottom: "1px solid var(--color-surface-border)",
          paddingBottom: "var(--space-2)",
          marginBottom: "var(--space-2)",
          letterSpacing: "0.05em",
        }}
      >
        AYAN_ABBAS // CMD
      </div>

      {/* Chapters */}
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <li key={item.id}>
              <button
                onClick={() => handleScrollTo(item.id)}
                style={{
                  background: "none",
                  border: "none",
                  padding: "10px 12px",
                  minHeight: "44px",
                  color: isActive ? "var(--color-accent)" : "var(--color-text-muted)",
                  backgroundColor: isActive ? "rgba(255, 90, 31, 0.1)" : "transparent",
                  borderLeft: isActive ? "2px solid var(--color-accent)" : "2px solid transparent",
                  fontFamily: "inherit",
                  fontSize: "inherit",
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "left",
                  transition: "all var(--motion-fast)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ color: isActive ? "var(--color-accent)" : "var(--color-text-dim)" }}>
                  [{item.num}]
                </span>
                <span>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Direct System Actions */}
      <div style={{ borderTop: "1px solid var(--color-surface-border)", paddingTop: "var(--space-3)", marginTop: "var(--space-2)" }}>
        <div style={{ color: "var(--color-text-dim)", fontSize: "10px", marginBottom: "var(--space-2)" }}>
          DIRECT SYSTEMS
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
          <button
            onClick={() => handleScrollTo("operation-jarvis")}
            style={{
              background: "none",
              border: "none",
              padding: "10px 12px",
              minHeight: "44px",
              color: "var(--color-intelligence)",
              fontFamily: "inherit",
              fontSize: "inherit",
              cursor: "pointer",
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span style={{ color: "var(--color-accent)" }}>[J]</span> JARVIS AI OPERATIVE
          </button>
          <button
            onClick={() => handleScrollTo("operation-sentinel")}
            style={{
              background: "none",
              border: "none",
              padding: "10px 12px",
              minHeight: "44px",
              color: "var(--color-intelligence)",
              fontFamily: "inherit",
              fontSize: "inherit",
              cursor: "pointer",
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span style={{ color: "var(--color-accent)" }}>[S]</span> SENTINEL AI SOC
          </button>
        </div>
      </div>
    </nav>
  );
};
