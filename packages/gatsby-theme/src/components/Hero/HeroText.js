import React from "react"
import PropTypes from "prop-types"
import { RichText } from "ui"

const HeroText = ({ children, sx, ...props }) => {
  return (
    <RichText sx={{ mb: "xsmall", ...sx }} {...props}>
      {children}
    </RichText>
  )
}

HeroText.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.shape({}),
}

HeroText.defaultProps = {
  sx: undefined,
}

export default HeroText
