import PropTypes from "prop-types"
import { Box } from "theme-ui"

const HeroColumn = ({ children, columns, rows, sx, ...props }) => {
  return (
    <Box sx={{ p: "xsmall", ...sx }} {...props}>
      {children}
    </Box>
  )
}

HeroColumn.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
  sx: PropTypes.shape({}),
  columns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
HeroColumn.defaultProps = {
  sx: {},
  columns: 1,
  rows: "",
}

export default HeroColumn
