import React, { useEffect } from "react";
import { initLenis, destroyLenis } from "../../lib/lenis";
import { CornerBrackets } from "../hud/CornerBrackets";
import { ScanlineOverlay } from "../hud/ScanlineOverlay";
import { ThreatTicker } from "../hud/ThreatTicker";
import { SystemMetadata } from "../hud/SystemMetadata";
import { MobileCommandMenu } from "../hud/MobileCommandMenu";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useKeyboardShortcuts } from "../../hooks/useKeyboardShortcuts";

export interface AppShellProps {
  children: React.ReactNode;
}

const SECTION_IDS = ["dossier-hero", "identity", "capabilities", "operations", "field-operations", "clearance", "access"];

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const activeSection = useActiveSection(SECTION_IDS);

  // Keyboard shortcuts binding
  useKeyboardShortcuts({
    onSectionSelect: (sectionId) => {
      console.log(`[KEYBOARD SHORTCUT] Navigating to section: ${sectionId}`);
    },
  });

  useEffect(() => {
    // Initialize Lenis smooth scroll engine
    initLenis();

    return () => {
      destroyLenis();
    };
  }, []);

  return (
    <div className="tactical-grid-bg" style={{ minHeight: "100vh", position: "relative" }}>
      {/* Viewport Corner Brackets */}
      <CornerBrackets />

      {/* Viewport Scanlines & Sweep Overlay */}
      <ScanlineOverlay />

      {/* Accessibility Skip Link */}
      <a href="#main-content" className="skip-link">
        [ SKIP TO MAIN DOSSIER CONTENT ]
      </a>

      {/* Persistent HUD Top Header Bar */}
      <header
        style={{
          borderBottom: "1px solid var(--color-surface-border)",
          padding: "var(--space-4) var(--space-6)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(11, 13, 16, 0.85)",
          backdropFilter: "blur(6px)",
          position: "sticky",
          top: 0,
          zIndex: "var(--z-hud)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
          <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", color: "var(--color-accent)", fontWeight: "bold" }}>
            SYS.DOSSIER // AYAN ABBAS
          </div>
          <div style={{ display: "none", md: "block" } as React.CSSProperties}>
            <span style={{ fontFamily: "var(--font-family-mono)", fontSize: "10px", color: "var(--color-text-dim)" }}>
              KEYS: [1-6] SECTIONS | [J] JARVIS | [S] SENTINEL
            </span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
          <SystemMetadata activeSection={activeSection} />
          
          {/* Mobile Command Toggle */}
          <div style={{ display: "block" }}>
            <MobileCommandMenu activeSection={activeSection} />
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main id="main-content" style={{ paddingBottom: "64px" }}>
        {children}
      </main>

      {/* Fixed Bottom Threat Telemetry Feed Ticker */}
      <ThreatTicker />
    </div>
  );
};
