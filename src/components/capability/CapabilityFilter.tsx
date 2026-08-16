import React from "react";
import { Filter } from "lucide-react";

export type FilterCategory = "ALL" | "BUILD" | "DEFEND" | "ATTACK" | "AUTOMATE";

export interface CapabilityFilterProps {
  activeFilter: FilterCategory;
  onFilterChange: (category: FilterCategory) => void;
}

export const CapabilityFilter: React.FC<CapabilityFilterProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  const categories: { id: FilterCategory; label: string; count: string }[] = [
    { id: "ALL", label: "ALL DOMAINS", count: "04" },
    { id: "ATTACK", label: "01 // RED TEAM", count: "01" },
    { id: "DEFEND", label: "02 // BLUE TEAM", count: "02" },
    { id: "BUILD", label: "03 // APP & IDENTITY", count: "03" },
    { id: "AUTOMATE", label: "04 // AI SECURITY", count: "04" },
  ];

  return (
    <div
      aria-label="Capability Filter Controls"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--space-2)",
        flexWrap: "wrap",
        marginBottom: "var(--space-6)",
        fontFamily: "var(--font-family-mono)",
        fontSize: "var(--font-size-xs)",
      }}
    >
      <div style={{ color: "var(--color-text-dim)", display: "flex", alignItems: "center", gap: "6px", marginRight: "var(--space-2)" }}>
        <Filter size={12} />
        <span>FILTER:</span>
      </div>

      {categories.map((cat) => {
        const isActive = activeFilter === cat.id;

        return (
          <button
            key={cat.id}
            onClick={() => onFilterChange(cat.id)}
            style={{
              background: isActive ? "rgba(255, 90, 31, 0.12)" : "var(--color-surface)",
              border: isActive ? "1px solid var(--color-accent)" : "1px solid var(--color-surface-border)",
              color: isActive ? "var(--color-accent)" : "var(--color-text-muted)",
              padding: "6px 12px",
              fontFamily: "inherit",
              fontSize: "inherit",
              fontWeight: isActive ? "bold" : "normal",
              cursor: "pointer",
              transition: "all var(--motion-fast)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span>{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
};
