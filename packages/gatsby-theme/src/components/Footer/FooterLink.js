import PropTypes from "prop-types"
import Link from "../Link"

const FooterLink = ({ children, to, ariaLabel, variant, sx }) => {
  const colorOptions = {
    dark: "lightShade",
    light: "darkShade",
  }

  return (
    <Link
      sx={{
        color: colorOptions[variant],
        ...sx,
      }}
      to={to}
      ariaLabel={ariaLabel}
    >
      {children}
    </Link>
  )
}

FooterLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  variant: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired,
  sx: PropTypes.shape({}),
}

FooterLink.defaultProps = {
  variant: "dark",
  sx: null,
}

export default FooterLink
