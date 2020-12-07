import React from "react"
import PropTypes from "prop-types"
import { Heading } from "ui"

const CardHeading = ({ children, ...props }) => (
  <Heading as='h3' {...props}>
    {children}
  </Heading>
)

CardHeading.propTypes = {
  children: PropTypes.string.isRequired,
}

export default CardHeading
