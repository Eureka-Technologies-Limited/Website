/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#0b1a30',           // Deep background
        lightBlue: '#1D3557',          // Surface/primary elements
        accent: '#F57A55',             // CTA, highlights
        primaryText: '#FFFFFF',        // Main text
        secondaryText: '#B0BEC5',      // Subtext, placeholders
        border: '#37474F',             // Input borders / dividers

        // Additional colors
        lighterBlue: '#2C4A74',    // A bit lighter than lightBlue, great for widget backgrounds
        paleBlue: '#3E5C89',       // More muted, still in the theme
        skyBlue: '#5B7BA8',        // Light enough for cards or panel backgrounds
        frostBlue: '#A8C0D9',      // Very soft, usable as a background in light mode or card edge
        deepRed: '#D33B41',            // Error / alternate accent
        paleOrange: '#FFCCBC',         // Hover backgrounds / soft accents
        softYellow: '#FFD166',         // Warnings / alerts
        successGreen: '#4CAF50',       // Success state
        softGreen: '#C8E6C9',          // Light green background  
        infoBlue: '#2196F3',           // Info messages
        mutedBlue: '#90A4AE',          // Muted UI text
        darkGray: '#263238',           // Darker surfaces 
        lightGray: '#ECEFF1',          // Backgrounds / card backgrounds
        transparentWhite: 'rgba(255,255,255,0.05)', // Overlays / subtle hover
      },
    },
  },
  plugins: [],
}