import PropTypes from "prop-types"
import { Icon } from "ui"

const FooterIcon = ({ icon, variant }) => {
  return <Icon icon={icon} variant={variant} sx={{ mt: "tiny" }} />
}

FooterIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

FooterIcon.defaultProps = {
  variant: "social",
}

export default FooterIcon
