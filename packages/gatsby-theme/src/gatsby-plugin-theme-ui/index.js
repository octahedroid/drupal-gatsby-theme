export default {
  buttons: {
    primary: {
      color: "darkShade",
      bg: "primary",
      "&:hover": {
        backgroundColor: "secondary",
        color: "lightShade",
      },
    },
    secondary: {
      color: "background",
      bg: "secondary",
      "&:hover": {
        backgroundColor: "primary",
        color: "lightShade",
      },
    },
    light: {
      bg: "lightShade",
      color: "black",
      "&:hover": {
        backgroundColor: "darkShade",
        color: "white",
      },
    },
    dark: {
      bg: "darkShade",
      color: "white",
      "&:hover": {
        backgroundColor: "lightShade",
        color: "black",
      },
    },
    transparent: {
      border: "none",
      background: "none",
      "&:hover": {
        boxShadow: "none",
      },
    },
  },
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    text: "#333",
    background: "#fff",
    primary: "#0CBFC7",
    secondary: "#CA3E73",
    accent: "#E8DA8B",
    darkShade: "#37375B",
    lightShade: "#F7F7F7",
    body: "darkShade",
    link: "#3379A8",
  },
  fontSizes: {
    tiny: ".875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "2rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
  },
  transitions: {
    bg: "color, background-color .2s ease-in-out",
    shadow: "box-shadow .4s ease-in-out",
    color: "color, border-color .4s",
  },
  space: {
    none: 0,
    tiny: "0.25rem",
    small: "0.5rem",
    medium: "1rem",
    large: "2rem",
    xlarge: "4rem",
    xxlarge: "8rem",
  },
  shadows: {
    default: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  },
  styles: {
    root: {
      fontFamily: "Poppins",
    },
  },
}
