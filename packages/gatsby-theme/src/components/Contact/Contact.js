import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import { RichText } from "ui"

const Contact = ({ children, title, align, sx, ...props }) => {
  return (
    <Box
      variant='wrapper'
      __themeKey='container'
      __css={{ textAlign: align, ...sx }}
      {...props}
    >
      <RichText sx={{ textAlign: align, pb: "small" }} {...props}>
        {title}
      </RichText>
      {children}
    </Box>
  )
}

Contact.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  sx: PropTypes.shape({}),
  align: PropTypes.string,
}

Contact.defaultProps = {
  align: "center",
  sx: undefined,
}

export default Contact
