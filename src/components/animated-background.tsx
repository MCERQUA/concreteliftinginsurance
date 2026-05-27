"use client";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff] via-[#0a1628] to-[#ffffff]" />

      {/* Animated orbs */}
      <div
        className="absolute top-1/4 -left-48 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(30,64,175,0.15) 0%, transparent 70%)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          animation: "float-slow 10s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute top-3/4 left-1/3 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,179,71,0.08) 0%, transparent 70%)",
          animation: "float 12s ease-in-out infinite",
          animationDelay: "4s",
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,64,175,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(30,64,175,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
