import PropTypes from "prop-types"
import { Box, useThemeUI } from "theme-ui"
import Link from "../Link"

const HeaderMenuItem = ({ children, to, active, sx }) => {
  const { theme } = useThemeUI()

  const colorOptions = active
    ? { color: "secondary", borderTopColor: "secondary" }
    : {
        color: "black",
        borderTopColor: "transparent",
      }

  return (
    <Box as='li'>
      <Link
        sx={{
          display: "flex",
          alignItems: "center",
          textTransform: "uppercase",
          textDecoration: "none",
          borderTop: "4px solid",
          height: 80,
          transition: theme.transitions.color,
          px: "tiny",
          mx: "tiny",
          ...colorOptions,
          "&:hover": {
            color: "secondary",
            borderTopColor: "secondary",
          },
          "&[aria-current=page]": {
            color: "secondary",
            borderTopColor: "secondary",
          },
          ...sx,
        }}
        to={to}
      >
        {children}
      </Link>
    </Box>
  )
}

HeaderMenuItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
  to: PropTypes.string.isRequired,
  active: PropTypes.bool,
  sx: PropTypes.shape({}),
}

HeaderMenuItem.defaultProps = {
  active: false,
  sx: null,
}

export default HeaderMenuItem
