import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import Link from "../Link"

const FooterMenuItem = ({ children, to, ariaLabel, sx }) => {
  return (
    <Box
      as='li'
      __css={{
        mt: "xsmall",
        mb: "small",
        display: ["inline-block", null, "block"],
        mr: ["xsmall", null, 0],
        listStyleType: "none",
      }}
    >
      <Link
        sx={{ display: "block", color: "lightShade", ...sx }}
        ariaLabel={ariaLabel}
        to={to}
      >
        {children}
      </Link>
    </Box>
  )
}

FooterMenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  sx: PropTypes.shape({}),
  ariaLabel: PropTypes.string.isRequired,
}

FooterMenuItem.defaultProps = {
  sx: null,
}

export default FooterMenuItem
