type PortalMarkProps = {
  className?: string;
};

export function PortalMark({ className = "" }: PortalMarkProps) {
  return (
    <div
      aria-hidden="true"
      className={[
        "relative aspect-square w-full max-w-[18rem] rounded-[2rem] border border-white/15 p-5 portal-sheen",
        "shadow-[0_0_80px_rgba(255,255,255,0.08)]",
        className,
      ].join(" ")}
    >
      <div className="absolute inset-6 rounded-[1.45rem] border border-white/20" />
      <div className="absolute inset-x-12 bottom-10 top-16 rounded-t-full border border-[#C8C8C2]/45" />
      <div className="absolute inset-x-16 bottom-10 top-24 rounded-t-full border border-white/15" />
      <div className="absolute bottom-10 left-1/2 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#C8C8C2]/60 to-transparent" />
    </div>
  );
}

