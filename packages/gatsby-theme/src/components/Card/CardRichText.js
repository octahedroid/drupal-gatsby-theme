import React from "react"
import PropTypes from "prop-types"
import RichText from "../RichText"

const CardRichText = ({ text, children, sx }) => (
  <RichText sx={{ mb: "xsmall", ...sx }} text={text}>
    {children}
  </RichText>
)

CardRichText.propTypes = {
  children: PropTypes.string,
  text: PropTypes.string,
  sx: PropTypes.shape({}),
}

CardRichText.defaultProps = {
  children: "",
  text: "",
  sx: null,
}

export default CardRichText
