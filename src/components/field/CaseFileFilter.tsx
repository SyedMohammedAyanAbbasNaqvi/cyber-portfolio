import React from "react";
import type { FieldProjectCategory } from "../../types/dossier";
import { Filter } from "lucide-react";

export type FilterCategory = "ALL" | FieldProjectCategory;

export interface CaseFileFilterProps {
  activeFilter: FilterCategory;
  onFilterChange: (filter: FilterCategory) => void;
  counts: Record<FilterCategory, number>;
}

export const CaseFileFilter: React.FC<CaseFileFilterProps> = ({
  activeFilter,
  onFilterChange,
  counts,
}) => {
  const options: FilterCategory[] = ["ALL", "RED TEAM", "BLUE TEAM"];

  return (
    <div className="field-filter-bar">
      <div style={{ display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", color: "var(--color-text-dim)", marginRight: "var(--space-2)" }}>
        <Filter size={12} />
        <span>FILTER CASES:</span>
      </div>

      {options.map((opt) => {
        const isActive = activeFilter === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onFilterChange(opt)}
            className={`field-filter-btn ${isActive ? "active" : ""}`}
            aria-pressed={isActive}
          >
            {opt} [{counts[opt] || 0}]
          </button>
        );
      })}
    </div>
  );
};
