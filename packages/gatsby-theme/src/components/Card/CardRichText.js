import React from "react"
import PropTypes from "prop-types"
import { RichText } from "ui"

const CardRichText = ({ text, children, sx }) => (
  <RichText sx={{ mb: "xsmall", ...sx }} text={text}>
    {children}
  </RichText>
)

CardRichText.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  sx: PropTypes.shape({}),
}

CardRichText.defaultProps = {
  children: undefined,
  text: undefined,
  sx: undefined,
}

export default CardRichText
