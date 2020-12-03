import PropTypes from "prop-types"
import { Heading } from "ui"

const HeroTextIntro = ({ children, ...props }) => (
  <Heading variant='intro' {...props}>
    {children}
  </Heading>
)

HeroTextIntro.propTypes = {
  children: PropTypes.string.isRequired,
}

export default HeroTextIntro
