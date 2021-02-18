import React from "react"
import PropTypes from "prop-types"
import { Box, useThemeUI } from "theme-ui"
import { Link, Logo } from "ui"

const FooterBranding = ({ variant, width, to, ariaLabel }) => {
  const { theme } = useThemeUI()
  const fillOptions = {
    dark: theme.colors.lightShade,
    light: theme.colors.darkShade,
  }

  return (
    <Box
      __css={{
        px: ["xsmall", null, "medium"],
        order: ["auto", 1],
        mb: ["small", null, 0],
        display: "flex",
        justifyContent: ["center", null, "flex-start"],
      }}
    >
      <Link to={to} ariaLabel={ariaLabel}>
        <Logo fill={fillOptions[variant]} width={width} />
      </Link>
    </Box>
  )
}

FooterBranding.propTypes = {
  variant: PropTypes.string,
  width: PropTypes.number,
  to: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
}

FooterBranding.defaultProps = {
  variant: "dark",
  width: 200,
}

export default FooterBranding
