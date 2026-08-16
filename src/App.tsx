import React, { useState, useEffect } from "react";
import { AppShell } from "./components/layout/AppShell";
import { CommandNavigation } from "./components/hud/CommandNavigation";
import { TacticalButton } from "./components/primitives/TacticalButton";
import { BootSequence } from "./components/boot/BootSequence";
import { DossierHero } from "./components/dossier/DossierHero";
import { ProfileScan } from "./components/dossier/ProfileScan";
import { IdentityChapter } from "./components/dossier/IdentityChapter";
import { TechnicalEvolution } from "./components/dossier/TechnicalEvolution";
import { CapabilityMatrixSection } from "./components/capability/CapabilityMatrixSection";
import { OperationsSection } from "./components/operations/OperationsSection";
import { FieldOperationsSection } from "./components/field/FieldOperationsSection";
import { ClearanceSection } from "./components/clearance/ClearanceSection";
import { AccessSection } from "./components/access/AccessSection";
import { FinalFooter } from "./components/access/FinalFooter";
import { useActiveSection } from "./hooks/useActiveSection";

const SECTION_IDS = ["dossier-hero", "identity", "capabilities", "operations", "field-operations", "clearance", "access"];

export const App: React.FC = () => {
  const [showBoot, setShowBoot] = useState<boolean>(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    // Check sessionStorage & reduced motion preference for boot sequence
    if (typeof window !== "undefined") {
      const bootComplete = sessionStorage.getItem("portfolio_boot_complete");
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!bootComplete && !prefersReducedMotion) {
        setShowBoot(true);
      }
    }
  }, []);

  const handleScrollToIdentity = () => {
    const el = document.getElementById("identity");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Session Boot Takeover Overlay */}
      {showBoot && <BootSequence onComplete={() => setShowBoot(false)} />}

      <AppShell>
        {/* 00 - FULL-WIDTH UNCONSTRAINED HOME EXPERIENCE */}
        <div id="dossier-hero" className="home-experience">
          {/* CYBERVIDEO Dedicated Background Layer */}
          <div className="hero-video-background" aria-hidden="true">
            <video
              className="home-background-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            >
              <source src="/cybervideo.mp4" type="video/mp4" />
              <source src="/cybervideo/cybervideo.mp4" type="video/mp4" />
              <source src="/assets/hero-bg.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Dark Overlay for Readability */}
          <div className="home-video-overlay" aria-hidden="true" />

          {/* Centered 1440px Home Content Container (Top Controls + CMD Sidebar + Hero UI) */}
          <div className="home-content-container">
            {/* Top Bar for Command Controls */}
            <div style={{ borderBottom: "1px solid var(--color-surface-border)", paddingBottom: "var(--space-4)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "var(--space-4)" }}>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-family-mono)",
                      fontSize: "var(--font-size-xs)",
                      fontWeight: 800,
                      color: "var(--color-accent)",
                      letterSpacing: "0.08em",
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--space-2)",
                    }}
                  >
                    <span>SIGNAL // LOCKED</span>
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-family-mono)",
                      fontSize: "10px",
                      color: "var(--color-text-muted)",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      marginTop: "2px",
                    }}
                  >
                    OFFENSE × DEFENSE × DETECTION × AUTOMATION
                  </div>
                </div>

                <TacticalButton
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    sessionStorage.removeItem("portfolio_boot_complete");
                    setShowBoot(true);
                  }}
                >
                  REPLAY BOOT SEQUENCE
                </TacticalButton>
              </div>
            </div>

            {/* Layout with Main Hero Content & Right Desktop Sidebar */}
            <div className="app-main-grid" style={{ marginTop: "var(--space-6)" }}>
              {/* Main Hero Content Area */}
              <div>
                <DossierHero onScrollClick={handleScrollToIdentity} />
              </div>

              {/* Desktop Sticky Sidebar (Right Side) */}
              <aside
                className="desktop-sidebar"
                style={{
                  position: "sticky",
                  top: "80px",
                  height: "fit-content",
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-surface-border)",
                  padding: "var(--space-4)",
                }}
              >
                <CommandNavigation activeSection={activeSection} />
              </aside>
            </div>
          </div>
        </div>

        {/* SUBSEQUENT SECTIONS — CLEAN NEO-BRUTALIST PAGE CONTAINER (NO VIDEO) */}
        <div className="page-content-container" style={{ display: "flex", flexDirection: "column", gap: "var(--space-12)" }}>
          <ProfileScan />

          {/* 01 - IDENTITY CHAPTER & TECHNICAL EVOLUTION */}
          <section id="identity" style={{ scrollMarginTop: "100px" }}>
            <IdentityChapter />
            <TechnicalEvolution />
          </section>

          {/* 02 - CAPABILITIES MATRIX SECTION */}
          <CapabilityMatrixSection />

          {/* 03 - OPERATIONS SECTION (JARVIS + SENTINEL) */}
          <OperationsSection />

          {/* 04 - FIELD OPERATIONS SECTION (PROJECT ARCHIVE) */}
          <FieldOperationsSection />

          {/* 05 - CLEARANCE SECTION (CREDENTIALS & AUDIT) */}
          <ClearanceSection />

          {/* 06 - ACCESS SECTION (CONTACT, RESUME & RECRUITER CONVERSION) */}
          <AccessSection />

          {/* SYSTEM FOOTER */}
          <FinalFooter />
        </div>
      </AppShell>
    </>
  );
};

export default App;
