import logoSrc from "@/assets/coresoft-logo.png";

interface LogoProps {
  variant?: "dark" | "light";
  height?: number;
}

export function Logo({ height = 44 }: LogoProps) {
  return (
    <img
      src={logoSrc}
      alt="CoreSoft Solutions"
      style={{ height, width: "auto", display: "block" }}
      width={560}
      height={Math.round((130 / 440) * 560)}
      decoding="async"
    />
  );
}
