import React, { forwardRef } from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import { SkipLink } from "ui"

const Header = forwardRef(({ children, shadow }, ref) => {
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
      <Box as={SkipLink} id='main-content' />
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
