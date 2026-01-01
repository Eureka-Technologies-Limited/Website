import React from "react";

export const Input = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <input
            ref={ref}
            {...props}
            className={`
        w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20
        text-white placeholder:text-gray-400
        focus:outline-none focus:ring-2 focus:ring-[#f57a55] focus:border-[#f57a55]
        transition-all duration-200
        ${className || ""}
      `}
        />
    );
});

Input.displayName = "Input";
