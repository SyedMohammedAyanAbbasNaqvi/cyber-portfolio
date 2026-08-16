import React from "react";
import { DOSSIER_DATA } from "../../data/dossierData";

export const FinalFooter: React.FC = () => {
  return (
    <footer className="portfolio-final-footer">
      <div>
        <div style={{ fontWeight: "bold", color: "var(--color-accent)", marginBottom: "4px" }}>
          SESSION_END // CONNECTION_AVAILABLE
        </div>
        <div>
          THANK YOU FOR ACCESSING THIS DOSSIER.
        </div>
      </div>

      <div style={{ textAlign: "right" }}>
        <div style={{ color: "var(--color-text-primary)", fontWeight: "bold", marginBottom: "4px" }}>
          {DOSSIER_DATA.identity.name}
        </div>
        <div>
          {DOSSIER_DATA.identity.title}
        </div>
      </div>
    </footer>
  );
};
