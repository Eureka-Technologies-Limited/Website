import React from "react";

export function Button({
  children,
  className = "",
  variant = "default",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0B0E14] rounded-2xl";

  const variants = {
    default:
      "bg-gradient-to-r from-[#5EEAD4] to-[#60A5FA] text-black hover:opacity-90 focus:ring-[#60A5FA]",
    outline:
      "border border-white/20 text-white hover:bg-white/5 focus:ring-white/30",
    ghost:
      "text-white hover:bg-white/5 focus:ring-white/30",
  };

  return (
    <button
      className={`${base} px-6 py-3 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
