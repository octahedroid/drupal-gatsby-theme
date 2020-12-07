import React from "react"
import PropTypes from "prop-types"
import { Heading } from "ui"

const HeroIntro = ({ children, ...props }) => (
  <Heading variant='intro' {...props}>
    {children}
  </Heading>
)

HeroIntro.propTypes = {
  children: PropTypes.string.isRequired,
}

export default HeroIntro
