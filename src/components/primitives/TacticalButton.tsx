import React from "react";
import { motion, type HTMLMotionProps } from "motion/react";

export interface TacticalButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "intelligence" | "threat" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const TacticalButton: React.FC<TacticalButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  className = "",
  disabled,
  ...props
}) => {
  // Variant Styles
  const variantStyles = {
    primary: {
      bg: "var(--color-accent)",
      color: "var(--color-bg)",
      border: "2px solid var(--color-accent)",
      boxShadow: "5px 5px 0px var(--color-text-primary)",
      hoverShadow: "3px 3px 0px var(--color-text-primary)",
      activeShadow: "0px 0px 0px transparent",
    },
    intelligence: {
      bg: "var(--color-intelligence)",
      color: "var(--color-bg)",
      border: "2px solid var(--color-intelligence)",
      boxShadow: "5px 5px 0px var(--color-surface-high)",
      hoverShadow: "3px 3px 0px var(--color-surface-high)",
      activeShadow: "0px 0px 0px transparent",
    },
    threat: {
      bg: "var(--color-threat)",
      color: "var(--color-text-primary)",
      border: "2px solid var(--color-threat)",
      boxShadow: "5px 5px 0px var(--color-bg)",
      hoverShadow: "3px 3px 0px var(--color-bg)",
      activeShadow: "0px 0px 0px transparent",
    },
    outline: {
      bg: "transparent",
      color: "var(--color-text-primary)",
      border: "2px solid var(--color-surface-border)",
      boxShadow: "5px 5px 0px var(--color-surface-high)",
      hoverShadow: "3px 3px 0px var(--color-accent)",
      activeShadow: "0px 0px 0px transparent",
    },
  };

  const sizeStyles = {
    sm: { padding: "6px 14px", fontSize: "var(--font-size-xs)" },
    md: { padding: "10px 22px", fontSize: "var(--font-size-sm)" },
    lg: { padding: "14px 30px", fontSize: "var(--font-size-base)" },
  };

  const selectedVariant = variantStyles[variant];
  const selectedSize = sizeStyles[size];

  return (
    <motion.button
      whileHover={disabled ? undefined : { x: 2, y: 2, boxShadow: selectedVariant.hoverShadow }}
      whileTap={disabled ? undefined : { x: 5, y: 5, boxShadow: selectedVariant.activeShadow }}
      transition={{ duration: 0.12, ease: "easeOut" }}
      style={{
        backgroundColor: selectedVariant.bg,
        color: selectedVariant.color,
        border: selectedVariant.border,
        boxShadow: selectedVariant.boxShadow,
        padding: selectedSize.padding,
        fontSize: selectedSize.fontSize,
        fontFamily: "var(--font-family-mono)",
        fontWeight: "bold",
        letterSpacing: "0.05em",
        cursor: disabled ? "not-allowed" : "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        textTransform: "uppercase",
        opacity: disabled ? 0.5 : 1,
      }}
      className={className}
      disabled={disabled}
      {...props}
    >
      {icon && <span style={{ display: "inline-flex", alignItems: "center" }}>{icon}</span>}
      <span>{children}</span>
    </motion.button>
  );
};
