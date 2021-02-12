import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"

const BlogHead = ({ imageOverlay, children, ...props }) => {
  return (
    <Box
      __css={{
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        minHeight: "50vh",
        color: "white",
        ":before": {
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          bg: imageOverlay,
          minWidth: "100%",
          minHeight: "100%",
          flexShrink: 0,
          content: '""',
        },
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

BlogHead.propTypes = {
  children: PropTypes.node.isRequired,
  imageOverlay: PropTypes.string,
}

BlogHead.defaultProps = {
  imageOverlay: "darkBlueOpaque",
}

export default BlogHead
