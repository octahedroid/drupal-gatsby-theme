import { Box } from "theme-ui"
import PropTypes from "prop-types"
import Link from "../Link"

const MobileMenuItem = ({ children, to, sx }) => (
  <Box as='li'>
    <Link
      to={to}
      sx={{
        textDecoration: "none",
        color: "white",
        "&:hover": {
          textDecoration: "underline",
        },
        "&[aria-current=page]": {
          textDecoration: "underline",
        },
        ...sx,
      }}
    >
      {children}
    </Link>
  </Box>
)

MobileMenuItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
  to: PropTypes.string.isRequired,
  sx: PropTypes.shape({}),
}

MobileMenuItem.defaultProps = {
  sx: null,
}

export default MobileMenuItem
