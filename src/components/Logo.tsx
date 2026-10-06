import React from "react";

export interface LogoProps {
  /**
   * Concept variant:
   * - 'isometric-l' (Default): Clean 3D axonometric volume of letter L with architectural planes
   * - 'spatial-fold': Spatial threshold / void opening cut into the structure (closest to ArchDaily)
   * - 'parallel-lines': 3 isometric parallel lines emphasizing "Larik" (ordered rows/lines)
   */
  concept?: "isometric-l" | "spatial-fold" | "parallel-lines";
  /**
   * Display mode:
   * - 'stacked' (Default): Mark + stacked two-line lowercase ('larik' / 'digital') like ArchDaily
   * - 'horizontal': Mark + single line ('larik digital')
   * - 'mark-only': Just the isometric architectural icon
   */
  variant?: "stacked" | "horizontal" | "mark-only";
  /**
   * Size presets
   */
  size?: "sm" | "md" | "lg";
  /**
   * Optional custom text label override (defaults to "larik" / "digital")
   */
  primaryText?: string;
  secondaryText?: string;
  className?: string;
}

export function LogoMark({
  concept = "isometric-l",
  className = "w-[30px] h-[34px]",
}: {
  concept?: "isometric-l" | "spatial-fold" | "parallel-lines";
  className?: string;
}) {
  if (concept === "spatial-fold") {
    // Concept 2: Spatial Fold & Threshold (Echoing ArchDaily's void/doorway)
    return (
      <svg
        viewBox="0 0 34 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        <path d="M7 4 L19 1 V21 L13 23 V33 L29 28 V19 L19 22" />
        <path d="M7 4 V35 L29 28" />
        <path d="M13 23 V34" opacity="0.6" />
      </svg>
    );
  }

  if (concept === "parallel-lines") {
    // Concept 3: Parallel Lines / Larik (Rhythm of architectural lines)
    return (
      <svg
        viewBox="0 0 34 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        <path d="M6 4 V32 L30 26" />
        <path d="M13 8 V28 L25 24" />
        <path d="M20 12 V24 L21 23.5" />
      </svg>
    );
  }

  // Concept 1 (Default & Recommended): Pure Isometric Architectural L
  return (
    <svg
      viewBox="0 0 34 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Outer contour of 3D L prism */}
      <path d="M6 5 L17 1 V21 L28 17 V29 L17 35 L6 30 Z" />
      {/* Architectural vertical ridge */}
      <path d="M17 1 V35" />
      {/* Isometric base floor plane crease */}
      <path d="M6 30 L17 24 L28 29" />
    </svg>
  );
}

export function Logo({
  concept = "isometric-l",
  variant = "stacked",
  size = "md",
  primaryText = "larik",
  secondaryText = "digital",
  className = "",
}: LogoProps) {
  // Size mappings
  const markSizes = {
    sm: "w-6 h-7",
    md: "w-[28px] h-[33px]",
    lg: "w-9 h-10",
  };

  const textStyles = {
    sm: {
      primary: "text-[15px] tracking-[-0.035em]",
      secondary: "text-[15px] tracking-[-0.025em]",
      gap: "gap-2.5",
    },
    md: {
      primary: "text-[17px] tracking-[-0.035em]",
      secondary: "text-[17px] tracking-[-0.025em]",
      gap: "gap-3",
    },
    lg: {
      primary: "text-[21px] tracking-[-0.035em]",
      secondary: "text-[21px] tracking-[-0.025em]",
      gap: "gap-3.5",
    },
  };

  const currentText = textStyles[size];

  if (variant === "mark-only") {
    return (
      <div className={`inline-flex items-center text-primary ${className}`}>
        <LogoMark concept={concept} className={markSizes[size]} />
      </div>
    );
  }

  if (variant === "horizontal") {
    return (
      <div className={`inline-flex items-center ${currentText.gap} text-primary ${className}`}>
        <LogoMark concept={concept} className={markSizes[size]} />
        <span className="font-sans font-semibold tracking-tight text-lg text-primary">
          <span className="font-bold">{primaryText}</span>{" "}
          <span className="font-normal text-muted-foreground">{secondaryText}</span>
        </span>
      </div>
    );
  }

  // ArchDaily Style: Two-line stacked lowercase
  return (
    <div className={`inline-flex items-center ${currentText.gap} text-primary select-none group ${className}`}>
      <div className="transition-transform duration-200 group-hover:scale-105">
        <LogoMark concept={concept} className={markSizes[size]} />
      </div>
      <div className="flex flex-col justify-center leading-[1.05] text-left">
        <span className={`font-sans font-semibold text-primary lowercase ${currentText.primary}`}>
          {primaryText}
        </span>
        <span className={`font-sans font-normal text-[#4A4D56] lowercase ${currentText.secondary}`}>
          {secondaryText}
        </span>
      </div>
    </div>
  );
}
