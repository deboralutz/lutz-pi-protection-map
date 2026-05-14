type BrandLogoProps = {
  className?: string;
  decorative?: boolean;
};

export function BrandLogo({ className = "", decorative = false }: BrandLogoProps) {
  return (
    <img
      alt={decorative ? "" : "Lutz Propriedade Intelectual"}
      aria-hidden={decorative ? true : undefined}
      className={["block h-auto select-none", className].join(" ")}
      draggable="false"
      src="/lutz-pi-logo.svg"
    />
  );
}
