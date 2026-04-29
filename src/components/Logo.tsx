interface LogoProps {
  variant?: "dark" | "light";
  height?: number;
}

export function Logo({ variant = "dark", height = 44 }: LogoProps) {
  const wordmarkFill = variant === "dark" ? "#FFFFFF" : "#0D47A1";
  const solutionsFill = variant === "dark" ? "#90CAF9" : "#0D47A1";
  const connectorStroke = variant === "dark" ? "#90CAF9" : "#0D47A1";

  return (
    <svg
      viewBox="0 0 440 130"
      style={{ height }}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="CoreSoft Solutions"
    >
      {/* Connector lines */}
      <line x1="80" y1="80" x2="135" y2="55" stroke={connectorStroke} strokeWidth="3.5" strokeLinecap="round" />
      <line x1="80" y1="80" x2="135" y2="105" stroke={connectorStroke} strokeWidth="3.5" strokeLinecap="round" />
      {/* Central node */}
      <circle cx="48" cy="80" r="32" fill="#E53935" />
      {/* Satellites */}
      <circle cx="148" cy="50" r="17" fill="#1565C0" />
      <circle cx="148" cy="110" r="17" fill="#1565C0" />
      {/* Wordmark */}
      <text x="185" y="78" fontFamily="DM Sans, sans-serif" fontWeight="900" fontSize="50" fill={wordmarkFill} letterSpacing="-1">CoreSoft</text>
      {/* Red rule */}
      <rect x="185" y="86" width="200" height="3" fill="#E53935" />
      {/* Solutions */}
      <text x="185" y="116" fontFamily="DM Sans, sans-serif" fontWeight="300" fontSize="26" fill={solutionsFill} letterSpacing="6">SOLUTIONS</text>
    </svg>
  );
}
