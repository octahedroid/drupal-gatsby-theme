import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"

const Section = ({ children, variant, isFull, sx }) => {
  return (
    <Box
      as='section'
      variant={variant}
      __themeKey='background'
      sx={isFull ? sx : null}
    >
      {isFull ? (
        children
      ) : (
        <Box variant='wrapper' __themeKey='container' sx={sx}>
          {children}
        </Box>
      )}
    </Box>
  )
}

Section.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
  variant: PropTypes.string,
  isFull: PropTypes.bool,
  sx: PropTypes.shape({}),
}

Section.defaultProps = {
  variant: "default",
  isFull: false,
  sx: null,
}

export default Section
