import PropTypes from "prop-types"
import { RichText } from "ui"

const HeroText = ({ children, sx, ...props }) => {
  return (
    <RichText variant='xl' sx={{ mb: "xsmall", ...sx }} {...props}>
      {children}
    </RichText>
  )
}

HeroText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
  sx: PropTypes.shape({}),
}

HeroText.defaultProps = {
  sx: {},
}

export default HeroText
