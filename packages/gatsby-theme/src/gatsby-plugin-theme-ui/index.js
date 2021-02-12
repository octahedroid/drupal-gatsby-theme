const bColors = {
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  background: "#fff",
  primary: "#0CBFC7",
  secondary: "#CA3E73",
  darkShade: "#37375B",
  lightShade: "#F7F7F7",
  darkBlueOpaque: "rgba(21, 30, 46, 0.85)",
}

const bFonts = {
  sans:
    '"Noto Sans", -apple-system, BlinkMacSystemFont,"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  headings: "'Poppins', sans-serif",
}

const bFontSizes = {
  tiny: ".875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "2rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
}

const bLineHeights = {
  none: "1",
}

const bHeadings = {
  base: {
    fontFamily: "heading",
    fontWeight: "heading",
    lineHeight: "heading",
    my: "xsmall",
  },
  intro: {
    textTransform: "uppercase",
    mb: ["xsmall", null, "small"],
    mt: "xsmall",
    fontWeight: "normal",
    lineHeight: "normal",
  },
}
const bShadows = {
  default: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
}

const bTransitions = {
  bg: "color, background-color .2s ease-in-out",
  shadow: "box-shadow .4s ease-in-out",
  color: "color, border-color .4s",
}

export default {
  background: {
    default: {
      bg: "white",
      color: "black",
    },
    dark: {
      bg: "darkShade",
      color: "lightShade",
    },
    light: {
      bg: "lightShade",
      color: "darkShade",
    },
  },
  colors: {
    ...bColors,
  },
  fonts: {
    ...bFonts,
    body: bFonts.sans,
    heading: bFonts.headings,
  },
  fontWeights: {
    thin: "200",
  },
  fontSizes: bFontSizes,
  lineHeights: bLineHeights,
  shadows: bShadows,
  transitions: bTransitions,
  container: {
    wrapper: {
      maxWidth: ["340px", "768px", "1024px", "1280px"],
      width: "100%",
      mx: "auto",
    },
  },
  icons: {
    mobileMenu: {
      p: "tiny",
      fontSize: "5xl",
    },
    social: {
      mx: ["tiny", null, "small"],
      fontSize: "4xl",
    },
  },
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
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "link",
      textDecoration: "none",
      ":hover": {
        textDecoration: "underline",
      },
    },
  },
  space: {
    none: 0,
    tiny: "0.25rem", // 4px
    xsmall: "0.5rem", // 8px
    small: "1rem", // 16px
    medium: "2rem", // 32px //
    large: "4rem", // 64px
    xlarge: "8rem", // 128px
  },
  images: {
    default: {
      maxWidth: "100%",
      width: "100%",
    },
    avatar: {
      borderRadius: "100%",
      width: "6rem",
      overflow: "hidden",
      mb: "xsmall",
    },
  },
  headings: {
    default: {
      ...bHeadings.base,
    },
    intro: {
      ...bHeadings.intro,
      fontSize: "medium",
      color: "secondary",
    },
    big: {
      ...bHeadings.base,
      fontSize: ["4xl", null, "5xl"],
      my: "small",
    },
    accentUppercase: {
      textTransform: "uppercase",
      color: "accent",
      mb: ["none", "small"],
    },
  },
}
