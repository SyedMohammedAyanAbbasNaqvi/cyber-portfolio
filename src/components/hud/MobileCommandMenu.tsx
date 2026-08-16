import React, { useState, useEffect, useRef } from "react";
import { CommandNavigation } from "./CommandNavigation";
import { X, Menu } from "lucide-react";

export interface MobileCommandMenuProps {
  activeSection: string;
}

export const MobileCommandMenu: React.FC<MobileCommandMenuProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Handle Escape key to close menu & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-command-drawer"
        aria-label="Toggle Command Navigation Menu"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          backgroundColor: "var(--color-surface)",
          color: "var(--color-accent)",
          border: "1px solid var(--color-accent)",
          padding: "8px 14px",
          fontFamily: "var(--font-family-mono)",
          fontSize: "var(--font-size-xs)",
          fontWeight: "bold",
          cursor: "pointer",
          minHeight: "44px",
          minWidth: "44px",
        }}
      >
        <Menu size={16} />
        <span>[CMD]</span>
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          id="mobile-command-drawer"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Command Center Navigation"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100vh",
            minHeight: "100dvh",
            backgroundColor: "rgba(11, 13, 16, 0.97)",
            backdropFilter: "blur(12px)",
            zIndex: "var(--z-menu)",
            paddingTop: "calc(var(--space-6) + env(safe-area-inset-top, 0px))",
            paddingBottom: "calc(var(--space-6) + env(safe-area-inset-bottom, 0px))",
            paddingLeft: "calc(var(--space-6) + env(safe-area-inset-left, 0px))",
            paddingRight: "calc(var(--space-6) + env(safe-area-inset-right, 0px))",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          {/* Header Bar with Close Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid var(--color-surface-border)",
              paddingBottom: "var(--space-4)",
            }}
          >
            <div style={{ fontFamily: "var(--font-family-mono)", color: "var(--color-accent)", fontWeight: "bold" }}>
              COMMAND CENTER // MOBILE
            </div>
            <button
              ref={closeButtonRef}
              onClick={() => setIsOpen(false)}
              aria-label="Close Command Navigation Menu"
              style={{
                background: "none",
                border: "1px solid var(--color-threat)",
                color: "var(--color-threat)",
                padding: "8px 14px",
                fontFamily: "var(--font-family-mono)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                minHeight: "44px",
                minWidth: "44px",
              }}
            >
              <X size={16} />
              <span>[ESC / CLOSE]</span>
            </button>
          </div>

          {/* Navigation Body */}
          <div style={{ padding: "var(--space-6) 0", flex: 1, overflowY: "auto" }}>
            <CommandNavigation
              activeSection={activeSection}
              onNavigate={() => setIsOpen(false)}
            />
          </div>

          {/* Footer Metadata */}
          <div
            style={{
              borderTop: "1px solid var(--color-surface-border)",
              paddingTop: "var(--space-4)",
              fontFamily: "var(--font-family-mono)",
              fontSize: "10px",
              color: "var(--color-text-muted)",
              textAlign: "center",
            }}
          >
            PRESS [ESC] OR TAP ANY LINK TO CLOSE
          </div>
        </div>
      )}
    </>
  );
};
