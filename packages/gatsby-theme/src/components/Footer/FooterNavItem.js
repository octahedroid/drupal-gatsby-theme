import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"

const FooterNavItem = ({ children, ...props }) => (
  <Box as='li' __css={{ px: "xsmall", listStyleType: "none" }} {...props}>
    {children}
  </Box>
)

FooterNavItem.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FooterNavItem
