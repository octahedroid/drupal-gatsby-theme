import PropTypes from "prop-types"
import { Heading } from "ui"

const CardIntro = ({ children, variant, ...props }) => (
  <Heading variant={variant} {...props}>
    {children}
  </Heading>
)

CardIntro.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

CardIntro.defaultProps = {
  variant: "intro",
}

export default CardIntro
