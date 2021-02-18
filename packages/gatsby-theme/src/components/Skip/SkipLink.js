import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"

const SkipLink = ({ children, id, label, ...props }) => {
  return (
    <Box
      as='a'
      tabindex='0'
      href={`#${id}`}
      aria-label={label}
      __css={{
        border: 0,
        height: 1,
        m: -1,
        p: 0,
        overflow: "hidden",
        top: "0",
        left: "10%",
        zIndex: 100,
        position: "absolute",
        transform: "translateY(-100%) translateX(-50%)",
        transition: "transform 0.2s",
        ":focus": {
          transform: "translateY(0%) translateX(-50%)",
          p: "small",
          position: "fixed",
          top: "xsmall",
          background: "white",
          width: "auto",
          height: "auto",
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
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
}

SkipLink.defaultProps = {
  children: "Skip to main content",
  label: "Skip to main content",
}

export default SkipLink
