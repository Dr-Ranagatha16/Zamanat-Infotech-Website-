import React from "react";

type MagicCardProps = {
  children: React.ReactNode;
  gradientSize?: number; // Size of the gradient
  gradientColor?: string; // Color of the glow
  gradientOpacity?: number; // Opacity of the glow
  className?: string; // Additional classes for styling
};

export const MagicCard = ({
  children,
  gradientSize = 200,
  gradientColor = "#00f",
  gradientOpacity = 0.7,
  className = "",
}: MagicCardProps) => {
  return (
    <div
      className={`relative ${className} transition-transform transform hover:scale-105`}
    >
      {/* Glowing effect */}
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          background: `radial-gradient(circle, ${gradientColor} ${gradientSize}px, transparent)`,
          opacity: gradientOpacity,
          filter: "blur(15px)",
          zIndex: -1,
        }}
      />
      {/* Main card content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
