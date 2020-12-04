import PropTypes from "prop-types"
import { Box } from "theme-ui"
import { Link, Logo } from "ui"

const FooterBranding = ({ variant, width, to, ariaLabel }) => {
  const fillOptions = {
    dark: "#F7F7F7",
    light: "#37375B",
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
