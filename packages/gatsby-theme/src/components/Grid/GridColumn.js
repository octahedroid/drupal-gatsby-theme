import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"

const GridColumn = ({ columns, rows, children, ...props }) => {
  const calculatedColumns = Array.isArray(columns)
    ? columns.map((el) => (el ? `span ${el}` : null))
    : `span ${columns}`

  const calculatedRows = Array.isArray(rows)
    ? rows.map((el) => (el ? `span ${el}` : null))
    : `span ${rows}`

  return (
    <Box
      __css={{
        gridColumn: columns ? calculatedColumns : "auto",
        gridRow: rows ? calculatedRows : "auto",
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

GridColumn.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.node,
  rows: PropTypes.node,
}

GridColumn.defaultProps = {
  columns: undefined,
  rows: undefined,
}

export default GridColumn
