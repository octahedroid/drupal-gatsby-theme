import PropTypes from "prop-types"
import { Heading } from "ui"

const FooterMenuTitle = ({ children }) => {
  return (
    <Heading as='h5' variant='accentUppercase'>
      {children}
    </Heading>
  )
}

FooterMenuTitle.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FooterMenuTitle
