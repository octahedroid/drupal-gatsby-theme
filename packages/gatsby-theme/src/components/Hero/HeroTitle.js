import PropTypes from "prop-types"
import { Heading } from "ui"

const HeroTitle = ({ children, sx }) => (
  <Heading sx={{ fontSize: ["3xl", null, "5xl"], ...sx }}>{children}</Heading>
)

HeroTitle.propTypes = {
  children: PropTypes.string.isRequired,
  sx: PropTypes.shape({}),
}

HeroTitle.defaultProps = {
  sx: {},
}

export default HeroTitle
