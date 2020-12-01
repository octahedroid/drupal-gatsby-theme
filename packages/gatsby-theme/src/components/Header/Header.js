import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import { SkipNavLink } from "@reach/skip-nav"

const SkipNavStyles = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: 1,
  width: 1,
  margin: -1,
  padding: 0,
  overflow: "hidden",
  position: "absolute",
  ":focus": {
    padding: "1rem",
    position: "fixed",
    top: 10,
    left: 10,
    background: "white",
    zIndex: 100,
    width: "auto",
    height: "auto",
    clip: "auto",
  },
}

const Header = React.forwardRef(({ children, shadow }, ref) => {
  return (
    <Box
      as='nav'
      ref={ref}
      __css={{
        position: "fixed",
        width: "100%",
        zIndex: 30,
        height: ["auto", null, 80],
        top: 0,
        left: 0,
        color: "black",
        backgroundColor: "white",
        transition: "shadow",
        boxShadow: shadow ? "default" : "",
      }}
    >
      <Box as={SkipNavLink} __css={SkipNavStyles} />
      <Box
        __css={{
          display: "flex",
          flexWrap: "wrap",
          p: [1, null, 0],
          alignItems: "center",
          justifyContent: "space-between",
        }}
        variant='wrapper'
        __themeKey='container'
      >
        {children}
      </Box>
    </Box>
  )
})

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
  shadow: PropTypes.bool,
}

Header.defaultProps = {
  shadow: false,
}

export default Header
