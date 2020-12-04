import React from "react"
import PropTypes from "prop-types"
import RichText from "../RichText"

const CardText = ({ children, sx }) => (
  <RichText sx={{ mb: "xsmall", ...sx }}>{children}</RichText>
)

CardText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  sx: PropTypes.shape({}),
}

CardText.defaultProps = {
  sx: null,
}

export default CardText
