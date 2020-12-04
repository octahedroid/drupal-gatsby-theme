import PropTypes from "prop-types"
import { Grid } from "ui"

const HeroCtaColumn = ({ children, columns, rows, sx, ...props }) => {
  return (
    <Grid.Column
      columns={columns}
      rows={columns}
      sx={{ p: "xsmall", ...sx }}
      {...props}
    >
      {children}
    </Grid.Column>
  )
}

HeroCtaColumn.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
  sx: PropTypes.shape({}),
  columns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
HeroCtaColumn.defaultProps = {
  sx: null,
  columns: "",
  rows: "",
}

export default HeroCtaColumn
