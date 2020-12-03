import PropTypes from "prop-types"
import Heading from "../Heading"

const HeroCtaHeading = ({ children, ...props }) => (
  <Heading variant='big' {...props}>
    {children}
  </Heading>
)

HeroCtaHeading.propTypes = {
  children: PropTypes.string.isRequired,
}

export default HeroCtaHeading
