import React from "react"
import PropTypes from "prop-types"
import Button from "../Button"
import Link from "../Link"

const HeroCtaButton = React.forwardRef(({ children, to, ...props }, ref) => (
  <Button as={Link} ref={ref} to={to} {...props}>
    {children}
  </Button>
))

HeroCtaButton.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default HeroCtaButton
