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
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
}

SkipContent.defaultProps = {
  children: undefined,
}

export default SkipContent
