import PropTypes from "prop-types"
import RichText from "../RichText"

const HeroTextBody = ({ children, sx }) => (
  <RichText sx={{ fontSize: ["lg", null, "2xl"], width: "75%", ...sx }}>
    {children}
  </RichText>
)

HeroTextBody.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.shape({}),
}

HeroTextBody.defaultProps = {
  sx: null,
}

export default HeroTextBody
