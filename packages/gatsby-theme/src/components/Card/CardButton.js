import React from "react"
import PropTypes from "prop-types"
import Button from "../Button"
import Link from "../Link"

const CardButton = ({ children, variant, to, ...props }) => (
  <Button as={Link} variant={variant} to={to} {...props}>
    {children}
  </Button>
)

CardButton.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

CardButton.defaultProps = {
  variant: "primary",
}

export default CardButton
