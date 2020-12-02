import { Box } from "theme-ui"
import PropTypes from "prop-types"

const MobileMenuNavbar = ({ children, ...props }) => (
  <Box
    as='ul'
    __css={{
      listStyleType: "none",
      pl: 0,
    }}
    {...props}
  >
    {children}
  </Box>
)

MobileMenuNavbar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
}

export default MobileMenuNavbar
