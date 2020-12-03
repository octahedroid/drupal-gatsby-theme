import PropTypes from "prop-types"
import { RichText } from "ui"

const HeroCtaText = ({ children, sx, ...props }) => {
  return (
    <RichText variant='xl' sx={{ mb: "xsmall", ...sx }} {...props}>
      {children}
    </RichText>
  )
}

HeroCtaText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
  sx: PropTypes.shape({}),
}

HeroCtaText.defaultProps = {
  sx: null,
}

export default HeroCtaText
