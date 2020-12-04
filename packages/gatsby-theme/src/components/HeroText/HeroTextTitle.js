import React from "react"
import PropTypes from "prop-types"
import Heading from "../Heading"

const HeroTextTitle = ({ children, sx }) => (
  <Heading sx={{ fontSize: ["3xl", null, "5xl"], ...sx }}>{children}</Heading>
)

HeroTextTitle.propTypes = {
  children: PropTypes.string.isRequired,
  sx: PropTypes.shape({}),
}

HeroTextTitle.defaultProps = {
  sx: null,
}

export default HeroTextTitle
