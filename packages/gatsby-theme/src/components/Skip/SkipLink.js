import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"

const SkipLink = ({ children, id, ...props }) => {
  return (
    <Box
      as='a'
      tabindex='0'
      href={`#${id}`}
      __css={{
        display: "flex",
        alignItems: "center",
        bg: "#F9F9F9",
        height: 8,
        top: "0",
        left: "10%",
        zIndex: 100,
        padding: "8px",
        position: "absolute",
        transform: "translateY(-100%) translateX(-50%)",
        transition: "transform 0.2s",
        ":focus": {
          transform: "translateY(0%) translateX(-50%)",
        },
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

SkipLink.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
}

SkipLink.defaultProps = {
  children: "Skip to main content",
  id: "main-content",
}

export default SkipLink
