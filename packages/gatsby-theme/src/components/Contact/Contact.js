import PropTypes from "prop-types"
import { Box } from "theme-ui"

const Contact = ({ children, ...props }) => {
  return (
    <Box variant='wrapper' __themeKey='container' {...props}>
      {children}
    </Box>
  )
}

Contact.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Contact
