import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"

const SkipContent = ({ children, id, ...props }) => {
  return (
    <Box id={id} {...props}>
      {children}
    </Box>
  )
}

SkipContent.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
}

SkipContent.defaultProps = {
  id: "main-content",
}

export default SkipContent
